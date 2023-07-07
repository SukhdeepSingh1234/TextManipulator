import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';

function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  } 

  return (<>
    <Navbar title="Text Manipulator" about="About Us" mode={mode} toggleMode={toggleMode} />
    <Content mode={mode} title="Enter Text Here To Be Analyzed" />
  </>
  );
}

export default App;
