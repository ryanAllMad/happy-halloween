import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import './App.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

function App() {
  const addGraveyard = (event: any) => {
    // @ts-ignore
      const graveyard: HTMLDivElement = document.querySelector('.graveyard')
      let grave = document.createElement('div')
      grave.className = 'rip'
      grave.style.left = (event.pageX - 4) + 'px'
      grave.style.top = (event.pageY - 4) + 'px'
      graveyard.appendChild(grave)
  }
  const createNewSkeleton = (event: any) => {
    // @ts-ignore
    const partiers: HTMLDivElement = document.querySelector('.partiers')
    let dot = document.createElement('div')
    dot.className = 'skeleton-dance'
    dot.style.left = (event.pageX - 4) + 'px'
    dot.style.top = (event.pageY - 4) + 'px'
    partiers.appendChild(dot)
  }
  return (
    <div className="App">
      <Tooltip disableFocusListener title="Add Party Goers by Clicking in this top box" followCursor arrow>
      <div className='partiers' onClick={createNewSkeleton}>
      <div className='spooky'>
        <h1>Happy Halloween!</h1>
        <p style={{fontFamily: 'roboto', color: 'white', textAlign: 'center', textShadow: 'none', backgroundColor: '#000000dd'}}>Click around to have a party, scroll to play music.</p>
        </div>
      </div>
      </Tooltip>
      <Tooltip disableFocusListener title="Decorate your graveyard by Clicking in this bottom box" followCursor arrow>
      <div className="graveyard" onClick={addGraveyard}>
      </div>
      </Tooltip>
    </div>
  );
}

export default App;
