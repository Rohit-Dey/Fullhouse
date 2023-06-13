const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
const Room = require('./roomSchema')


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/full-house";

app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'))

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Database Connected!!!");
});

// const questions = require("./questions");
// app.use("/", questions);

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.post('/getRoomCount',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})
app.put('/updateRoomCount/:id',async (req,res)=>{
    const { id } = req.params;
    console.log(req.body);
    // console.log(req.body);
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.count });
   
    await Room.save();
    
    // req.flash('success', 'Successfully updated campground!');
    res.redirect('/');
    
})
