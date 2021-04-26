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
    <section className="contentBox">
     <h2>{people.length} birthday today </h2>
     <List people={people}/>
      <button className="btn-clear" onClick={handleClear}>Borrar lista</button>
      <button className="btn-all" onClick={handleAll}>Agregar lista</button>

    </section>
    </main>
  );
}

export default App;
