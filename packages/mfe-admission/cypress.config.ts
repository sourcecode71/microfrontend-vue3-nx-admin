import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/integration/e2e/**/*.feature",
    baseUrl: "http://localhost:8080/",
  },
  env: {
    apiBaseUrl:"",
    interceptStubbing: true,
  },
  chromeWebSecurity: false,
});