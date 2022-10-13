const { defineConfig } = require("cypress");


module.exports = defineConfig({
  chromeWebSecurity: false,
    e2e: {
      experimentalSessionAndOrigin: true,
      chromeWebSecurity: false,
      setupNodeEvents(on, config) {
        const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');
        addMatchImageSnapshotPlugin(on, config);
      // implement node event listeners here
    },
  },
});
