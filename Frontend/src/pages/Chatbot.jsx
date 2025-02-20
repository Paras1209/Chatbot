import { useState } from "react";
import axios from 'axios';
const Chatbot = () => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
      if(input.trim() === '' ) return ;

      const userMessage = {sender:'user' , text:input };
      setMessages([...messages, userMessage]);
    setInput('');

    try{
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: input
      });
      const botMessage = { sender: 'bot', text: response.data.reply };
      setMessages(prev => [...prev, botMessage]);
    }catch(error){
      console.error('Error' , error);
    }
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    };
    

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Chatbot
