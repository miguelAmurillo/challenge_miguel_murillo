const { I } = inject();
class LoginPage {
  open(path: string) {
    I.amOnPage(path);
  }
  locators = {
    usernameTxtBox: "#user-name",
    passwordTxtBox: "#password",
    loginBtn: "#login-button",
    errorMessageHeader: "div.error-message-container > h3"
  }
  
  doLogin(userName: string, password: string): void {
    I.fillField(this.locators.usernameTxtBox, userName);
    I.fillField(this.locators.passwordTxtBox, secret(password));
    I.click(this.locators.loginBtn);
  }
  isLoginFailed():void{
    I.seeElement(this.locators.errorMessageHeader);
  }
}
export = new LoginPage();