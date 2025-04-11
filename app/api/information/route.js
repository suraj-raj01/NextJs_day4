import UserModel from "@/app/models/userModel"
import mongodb from "@/app/utils/db";

export async function POST(req,res){
    const data = await req.json();
    const {name,email,contact,password} = data;
    console.log(data);
    try {
       await mongodb();
       const Data = new UserModel({
           name:name,
           email:email,
           contact:contact,
           password:password
        })
        await Data.save();
        return res.json("success")
    } catch (error) {
        return Response.json(error);
    }
}

export async function GET(req,res){
    try {
       await mongodb();
       const data = await UserModel.find();
       console.log(data);
       return Response.json(data);
    } catch (error) {
        return Response.json(error)
    }
}