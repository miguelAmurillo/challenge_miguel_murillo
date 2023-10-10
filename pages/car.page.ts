const { I } = inject();
class CarPage {

  carContainesItems(numberOfItems: number){
    return I.seeNumberOfVisibleElements("div.cart_item", numberOfItems);
  }
}
export = new CarPage();