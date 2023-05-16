//MONGODB DATABASE SETUP
const mongoose = require('mongoose');
const MONGODB_URI = 'YOUR_MONGODB_STRING';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(() => console.log(`<<MONGODB CONNECTED>>`))
.catch(err => console.log(err));
