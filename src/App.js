import React from 'react';

function Food({fav}) {
return <h3>Hello! I LUV {fav}</h3>
}

function App() {
  return (
  <div>
    <h1>hi</h1>
    <Food fav="kimchis" />
    <Food fav="donggas" />
  </div>
  );
  }

// div안에 있어야 한다. (태그안에)
export default App;

