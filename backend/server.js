const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables from config.env
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});


app.listen(PORT, () => {
    console.log('Server is running on the Port 5000')
})


