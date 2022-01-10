const mongoose = require("mongoose");
const connection = mongoose
  .connect("mongodb+srv://shiwang:Uploadtool@cluster0.h9htj.mongodb.net/TEST", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
  following: {
    type: Number,
    required: true,
  },
  numberOfRepos: {
    type: Number,
    required: true,
  },
  memberSince: {
    type: Date,
    required: true,
  },
  html_url: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("github", UserSchema);

module.exports = { connection, UserSchema, User };
