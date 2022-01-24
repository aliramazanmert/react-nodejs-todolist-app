const dbuser = "alimert";
const dbpassword = "*********";

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0.ycasi.mongodb.net/todos?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;
