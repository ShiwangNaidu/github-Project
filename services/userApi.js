const { connection, UserSchema, User } = require("../model/db");

async function saveUserTodb(userObj) {
  const saveUser = new User({
    userName: "Shiwang",
    image: "imageLink",
    followers: 1,
    following: 1,
    numberOfRepos: 1,
    memberSince: "2021-11-22T07:12:57Z",
    html_url: "url",
  });
  const data = await saveUser.save();
  //console.log(data)
  return data;
}

async function getUserFromdb(userName) {
  const data = await User.findOne({ userName: userName });
  return data;
}

async function insertUserIntodb(userObj) {
  const data = await User.insertMany(userObj);
  //console.log(data)
  return data;
}
module.exports = { saveUserTodb, getUserFromdb, insertUserIntodb };
