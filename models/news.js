const mongoose= require("mongoose");
const { type } = require("os");
const Schema= mongoose.Schema;

const newsSchema= new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    publisDate: Date,
    image: String,
    tags: String,
    source: String,
});

const News= mongoose.model("News", newsSchema);
module.exports = News;