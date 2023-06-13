const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = Schema(
    {
  roomId:{
    type:String,
    required:true
  },
  videoLink:{
    type:String
    // required:true
  },
  maxCount:{
    type:Number
    // required:true
  },
  currentCount:{
    type:Number
    // required:true
  }
}
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;