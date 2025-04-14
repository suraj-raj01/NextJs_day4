import UserModel from "@/app/models/userModel"
import mongodb from "@/app/utils/db";

export async function POST(req,res){
    const data = await req.json();
    const {email,password} = data;
    try {
       await mongodb();
       const isUser = await UserModel.findOne({email:email})
       if(isUser){
        if(isUser.password==password){
            return Response.json({msg:"Login Successfully completed"})
        }
       }
       else{
        return res.json("user not found")
       }
    } catch (error) {
        return Response.json(error);
    }
}