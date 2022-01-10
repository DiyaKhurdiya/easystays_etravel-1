const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Hotel name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Hotel description"],
  },
  location: {
    type: String,
    required: [true, "Hotel location"],
  },
  price: {
    type: Number,
    required: [true, 500],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: [true, "This is a sample Id"],
      },
      url: {
        type: String,
        required: [true, "Sample url"],
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Hotel category"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", roomSchema);
