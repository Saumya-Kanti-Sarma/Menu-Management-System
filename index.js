import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import restaurantRoutes from './routes/restaurant.route.js';
import menuRoutes from './routes/menu.route.js';
import customerRoutes from './routes/customers.route.js';
import ratingsRoutes from './routes/ratings.route.js';


dotenv.config() // configuring the environment variables
const app = express() // settin app
const PORT = process.env.PORT || 5000 // declearing port
const CORS = cors()
app.use(CORS)

// set-up of mongodb connection
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL)
  .then(() => console.log(`DataBase Connected..`))
  .catch((err) => console.log(`Error in connection of dataBase: ${err}`))


app.use(express.json()) // so we can sent JSON file into databse
app.use('/restaurant', restaurantRoutes);// restaurant route
app.use('/restaurant/menu', menuRoutes);// restaurant route

app.use('/customer', customerRoutes);// customer route
app.use('/customer/ratings', ratingsRoutes);// customer route

//app set-up
app.listen(PORT, () => { console.log(`server running at http://localhost:${PORT}`) })
app.get("/", (req, res) => { res.send("hello world") })


