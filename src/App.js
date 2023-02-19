import { useState } from 'react';

import './App.css';
import Lista from './components/Lista';


const App = () => {

const [namirnice, setNamirnice] = useState(['banane', 'gauda','lesnik']);
const [namirnica, setNamirnica] = useState('');

  const dodajNamirnicu = () => {
    setNamirnice(previous => {
      return [...previous, namirnica]
    })
  };


  // if (namirnica !== '') {
  //   setNamirnice(previous => {
  //     return [...previous, namirnica]
  //   })
  // setNamirnica('');
  // setNamirnica(focus);
  // };  

  return (  
  
  <div className="App">

<div class="container text-center">
  <div class="row">
    
    <div class="col"></div>
    <div class="col"></div>
    <div class="col tekst">
      
    <input type='text' name='namirnica' value={namirnica} onChange={(event) => {setNamirnica(event.target.value)}}/>
    <br/>
    <br/>
      <button onClick={dodajNamirnicu}>Dodaj</button>
      <br/>
      <br/>
      
      <Lista namirnice={namirnice} setNamirnice={setNamirnice}/>
  </div>
</div> 
</div> 
</div>  )

};
  


export default App;
