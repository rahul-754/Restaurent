const mongo = require('mongoose');
const mongourl = 'mongodb://localhost:27017/hotel';

mongo.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongo.connection;
db.on('connected', () => {
    console.log("Connected to the database");
});
module.export=db