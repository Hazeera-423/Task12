import React, { useState } from 'react';
import './portfolio.css'; 

const App31= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="app">
    
      <header>
        <h1>My Portfolio</h1>
      </header>


      <div className="main-content">
       
        

<<<<<<< HEAD
       
=======
      <aside>
            
            <h3>About Me</h3>
            <p>This is where you can add information about yourself, your career, and your skills.</p>
            <img src='/pic1.jpg' alt='pic' style={{height:200 , width:200}}/>
          </aside>

>>>>>>> a2b4b62dc9015e69df8ad535fb48c77dd890226b
        <main className="main-section">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name:</label>
<<<<<<< HEAD
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input  type="email"  value={email}  onChange={(e) => setEmail(e.target.value)}  required/>
=======
              <input  type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input type="email"value={email} onChange={(e) => setEmail(e.target.value)} required/>
>>>>>>> a2b4b62dc9015e69df8ad535fb48c77dd890226b
            </div>
            <div className="input-group">
              <label>Message:</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required/>
            </div>
            <button type="submit">Submit</button>
          </form>

          {submittedData && (
            <div className="submitted-data">
              <h3>Submitted Data:</h3>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Message:</strong> {submittedData.message}</p>
            </div>
          )}
        </main>
      </div>

   
      <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App31;
