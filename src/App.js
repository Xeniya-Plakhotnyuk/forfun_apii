import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';


function App() {

  const[myAdvice, setMyAdvice] = useState('');
  const[type, setType] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  

  
  const fetchData = async () =>{
  const response = await fetch (`http://www.boredapi.com/api/activity`);
  const data = await response.json();
  setMyAdvice(data.activity);
  setType(data.type);
  }

  useEffect(() => {
    if (isLoaded) {
      fetchData();
    }
  }, [isLoaded]);

  const getAdvice = () => {
    setIsLoaded(true);
      };


   
  return (
  
 
  <div className='App'>

<h2>Are you bored? Need an idea?</h2> 

      {isLoaded ? (
       
        <div className='advice_container'>
          <p className='advice'>
          {myAdvice}
        </p>
        <p className='btw'>
         * BTW, this is <span className='bold'>{type} </span>type of activity!
        </p>
        </div>
      ) : (
        <button onClick={getAdvice}>Get Advice!</button>
      )}
     
      {isLoaded && (
        <button onClick={fetchData}>New Advice</button>
      )}
      
           
     
    </div>
  );
}

export default App;
