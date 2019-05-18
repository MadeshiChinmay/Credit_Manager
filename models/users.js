const {MongoClient} = require('mongodb')
const faker=require('faker')
const MONGO_URL =  "mongodb+srv://dbUser:flat591@cluster0-c5u2c.mongodb.net/test?retryWrites=true"


MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw err
  }

  const dbuser = client.db("dbuser")
  const users = dbuser.collection("users")
  const transactions=dbuser.collection("transactions")

  users.insertMany([
    {
      name: "Raghav",
      Account_balance: 100,
      Email_id: "raghav@gmail.com",
      FatherName:"Raghav Dad"
      
    },
    {
        name: "Chinmay",
        Account_balance: 100,
        Email_id: "chinmay@gmail.com",
      FatherName:"Chinmay Dad"
      },
      {
        name: "Rajiv",
        Account_balance: 100,
        Email_id: "rajiv@gmail.com",
      FatherName:"Rajiv Dad"
      },
      {
        name: "Mala",
        Account_balance: 100,
        Email_id: "mala@gmail.com",
      FatherName:"Mala Dad"
      },
      {
        name: "Jeevan",
        Account_balance: 100,
        Email_id: "jeevan@gmail.com",
      FatherName:"Jeevan Dad"
      },
      {
        name: "Ravan",
        Account_balance: 100,
        Email_id: "ravan@gmail.com",
      FatherName:"Ravan Dad"
      },
      {
        name: "Debapthi",
        Account_balance: 100,
        Email_id: "debapathi@gmail.com",
      FatherName:"Debapathi Dad"
      },
      {
        name: "Rohan",
        Account_balance: 100,
        Email_id: "rohann@gmail.com",
      FatherName:"Rohan Dad"
      },
      {
        name: "Bagga",
        Account_balance: 100,
        Email_id: "bagga@gmail.com",
      FatherName:"Bagga Dad"
      },
      {
        name: "Aditi",
        Account_balance: 100,
        Email_id: "aditi@gmail.com",
      FatherName:"Aditi Dad"
      },
  ], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("DATA INSERTED")
  })
})