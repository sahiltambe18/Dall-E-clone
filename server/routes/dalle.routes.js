import express from 'express';
import * as dotenv from 'dotenv';
import {Configuration ,OpenAIApi} from 'openai';


dotenv.config();
 
const router = express.Router();


const configration = new Configuration({apiKey:process.env.OPENAI_API_KEY});

const openai = new OpenAIApi(configration);

router.get("/",(req,res)=>{
    res.send("hello broski!!")
})

router.post("/",async (req,res)=>{
    try {
        const {prompt} = req.body;
        const aiRes = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
            response_format:'b64_json',
        });
        console.log("good");

        const image = aiRes.data.data[0].b64_json;
        res.status(200).json({photo:image});
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message);
    }
})

export default router;