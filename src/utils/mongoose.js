import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function dbConnect() {
  if (conn.isConnected) {
    return;
  }

  const MONGODB_URI = process.env.user ?  `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.tx7hg.mongodb.net/${process.env.db}` : "mongodb://localhost:27017/nextjs";
  const db = await connect(MONGODB_URI);
  // console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => console.log("Mongodb connected to db"));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));
