const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = 5000
const app = express()

app.use(cors());
app.use(express.json());

app.post('/api/chat' , async (req,res) => {
    const userMessage = req.body.message;

    try{
        const response = await axios.post('http://localhost:11434/v1/chat',{
            model:'deepseek-r1:1.5b',
            messages:[{'role':'user','content':userMessage}]
        });

        const botReply = response.data.response
        res.json({reply:botReply});

    }catch(error){
        console.error('Error:', error);
        res.status(500).json({ reply: 'Error in processing your request.' });
    }
})


app.listen(PORT, ()=>{
    console.log(`backend is running succesfully at http://localhost:${PORT} `)
})
