import mongoose from 'mongoose';
const connectToDb = () => {
  mongoose.connect("mongodb+srv://root:1234@todo-list.1ps4mpe.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
       )
    .then(() => {
      console.log("CONECTADO AO BANCO");
    })
    .catch((err) => console.log(err));
};

export default connectToDb;
