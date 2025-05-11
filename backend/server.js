const path = require('path');
const app = require('./app');
const dotenv = require('dotenv');
const fs = require('fs');

// Get absolute path to config.env
const configPath = path.join(__dirname, 'config', 'config.env');

// Check if config file exists
if (fs.existsSync(configPath)) {
    console.log(`Loading config from: ${configPath}`);
    dotenv.config({ path: configPath });
} else {
    console.log('No config.env file found, using environment variables');
}

// Debug: Print loaded environment variables
console.log('Loaded PORT:', process.env.PORT);

const PORT = process.env.PORT || 8080;

// Only start the server if not running in Vercel
if (process.env.NODE_ENV !== 'production') {
    const server = app.listen(PORT, '0.0.0.0', () => {
        console.log(`✅ Server running on port ${PORT} and accessible at http://localhost:${PORT}`);
    });

    // Handle server errors
    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`❌ Port ${PORT} is already in use. Trying another port...`);
            const newPort = parseInt(PORT) + 1;
            app.listen(newPort, '0.0.0.0', () => {
                console.log(`✅ Server running on port ${newPort} and accessible at http://localhost:${newPort}`);
            });
        } else {
            console.error('❌ Server error:', err);
        }
    });
}

module.exports = app;

