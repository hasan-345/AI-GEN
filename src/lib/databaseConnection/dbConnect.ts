import mongoose from "mongoose"

type Connection = {
    isConnected?: number
}

let connection: Connection = {} 

export async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("MONGODB is connected already");
        return
    }

    try {
        let db = await mongoose.connect(process.env.MONGODB_URL!)
        connection.isConnected = db.connections[0].readyState

        console.log("Mongodb is connected successfully");
        
    } catch (error) {
        console.log("MONGODB IS FAILED TO CONNECT",error);
        process.exit(1)
    }
}