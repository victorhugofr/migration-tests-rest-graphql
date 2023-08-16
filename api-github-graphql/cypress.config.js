const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern:'cypress/integration',
    baseUrl:'https://api.github.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
