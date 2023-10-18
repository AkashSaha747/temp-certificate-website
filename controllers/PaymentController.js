const stripe = require("stripe")(
    process.env.TEST_SK
  );
let paymentController=async(req,res)=>{
    const { products } = req.body;
    console.log(products);
  
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
        },
        unit_amount: product.price * 100,
      },
      quantity: 1,
    }));
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3000/paymentsuccess`,
      cancel_url: `http://localhost:3000/paymentfail`,
    });
  
    res.json({ id: session.id });
}
module.exports={
    paymentController
}