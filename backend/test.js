const path = require('path');
try {
  const app = require(path.join(__dirname, 'app'));
  console.log('Successfully loaded app.js');
  console.log('App structure:', Object.keys(app));
} catch (error) {
  console.error('Error loading app.js:', error.message);
}