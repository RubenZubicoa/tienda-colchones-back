/**
 * Generate users data
 */
const User = require("../models/User");

const createUserData = async () => {
  const data = await User.countDocuments();
  if (data > 0) return;
  console.log("Creating user data");

  await User.create({
    email: "rubenzubicoatic@gmail.com",
    password: "ruben",
    admin: true,
  });
  await User.create({
    email: "ruben@gmail.com",
    password: "1234",
    admin: false,
  });
};

module.exports = createUserData;
