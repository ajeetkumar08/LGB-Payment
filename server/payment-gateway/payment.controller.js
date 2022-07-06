// DB connection
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

const stripe = require('stripe')(stripeSecretKey);

const uuid = require('uuid').v4

function index(req, res) {
    console.log("nnnnn")
    const posts = "Post list";
    res.send(posts)
}


const checkoutSession = async (req, res) => {
    console.log("ssss")
   // const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: 'iPhone'
                    },
                    unit_amount: 2000 * 100,
                },
                quantity: 2,
            },
        ],
        mode: "payment",
        success_url: 'http://localhost:3000/success',
        cancel_url: `http://localhost:3000/cancel`,
    });
    //res.redirect(session.url)
    res.json({ id: session });
  };
  

module.exports = {
    index: index,
    checkoutSession: checkoutSession
}