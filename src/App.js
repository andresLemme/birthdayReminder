import logo from './logo.svg';
import './App.css';
import List from './component/List';
import { useState } from 'react';
import data from './component/Data/data';

function App() {
  const [people, setPeople] = useState(data)

  function handleClear(){
    console.log("click")
    setPeople([])
  }
  function handleAll(){
    setPeople(data)
  }
  return (
    <main>
    <section>
     <h3>{people.length} birthday today </h3>
     <List people={people}/>
      <button onClick={handleClear}>Borrar lista</button>
      <button onClick={handleAll}>Agregar lista</button>

    </section>
    </main>
  );
}

export default App;
