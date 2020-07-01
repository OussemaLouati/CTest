const mongoose = require('mongoose');
//mongodb+srv://test:<password>@cluster0-ztw5x.mongodb.net/test?retryWrites=true&w=majority
//mongodb://localhost:27017/ts
mongoose.connect('mongodb://bankai1:bankai1@ds117348.mlab.com:17348/dbname', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});






module.exports = mongoose;