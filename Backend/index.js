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
        const response = await axios.post('http://127.0.0.1:11434/v1/chat',{
            model:'deepseek-r1:1.5b',
            messages:[{'role':'user','content':userMessage}]
        });

        const botReply = response.data.response
        res.json({reply:botReply});

    }catch(error){
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request data:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        res.status(500).json({ reply: 'Error in processing your request.' });
    }
})

app.listen(PORT, ()=>{
    console.log(`backend is running succesfully at http://localhost:${PORT} `)
})
