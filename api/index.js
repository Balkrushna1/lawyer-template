// Vercel serverless function entry point
const path = require('path');

// Import the built server bundle
const serverModule = require(path.join(__dirname, '../dist/index.cjs'));

// Handle both default and named exports
const app = serverModule.default || serverModule;

// Export for Vercel
module.exports = app;
