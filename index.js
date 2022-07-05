const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const httpStatus = require('http-status');
const routes = require("./server/payment-gateway/payment.route")
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path')
app.use('/api', routes);
// app.get('/success', (req,res)=>{
//   res.sendFile('success.html', {root: __dirname })

// })
// app.get('/cancel', (req,res)=>{
//   res.sendFile('cancel.html', {root: __dirname })

// })

// app.set('views', path.join(__dirname, './views'))
// app.set('view engine', 'ejs')
 
// app.get('/home', function(req, res){
//     res.render('Home', {
//        key: Publishable_Key
//     })
// })

app.listen(port, () => {
    console.info(`server started on port ${port}`); 
  });

module.exports = app;