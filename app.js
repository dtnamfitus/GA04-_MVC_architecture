const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/GA04-_MVC_architecture', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Cấu hình EJS
app.set('view engine', 'ejs');

// Sử dụng body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Sử dụng thư mục public cho các tệp tĩnh
app.use(express.static('public'));

// Định nghĩa các tuyến đường ở đây

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.get('/', (req, res) => {
  res.render('index');
});

