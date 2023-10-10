import assert from "assert";

const { I, loginPage, homePage, carPage, amazonService } = inject();

const credentialsMap = {
  'correctos':{username:"standard_user", password: "secret_sauce"},
  'incorrectos':{username:"standard_user", password: "wrong_password"}
}

var departmentsData;

Given('el usario esta en la pagina de inicio de sesión', () => {
  loginPage.open("/");
});

When('intenta logearse con usuario y contraseña {word}', (credentialsType: string) => {
  var credentials = credentialsMap[credentialsType];
  loginPage.doLogin(credentials.username,credentials.password);
});

Then('la pantalla de home debe de ser mostrada', () => {
  homePage.isAt();
});


Then('un mensaje de error debe de ser mostrado', () => {
  loginPage.isLoginFailed();
});

Given('el usuario se encuentra en la pagina de home', () => {
  loginPage.open("/");
  loginPage.doLogin("standard_user","secret_sauce");
  homePage.isAt();
});

When('agrega un item al carrito', () => {
 homePage.addItemToCar();
});

Then('el item debe de aparecer en la sección del carrito', () => {
  homePage.goToShoppingCar();
  carPage.carContainesItems(1);
});

Then('el item no debe de aparecer en la sección del carrito', () => {
  homePage.goToShoppingCar();
  carPage.carContainesItems(0);
});

When('el usuario consulta el servicio de departamentos', async ()=> {
  departmentsData = await amazonService.getDepartments();
 });
 
 Then('el servicio debe de responder con la lista de departamentos', () => {
    assert(departmentsData.departments.length > 0);
 });
