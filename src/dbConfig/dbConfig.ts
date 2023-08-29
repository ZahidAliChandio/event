import mongoose from "mongoose";

export async function connectToDB() {
    try {
        
        await mongoose.connect(process.env.ATLAS_URL!);
        const connection = mongoose.connection;
        
        connection.once("open", () => {
          console.log("DB Connection Successfull");
        });

    } catch (error) {
        console.log("Could not connect to DB", error);
    }
}