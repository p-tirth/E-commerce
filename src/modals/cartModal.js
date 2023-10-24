import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    items:{
        type:Array
    },
})

const Food = mongoose.models.foods || mongoose.model
("carts ",cartSchema)

export default Food