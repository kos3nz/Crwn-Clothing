const express = require('express');
// const cors = require('cors');
const path = require('path'); // node.js built-in module
const compression = require('compression');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// Compression for gzipping on heroku
app.use(compression());
// Parsing json bodies
app.use(express.json({ limit: '10kb' }));
// Parsing url encoded bodies
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Implementing cors (= Cross-origin Resource Sharing)
// Enables to make requests from different web server/origin (ex.localhost:3000 to localhost:8080)
// app.user(cors());

// Serving static files
if (process.env.NODE_ENV === 'production') {
  // to make sure the code doesn't require you to use https in development.
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  app.use(express.static(path.join(__dirname, 'client/build')));

  // for every url that users get
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Starting server
app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js')); // なぜここで一つレベルがあがるのかわからない
  // res.sendFile(path.resolve(__dirname, 'client/build', 'service-worker.js')); でも動いた
});

// Payment route
app.post('/payment', async (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const items = req.body.cartItems.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items,
    mode: 'payment',
    success_url: `${baseUrl}/success`,
    cancel_url: `${baseUrl}/checkout`,
  });

  res.json({ id: session.id });

  // const body = {
  //   source: req.body.token.id,
  //   amount: req.body.amount,
  //   currency: 'usd',
  // };
  // stripe.charges.create(body, (stripeErr, stripeRes) => {
  //   if (stripeErr) {
  //     res.status(500).json({ error: stripeErr }); // error sent in test/html form
  //   } else {
  //     res.status(200).json({ success: stripeRes });
  //   }
  // });
});

/* ==============================
NOTE:= About cors()
Will
2 months ago

You don't need it in production or development.

In development you proxy the request to your API server using CRA's proxy.

In production you're serving all content from the same origin.

No need for cors at all.

I really don't think it's a good idea using cors here with no configuration.

The npm package cors, sets access control headers, but passing no configuration to it, we are configuring our application to respond to any requests, from any application, anywhere. Which is a really bad idea, but also it's completely unnecessary.

I'm not knocking the cors package, its' great I've used it in some of my own projects.

There are some APIs you write where you do want to respond to requests from anywhere, but in a API dealing with payments?

And again, you don't need it.

The instructor says he has included it because in development our application is running on port 3000 and our API server is running on port 5000.
So yes from the browser on port 3000 you can't access port 5000 because that breaks the browser SOP (Same Origin Policy).
But Create React App provide a development proxy for just this situation.

The dev server is running in Node, so has no such SOP and can proxy all requests from 3000 to 5000.

So you don't need it in development.

Additionally in production, the server is serving static content (the built react app) so it's all served from the same origin, port 5000 or whatever Heroku assign.

So you don't need it in production/deployment either.
============================== */
