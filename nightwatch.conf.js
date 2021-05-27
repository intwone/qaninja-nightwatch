require('babel-core/register')
require('geckodriver')
const chromedriver = require('chromedriver')

const urlDefault = 'http://zombie-web:5000'
const urlStage = 'http://stage.zombieplus.com.br'
const timeoutDefault = 15000

module.exports = {
  src_folders: ['src/tests'],

  page_objects_path: 'src/pages',

  globals_path: 'hooks/globals.js',

  webdriver: {
    start_process: true
  },

  // test_workers: {
  //   enabled: true,
  //   workers: 8
  // },

  test_settings: {
    default: {
      launch_url: urlDefault,
      globals: {
        waitForConditionTimeout: timeoutDefault
      },

      webdriver: {
        server_path: chromedriver.path,
        port: 9515
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },
    },

    headless: {
      launch_url: urlDefault,
      globals: {
        waitForConditionTimeout: timeoutDefault
      },

      webdriver: {
        server_path: chromedriver.path,
        port: 9515
      },

      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
          args: ['headless', '--no-sandbox']
        }
      },
    },

    firefox: {
      launch_url: urlDefault,
      globals: {
        waitForConditionTimeout: timeoutDefault
      },

      webdriver: {
        server_path: '.\\node_modules\\.bin\\geckodriver.cmd',
        port: 4444
      },

      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true
      },
    },

    stage: {
      launch_url: urlStage
    }
  }
};
