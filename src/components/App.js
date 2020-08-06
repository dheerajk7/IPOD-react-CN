import React from 'react';
import '../assets/css/app.css';
import Ipod from './Ipod';

//this compoonent is just the outer container component of IPOD so set the main background
// this component renders the main IPOD to the display
function App() {
  return (
    <div className="app">
      <Ipod />
    </div>
  );
}
export default App;
