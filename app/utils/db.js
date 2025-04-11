// const DB_URL="mongodb+srv://surajkumarbgu555:QUM4VZlyLm21wVug@cluster0.cuqhspv.mongodb.net/NextjsDay4?retryWrites=true&w=majority&appName=Cluster0";
// import mongoose from "mongoose";
// export default function mydb(){
//     try {
//         mongoose.connect(DB_URL).then(()=>{
//             console.log("Db Connected successfully!!");
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

import mongoose from "mongoose"
const mydb = "mongodb+srv://surajkumarbgu555:QUM4VZlyLm21wVug@cluster0.cuqhspv.mongodb.net/NextjsDay4?retryWrites=true&w=majority&appName=Cluster0"
export default function myDb(){
    try {
        mongoose.connect(mydb).then(()=>{
            console.log("db connected!!")
        })
    } catch (error) {
        console.log(error);
    }
};