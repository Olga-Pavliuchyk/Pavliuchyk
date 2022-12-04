const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  viewportHeight: 1440,
  viewportWidth: 2560,
  chromeWebSecurity: false,
    e2e: {
      experimentalSessionAndOrigin: true,
      chromeWebSecurity: false,
      setupNodeEvents(on, config) {        
        addMatchImageSnapshotPlugin(on, config);
      // implement node event listeners here
    },
    excludeSpecPattern : ['**cypress/e2e/2-advanced-examples', '**cypress/e2e/1-getting-started', '**cypress/e2e/tasks' ],
    baseUrl : 'https://magento.softwaretestingboard.com/',
    // defaultCommandTimeout: 4000,
    // retries: {openMode: 1},
    // redirectionLimit: 20,
    // watchForFileChanges: true,
    // pageLoadTimeout: 60000, 
    // responseTimeout: 20000,
    // screenshotOnRunFailure: false,
    // slowTestThreshold: 10000,
    

  },
});
