const{test , expect} =require('@playwright/test');
const LoginP = require('../../Pageactionclass/loginpage');

test('Sign In',async({page})=>{
    const loginq =new LoginP(page);
    await loginq.goto('account.samsung.com');
    //await page.getByText('Samsung account');
    await expect(page.getByText('Samsung account Privacy Notice')).toBeVisible();
    await page.pause();
})