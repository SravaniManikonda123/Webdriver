import { expect,$ } from '@wdio/globals'
// import {assert} from 'chai'
import Page from './page'
class RegisterPage extends Page{
   
  public  get inputFirstName () {return $('#input-firstname');}
  public  get myAccountDropDown() { return $("//span[normalize-space()='My Account']")};
  get registerToWebsite() { return $("//a[text()='Register']")};
  get loginToWebsite() { return $("//a[text()='Login']")};
  get inputLastName(){ return $("#input-lastname");}
  get inputPassword () { return $('#input-password')};
  get inputConfrmPassword () { return $('#input-confirm')};
  get inputEmail () { return $('#input-email')};
  get inputTelephone () { return $('#input-telephone')};
  get btnSubmit () {return $('//input[@value="Continue"]');}
  get conafterRegi(){return $("//a[text()='Continue']")}
  get policyRadioBtn(){return $("//input[@name='agree']")}
  get validateRegister(){return $("h1=Your Account Has Been Created!")}
  get validateLogout(){return $("h1=Account Logout")}
  get logOutUser(){ return $("(//a[text()='Logout'])[1]")}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async registerUSer(fname:string,lname:string,email:string,tele:any,pwd:string,cnfrmpwd:string) {
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        (await this.myAccountDropDown).waitForClickable()
        await this.myAccountDropDown.click();
        // assert.isTrue(await this.registerToWebsite.isDisplayed());
        await this.registerToWebsite.click();
        expect(await this.inputFirstName).toBeDisplayed();
        await this.inputFirstName.setValue(fname);
        await this.inputLastName.setValue(lname)
        await this.inputEmail.setValue(email)
        await this.inputTelephone.setValue(tele)
        await this.inputPassword.setValue(pwd);
        await this.inputConfrmPassword.setValue(cnfrmpwd);
        expect(await this.policyRadioBtn).toBeDisabled();
        await this.policyRadioBtn.click();
        expect(await this.btnSubmit).toBeEnabled();
        await this.btnSubmit.click();
        await browser.pause(5000)
        expect(await this.validateRegister).toBeDisplayed();
        await this.conafterRegi.click();
        await this.myAccountDropDown.click();
        await this.logOutUser.click();
        await this.validateLogout.isExisting();
       

    }
    async openLoginPage() {
      await super.open('https://naveenautomationlabs.com/opencart/');
  }
 
   
}

export default new RegisterPage();
