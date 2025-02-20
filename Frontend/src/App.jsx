import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatbot from "./pages/Chatbot";

function App(){
  return (
    <>
    <h1>Ai chatbot</h1>
    <Chatbot/>
    </>
    // <Router >
    //   <Routes>
    //     <Route path="/" element={<Chatbot />} />
    //   </Routes>
    // </Router>
  )
}

export default App;