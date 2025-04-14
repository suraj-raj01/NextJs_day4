import ProductModel from "@/app/models/productModel"
import mongodb from "@/app/utils/db"

export async function POST(req,res){
    const data = await req.json();
    const {search} = data;
    console.log(search)
    try {
       await mongodb();
       const Data = await ProductModel.find({"name": { $regex: search,$options:'i'}})
        return Response.json(Data)
    } catch (error) {
        return Response.json(error);
    }
}