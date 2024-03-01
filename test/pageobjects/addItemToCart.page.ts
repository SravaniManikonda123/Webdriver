const path=require("path");
class AddItemToCart{
    get desktopTabIcon(){return $("(//a[text()='Desktops'])[1]")}
    get showAllOption(){return $("//a[normalize-space()='Show All Desktops']")}
    get itemToAddCat(){return $(`//a[normalize-space()='Apple Cinema 30"']`)}
    get checkbox(){return $("//input[@value='10']")}
    get selColor(){return $("//select[@id='input-option217']")}
    get textArea(){return $("//textarea[@id='input-option209']")}
    get uploadFileBtn(){return $("//button[@id='button-upload222']")}
    get DateToDeliver(){return $("//input[@id='input-option219']")}
    get TimeToDeliver(){return $("//input[@id='input-option221']")}
    get dateAndtimeToDeliver(){return $("//input[@id='input-option220']")}
    get quantity(){return $("//input[@id='input-quantity']")}
    get addToCartBtn(){return $("//button[@id='button-cart']")}

    public async addingItemToCartFn(){
     await this.desktopTabIcon.click();
     await this.showAllOption.click();
     await this.itemToAddCat.click();
     await this.checkbox.click();
     await this.selColor.selectByIndex(2);
     await this.textArea.setValue("Selected the best laptop")
    //  await this.uploadFileBtn.click()
     const filepath=path.join(__dirname,'../../data/tinytan2.jpg');
     const remoteFilePath=await browser.uploadFile(filepath);
     let fileInput=await browser.$('//input[@type="hidden"]');
     await fileInput.waitForExist({ timeout: 5000 });
     fileInput.setValue(remoteFilePath);
     await browser.pause(5000)
     await browser.acceptAlert();
     await this.dateAndtimeToDeliver.clearValue();
     await this.dateAndtimeToDeliver.setValue("2020-07-24");
     await this.TimeToDeliver.clearValue();
     await this.TimeToDeliver.setValue("11:30");
     await this.dateAndtimeToDeliver.clearValue();
     await this.dateAndtimeToDeliver.setValue("2020-07-24 11:30");
     await this.quantity.setValue("4");
     await this.addToCartBtn.click();
     await browser.pause(5000)
    }
}
export default new AddItemToCart();