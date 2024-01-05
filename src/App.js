import './App.css';
import React from 'react';
import TelegramLoginButton from 'telegram-login-button'

function App() {
  // const handleTelegramResponse = response => {
  //   console.log(response);
  // };

  return (
    <div className="App">
      <header className="App-header">
      <h1>TG in</h1>
        <TelegramLoginButton
          botName="immersetech1_bot"
          dataOnauth={(user) => console.log(user)}
        />
      </header>
    </div>
  );
}

export default App;
