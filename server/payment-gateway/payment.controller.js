// DB connection
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

var Publishable_Key = process.env.PUBLISHED_KEY

console.log("env",stripeSecretKey)

const stripe = require('stripe')(stripeSecretKey);

const uuid = require('uuid').v4

function index(req, res) {
    console.log("nnnnn")
    const posts = "Post list";
    res.send(posts)
}


const checkout = async (req, res) => {
    console.log("ssss")

    console.log("transaction",req.body)

    res.send('transaction completed');
   // const { product } = req.body;
    // const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items: [
    //         {
    //             price_data: {
    //                 currency: "inr",
    //                 product_data: {
    //                     name: 'iPhone'
    //                 },
    //                 unit_amount: 2000 * 100,
    //             },
    //             quantity: 2,
    //         },
    //     ],
    //     mode: "payment",
    //     success_url: 'http://localhost:3000/success',
    //     cancel_url: `http://localhost:3000/cancel`,
    // });

    // res.json({ id: session.id });
    ///////////////////////////

    // Moreover you can take more details from user
    // like Address, Name, etc from form
  //   stripe.customers.create({
  //     email: 'ajeet.kumar36@wipro.com',
  //     source: req.body.stripeToken,
  //     name: 'rahul',
  //     address: {
  //         line1: 'TC 9/4 Old MES colony',
  //         postal_code: '452331',
  //         city: 'banglore',
  //         state: 'karnataka',
  //         country: 'India',
  //     }
  // })
  // .then((customer) => {

  //     return stripe.charges.create({
  //         amount: 2500,     // Charing Rs 25
  //         description: 'Web Development Product',
  //         currency: 'INR',
  //         customer: customer.id
  //     });
  // })
  // .then((charge) => {
  //     res.send("Success")  // If no error occurs
  // })
  // .catch((err) => {
  //     res.send(err)       // If some error occurs
  // });


  };
  

module.exports = {
    index: index,
    checkout: checkout
}