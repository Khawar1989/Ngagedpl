const { test, expect } = require('@playwright/test');
exports.Feedback = class Feedback{

        constructor(page){
            this.page = page
            this.feedbacktext = page.getByText('Newsfeed Today Contact Ask for FeedbackGive FeedbackAmir Sohail is celebrating h')
            this.feedback_btn = page.getByRole('button', { name: 'Feedback' })
            this.dashboard = page.getByRole('link', { name: 'Dashboard' })
            this.givefeedback_btn=page.getByRole('button', { name: 'Give Feedback' })
            this.search_field=page.getByRole('searchbox')
            this.search_option=page.getByRole('option', { name: 'Muhammad Rehan' })
            this.attribute=page.getByLabel('', { exact: true }).nth(2)
            this.attribute_option=page.getByLabel('Attitude').getByText('Honest & Ethical')
            this.feedback_label=page.locator('label').filter({ hasText: 'EXCELLENT' }).locator('i')
            this.comment=page.getByPlaceholder('Let them know why you are giving them this rating.')
            this.submit_feeback_btn=page.getByRole('button', { name: 'Submit' })


        }

        async givefeedback(){

            await this.feedback_btn.click()
            await this.dashboard.click()
            await this.givefeedback_btn.click()
            await this.search_field.fill('Muhammad Rehan')
            await this.search_option.click()
            await this.attribute.click()
            await this.attribute_option.click()
            await this.feedback_label.click()
            await this.comment.fill('Appreciate your efforts')
            await this.submit_feeback_btn.click()


        }


}