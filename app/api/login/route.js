// import UserModel from "@/app/models/userModel"
// import mongodb from "@/app/utils/db";

// export async function POST(req,res){
//     const data = await req.json();
//     const {email,password} = data;
//     try {
//        await mongodb();
//        const isUser = await UserModel.findOne({email:email})
//        if(isUser){
//         if(isUser.password==password){
//             return Response.json({msg:"Login Successfully completed"})
//         }
//        }
//        else{
//         return res.json("user not found")
//        }
//     } catch (error) {
//         return Response.json(error);
//     }
// }

import UserModel from "@/app/models/userModel";
import mongodb from "@/app/utils/db";

export async function POST(req) {
    try {
        const data = await req.json();
        const { email, password } = data;
        await mongodb();
        const isUser = await UserModel.findOne({ email });
        if (!isUser) {
            return Response.json({ msg: "User not found" }, { status: 404 });
        }
        if (isUser.password !== password) {
            return Response.json({ msg: "Incorrect password" }, { status: 401 });
        }
        return Response.json(
            { msg: "Login successfully completed" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Login error:", error);
        return Response.json(
            { msg: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}
