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
      success_url: `https://build-k0mphq7ul-akashsaha747.vercel.app/paymentsuccess`,
      cancel_url: `https://build-k0mphq7ul-akashsaha747.vercel.app/paymentfail`,
    });
  
    res.json({ id: session.id });
}
module.exports={
    paymentController
}