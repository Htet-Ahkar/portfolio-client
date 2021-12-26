import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.NEXT_PUBLIC_DB_TWO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;