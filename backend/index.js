const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); 
const LoginRoutes = require('./routes/authRoutes'); 


const app = express();
const PORT = process.env.PORT || 3000; 
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/flyease';

app.use(cors()); 
app.use(express.json()); 

const flightSchema = new mongoose.Schema({
    flight_number: String,
    departure_city: String,
    destination_city: String,
    departure_time: Date,
    arrival_time: Date,
    price: Number,
    airline_name: String,
});

const Flight = mongoose.model('Flight', flightSchema);

app.use('/api', authRoutes); 
app.use('/api', LoginRoutes); 

app.get('/api/search', async (req, res) => {
    const { departure, destination } = req.query;

    try {
        
        const flights = await Flight.find({
            departure_city: departure,
            destination_city: destination,
        });

        if (flights.length > 0) {
            res.json(flights); 
        } else {
            res.status(404).json({ message: 'No flights found for the given criteria.' });
        }
    } catch (err) {
        res.status(500).send('Error searching flights: ' + err.message);
    }
});

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1); s
    });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
