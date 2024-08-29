import mongoose from "mongoose"

interface Connection {
    isConnected?: number
}

let connection: Connection = {} 

export async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("MONGODB is connected already");
        return
    }

    try {
        let db = await mongoose.connect(process.env.MONGODB_URL!,{
            dbName: "AI-GEN"
        })
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log("MONGODB IS FAILED TO CONNECT",error);
        process.exit()
    }
}