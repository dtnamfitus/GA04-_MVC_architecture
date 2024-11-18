const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Cấu hình EJS
app.set('view engine', 'ejs');
// Sử dụng thư mục public cho các tệp tĩnh
app.use(express.static('public'));

// Sample products data
const products = [
  { id: 1, name: 'Product 1', image: '/images/product1.jpg', price: 100 },
  { id: 2, name: 'Product 2', image: '/images/product2.jpg', price: 150 },
  { id: 3, name: 'Product 3', image: '/images/product3.jpg', price: 200 },
  { id: 4, name: 'Product 4', image: '/images/product4.jpg', price: 250 },
  { id: 5, name: 'Product 5', image: '/images/product5.jpg', price: 300 },
  { id: 6, name: 'Product 6', image: '/images/product6.jpg', price: 350 },
  { id: 7, name: 'Product 7', image: '/images/product7.jpg', price: 400 },
  { id: 8, name: 'Product 8', image: '/images/product8.jpg', price: 450 }
];
// // Kết nối tới MongoDB
// mongoose.connect('mongodb://localhost:27017/GA04-_MVC_architecture', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });


// // Sử dụng body-parser
// app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.render('index', { products });
});

// Định nghĩa các tuyến đường ở đây
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});



