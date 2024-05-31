const { defineConfig } = require("cypress");
const browserstackTestObservabilityPlugin = require('browserstack-cypress-cli/bin/testObservability/plugin');

module.exports = defineConfig({
  experimentalWebKitSupport: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      browserstackTestObservabilityPlugin(on, config);
      return config;
    },
  },
});
