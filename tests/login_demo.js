/**
 * Created by Tibi on 02/19/17.
 */

module.exports = { // adapted from: https://git.io/vodU0
    'E-banking Demo: Login screen': function(browser) {
        browser
            .url('https://ebanking-demo-ch1.ubs.com/auth/login1?contractId=11508036&languageCode=en')
            .waitForElementVisible('body')
            .verify.title('Access Card login - e-banking demo')
            .saveScreenshot('./results/screenshots/login_screen.png')
            .click('#AuthGetContractNrDialog_submit')
    },

    'E-banking Demo: Step-up Screen': function(browser) {
        browser
            .waitForElementVisible('body')
            .verify.title('Login - e-banking demo')
            .saveScreenshot('./results/screenshots/stepup_screen.png')
            .click('#AuthSignDialog_submit')
    },

    'E-banking Demo: Home screen': function(browser) {
        browser
            .waitForElementVisible('body')
            .verify.title('E-Banking')
            .verify.elementPresent('#bzeMainTopBarLeft > a > img')
            .saveScreenshot('./results/screenshots/home_screen.png')

    },

    'E-banking Demo: Top navigation': function (browser) {
        browser
            .verify.elementPresent('#bzeTopNaviAssetsSector > a')
            .end();
    }
};