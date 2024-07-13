const mongoose= require("mongoose");
const initData= require("./data.js");
const Disease= require("../models/disease.js");

main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/herHealth');
}

const initDB = async () => {
     await Disease.deleteMany({});
     await Disease.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
