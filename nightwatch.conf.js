/**
 * Created by Tibi on 02/19/17.
 */

module.exports = {
    "src_folders": ["./tests"], // Where you are storing your Nightwatch e2e tests
    "output_folder": "./results", // results (test outcome) output by nightwatch

    "selenium": { // downloaded by selenium-download module (see readme)
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": "./bin/selenium-server-standalone-3.0.1.jar",
        "log_path": "./results",
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
            "webdriver.chrome.driver" : "./bin/chromedriver.exe"
        }
    },

    "test_settings": {
        "default": {
            "screenshots": {
                "enabled": true, // if you want to keep screenshots
                "path": './results/screenshots' // save screenshots here
            },
            "globals": {
                "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome"
            }
        },

        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // turn off to test progressive enhancement
            }
        }
    }
}
