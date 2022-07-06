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

console.log("dirrrr",__dirname)
app.use('/api', routes);
app.get('/success', (req,res)=>{
  res.sendFile('success.html', {root: __dirname })

})
app.get('/cancel', (req,res)=>{
  res.sendFile('cancel.html', {root: __dirname })

})


app.listen(port, () => {
    console.info(`server started on port ${port}`); 
  });

module.exports = app;