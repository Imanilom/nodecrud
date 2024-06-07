const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = 3000; // Ubah port sesuai kebutuhan

// Koneksi ke MongoDB (ganti <your_connection_string> dengan string koneksi Anda)
mongoose.connect('mongodb://healthdevice:Q3afzxiAb!@database2.pptik.id:27017/healthdevice', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.json());
app.use('/items', itemRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
