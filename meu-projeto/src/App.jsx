import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Qesquerdo from './components/quadradoEsquerdo'
import Qdireito from './components/quadradoDireito'


function App() {

  return (
    <div className='root'>
      <div className='esquerdo'>
        <Qesquerdo/>
        
      </div>
      <div className='direito'>
        <Qdireito/>
      </div>
    </div>
    
  );
}

export default App
