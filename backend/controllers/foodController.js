import foodModel from "../models/foodModel.js";
import fs from "fs"


//add food item

const addFood = async (req,res)=>{
    //store the product dat in the database
    let image_filename = `${req.file.filename}`;
    const food =  new foodModel({
        name:req.body.name,
        description: req.body.description, 
        price : req.body.price,
        category : req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({success:true , message:"food added"})
    }
    catch(error){
        console.log("error")
        res.json({success:false , message: "ERROR"})
    }
}
//all food list
const listFood = async(req,res) =>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true , data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}

const removeFood = async(req,res)=>{
    try{
        const deleteFood = await foodModel.findById(req.body.id);
        const imagePath = `uploads/${deleteFood.image}`;

    // Check if the image exists
    if (fs.existsSync(imagePath)) {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.log('Error deleting image:', err);
        }
      });
    }
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})

    }catch(error){
        console.log(error)
        res.json({success:false , message:"error"})
    }
}
export {addFood,listFood,removeFood}