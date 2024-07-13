const mongoose= require("mongoose");
const initData= require("./newsdata.js");
const News= require("../models/news.js");

main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/herHealth');
}

const initDB = async () => {
     await News.deleteMany({});
     await News.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
