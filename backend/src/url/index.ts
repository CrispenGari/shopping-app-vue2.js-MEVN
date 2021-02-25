import pwd from "../keys";
const dbName: string = "Products";
const dbUrl: string = `mongodb+srv://crispen:${pwd}@cluster0.p9olk.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export default dbUrl;
