import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    items:{
        type:Array
    },
})

const Cart = mongoose.models.carts || mongoose.model
("carts ",cartSchema)

export default Cart