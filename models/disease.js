const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const diseaseSchema= new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    symptoms: {
        type: Array,
    }, 
    causes: Array,
    treatment: Array,
    precautions: Array,
    source: String,
    image: String,
    category: String,
});

const Disease= mongoose.model("Disease", diseaseSchema);
module.exports = Disease;