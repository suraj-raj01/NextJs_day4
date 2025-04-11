import mongoose from "mongoose";
const userSchema = new mongoose.Schema(({
    name:String,
    model:String,
    price:Number,
    img:String,
}))

const User = mongoose.models.product || mongoose.model("product", userSchema);
export default User;