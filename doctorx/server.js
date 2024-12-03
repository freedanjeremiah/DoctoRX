const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://allencdvja:fe6EHGghyrbtn7hq@cluster0.othvgus.mongodb.net/mydatabase')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define schema and model
const appointmentSchema = new mongoose.Schema({
  doctorName: String,
  name: String,
  age: Number,
  sex: String,
  date: Date,
}, { collection: 'mycollection' });

const Appointment = mongoose.model('Appointment', appointmentSchema);

// API endpoint to save appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Add this new endpoint after your POST endpoint
app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find({}).sort({ date: 1 }); // Sort by date ascending
    res.status(200).send(appointments);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Dynamic port selection
const PORT = process.env.PORT || 5001; // Changed to 5001

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
    server.listen(PORT + 1);
  } else {
    console.error('Server error:', err);
  }
});