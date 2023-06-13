const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
const Room = require('./roomSchema')


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const PORT = 3000;
const MONGO_URI = "mongodb+srv://siddharthgoel2105:sidgoel2105@cluster0.4bgdaxc.mongodb.net/?retryWrites=true&w=majority";

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
app.post('/updateRoomCount/1',async (req,res)=>{
    const { id } = req.params;
    console.log(req.body);
   await Room.findByIdAndDelete(id);
    const room = new Room({roomId:'1',currCount:req.body.count});
    await room.save();
    // req.flash('success', 'Successfully updated campground!');
    res.redirect('/');
    
})
