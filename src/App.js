import React from 'react';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
        <Contact
        avatar="https://randomuser.me/api/portraits/women/23.jpg"
        name="Olga Patriczer"
        online
        />
        <Contact
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="Clifford Perez"
        />
        <Contact
        avatar="https://randomuser.me/api/portraits/women/10.jpg"
        name="Beatrice Payne"
        online
        text
        />
    </div>
  );
}

export default App;
