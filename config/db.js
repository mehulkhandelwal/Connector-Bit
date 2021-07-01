const mongoose = require('mongoose');
// Connection to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://root:root@cluster0.lxak4.mongodb.net/devcon?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
