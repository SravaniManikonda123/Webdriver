import RegisterPage  from "../pageobjects/register.page";

class LoginPage{
    get loginBTN(){return $("//input[@value='Login']")}




    public async loginUser(email:string,pwd:string){
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      await RegisterPage.myAccountDropDown.waitForClickable()
      await RegisterPage.myAccountDropDown.click();
      await RegisterPage.loginToWebsite.click();
      await RegisterPage.inputEmail.setValue(email);   
      await RegisterPage.inputPassword.setValue(pwd);
      await this.loginBTN.click();
      await browser.pause(10000)
    }
}
export default new LoginPage();
