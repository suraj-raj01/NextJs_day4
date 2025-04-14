import ProductModel from "@/app/models/productModel"
import mongodb from "@/app/utils/db"

export async function POST(req,res){
    const data = await req.json();
    const {name,model,price,img,category} = data;
    try {
       await mongodb();
       const Data = new ProductModel({
           name:name,
           model:model,
           price:price,
           img:img,
           category:category,
        })
        await Data.save();
        return Response.json(Data)
    } catch (error) {
        return Response.json(error);
    }
}
   

export async function GET(req,res){
    try {
       await mongodb();
       const data = await ProductModel.find();
       console.log(data);
       return Response.json(data);
    } catch (error) {
        return Response.json(error)
    }
}