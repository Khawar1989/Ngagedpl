const { test, expect } = require('@playwright/test');
import { Feedback } from '../Pages/givefeedback';
import { Login } from '../Pages/login';

test('feedback', async ({ page }) => {

    const username = "Khawar.k"
    const password = "DpL%7KK"

    const login_home = new Login(page)
    const feedback = new Feedback(page)

    await page.pause()
    
    await page.goto('https://dpl.ngageatwork.com/login')

    await login_home.ngagelogin(username,password)

    await expect(page).toHaveURL('https://dpl.ngageatwork.com/employee/home')

    await feedback.givefeedback()

    await page.pause() 
    

});