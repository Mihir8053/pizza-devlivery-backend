const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const deliveryRoutes = require('./routes/deliveryRoutes');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-delivery-platform';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/deliveries', deliveryRoutes);

app.listen(PORT, () => {
    console.log(`Delivery Service is running on port ${PORT}`);
});
