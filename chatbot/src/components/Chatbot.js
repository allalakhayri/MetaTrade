import React, { useState } from 'react';
import "./chatbot.css";
import wavy from "./Wavy_Tech-12_Single-04.jpg";
import tech from './2106.i201.007.F.m004.c9.call center technical support isometric.jpg';

const Chatbot = () => {
  const [getMessage, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleInput = () => {
    if (getMessage.trim() !== '') {
      // Add the human message to the conversation
      setConversation([...conversation, { sender: 'human', text: getMessage }]);
      
      // Clear the input and message state
      setMessage('');

      // Simulate a bot response
      setTimeout(() => {
        // Simulate a bot response
        const botResponse = "Ceci est une réponse simulée du bot.";
        setConversation(conversation => [
          ...conversation,
          { sender: 'bot', text: botResponse }
        ]);
      }, 1500);
    }
  }

  return (
    <div>
      <div className='left'>
        <img src={tech} alt='Background Tech'/>
      </div>
      <div className="App">
        <div className="wrapper">
          <div className="content">
            <div className="header">
              <div className="img">
                <img src={wavy} alt="Wavy Tech" />
              </div>
              <div className="right">
                <div className="name">ChatBot</div>
                <div className="status">Connecté</div>
              </div>
            </div>
            <div className="main">
              <div className="main_content">
                <div className="messages">
                  {conversation.map((message, index) => (
                    <div key={index} className={message.sender + "-message"}>
                      {message.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="btm">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Entrez votre message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={getMessage}
                    onKeyDown={(e) => e.key === 'Enter' && handleInput()}
                  />
                </div>
                <div className="btn">
                  <button onClick={handleInput}>
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
