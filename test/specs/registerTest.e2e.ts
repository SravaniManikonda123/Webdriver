import { browser } from '@wdio/globals'
import RegisterPage  from "../pageobjects/register.page";
import LoginPage from "../pageobjects/login.page"
import { createRandomUser } from '../../utils/fakerData'
const dataCred=require("../../data/credentials.json")
import * as fs from 'fs'; 
describe("Login to the application",()=>{
    beforeEach(async () => {
        await RegisterPage.openLoginPage()
        await browser.maximizeWindow();
        await browser.pause(5000)
        console.log(await browser.getUrl())

    })

    it("Resgistering  to the website",async()=>{
    const fakerUserData=createRandomUser();
    console.log(fakerUserData)
    fs.writeFileSync(process.cwd() + '\\data\\credentials.json', JSON.stringify(fakerUserData));
    await RegisterPage.registerUSer(fakerUserData.firstName,fakerUserData.lastName,fakerUserData.email,fakerUserData.number,fakerUserData.password,fakerUserData.password);
    })
    it("Login to the application with valid credentials",async()=>{
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      let currentUseremail=dataCred.email;
      let currentUserPassword=dataCred.password
      console.log(currentUseremail,currentUserPassword)  
      await LoginPage.loginUser(currentUseremail,currentUserPassword);
      
   })
    after(async()=>{
        await browser.closeWindow()
    })
  
})