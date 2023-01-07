const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress\\e2e\\features\\*.feature",
    stepDefinitions: [
    "cypress/e2e/step_definitions/*.{js,ts}",
    "cypress\\e2e\\step_definitions\\*.{js,ts}"
  ],
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
  video: false,
  viewportWidth: 1300,
  viewportHeight: 950,
  scrollBehavior: "center",
});
