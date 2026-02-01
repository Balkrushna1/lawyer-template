// Vercel serverless function for contact API
const path = require('path');

let app;

async function getApp() {
  if (!app) {
    // Import the built server bundle
    const serverModule = require(path.join(__dirname, '../dist/index.cjs'));
    // Handle both default and named exports
    app = serverModule.default || serverModule;
  }
  return app;
}

// Export handler for Vercel
module.exports = async (req, res) => {
  const expressApp = await getApp();
  return expressApp(req, res);
};
