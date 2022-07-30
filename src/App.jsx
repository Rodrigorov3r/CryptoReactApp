import { useState } from 'react';
import '../src/App.css';
import Crypto from './components/Crypto';

function App() {
  return (
    <div className="fondo">
      <div className="container-xl">
        {/* <h1>Crypto Gorch Market &#128017;</h1> */}
        <h1>Crypto React</h1>
        <Crypto />
      </div>
    </div>
  );
}

export default App;
