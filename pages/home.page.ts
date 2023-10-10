const { I } = inject();
class HomePage {
  
  locators = {
    login: "//a[text()='Log in']",
    appLogoContainer: "div.app_logo",
    shoppingCarContainer: "#shopping_cart_container",
    firstCardItem:  locate("button.btn_inventory").first()
  }

  isAt() {
   I.seeElement(this.locators.appLogoContainer);
  }

  addItemToCar(): void {
   I.click(this.locators.firstCardItem)
  }

  goToShoppingCar(): void {
    I.click(this.locators.shoppingCarContainer);
  }
}
export = new HomePage();