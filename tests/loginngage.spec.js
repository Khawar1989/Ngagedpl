const { test, expect } = require('@playwright/test');
import { Login } from '../Pages/login';

test('login', async ({ page }) => {

    const username = "Khawar.k"
    const password = "DpL%7KK"

    const login_home = new Login(page)

    await page.goto('https://dpl.ngageatwork.com/login')

    await login_home.ngagelogin(username,password)
  

    
  });