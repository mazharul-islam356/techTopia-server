const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5001;

// middlewar
app.use(cors())
app.use(express.json());



// mazharulislam3569
// uATm3IUrpIPEko6S


const uri = "mongodb+srv://mazharulislam3569:uATm3IUrpIPEko6S@cluster0.llpjorv.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productCollection = client.db('productDB').collection('product')


    app.post('/products',async(req,res)=>{
      console.log('post api hitting');
      const products = req.body
      console.log(products);
      const result = await productCollection.insertOne(products)
      console.log(result);
      res.send(result);

    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.get('/',(req,res)=>{
    res.send('User port is running')
})



app.listen(port,()=>{
    console.log(`This is port: ${port}`);
})