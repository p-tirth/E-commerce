import mongoose from "mongoose";

export default async function connect(){

    try{
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("MongoDB connected")
        })
        connection.on('error',(err)=>{
            console.log("MongoDB NOT connected" + err)
            process.exit()
        })
    }catch(error){
        console.log("somthing went wrong !!")
        console.log(error)
    }
}