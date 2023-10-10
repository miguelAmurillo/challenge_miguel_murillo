import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true
    },
    REST: {
      endpoint: 'https://www.mercadolibre.com.mx',
      timeout: 10000
    },
    //Helper recomendado para trabajar con APIS con Respuestas JSON
    JSONResponse: {},
  },
  include: {
    "I": './steps_file',
    "loginPage": "./pages/login.page.ts",
    "homePage": "./pages/home.page.ts",
    "carPage": "./pages/car.page.ts",
    "amazonService":"./services/amazon.services.ts"
    
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: './step_definitions/steps.ts'
  },
  mocha: {
    reporterOptions: {
      reportDir: "report",
      reportFilename: "execution-report-[datetime]",
      json: false,
      quiet: true
   }
  },
  name: 'infinity-growth'
}