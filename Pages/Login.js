const { test, expect } = require('@playwright/test');
exports.Login = class Login{

    constructor (page){

            this.page=page
            this.login_btn=page.getByRole('button', { name: 'Submit' })
            this.username=page.getByPlaceholder('Enter your email or username here')
            this.password=page.getByPlaceholder('Password')
    }


        async ngagelogin(username,password){
            await this.username.fill(username)
            await this.password.fill(password)
            await this.login_btn.click()
        }
}