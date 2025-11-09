import {test,expect} from '@playwright/test';

test('SA Home',async({page})=>{
    await page.goto('https://account.samsung.com');
    const pageTitle=await page.title();
    console.log('Page Title is:', pageTitle);
    //await page.pause();
})