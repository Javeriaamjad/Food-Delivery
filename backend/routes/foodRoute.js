import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

//create a router using this we can get the get post etc methods
const foodRouter = express.Router();

//image sotrage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename:function (req, file, cb){
     
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
const upload = multer({storage:storage})

//post method to send the date on the server
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)


export default foodRouter

