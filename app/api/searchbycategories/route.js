import ProductModel from "@/app/models/productModel"
import mongodb from "@/app/utils/db"

export async function POST(req,res){
    const data = await req.json();
    const {model} = data;
    try {
       await mongodb();
       const Data = await ProductModel.find({"model": { $regex: model,$options:'i'}})
        return Response.json(Data)
    } catch (error) {
        return Response.json(error);
    }
}