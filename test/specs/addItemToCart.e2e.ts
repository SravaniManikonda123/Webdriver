import addItemToCartPage from "../pageobjects/addItemToCart.page";
import registerPage from "../pageobjects/register.page";
describe("Login to the application",()=>{
    beforeEach(async () => {
        await registerPage.openLoginPage()
        await browser.maximizeWindow();
        await browser.pause(5000)
        console.log(await browser.getUrl())

    })
    it("adding an item to check and check if it is added",async()=>{
        await addItemToCartPage.addingItemToCartFn()
    })
    after(async()=>{
        await browser.closeWindow()
    })
})