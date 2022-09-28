//leggendo la traccia quello esatto dovrebbe essere stampaH2, nel dubbio cerco di prendere la mano
import './App.css';
const sum = (a, b) => a + b;
function stampaH2(a, b){
  return <h2>{a + b }</h2>
}


function App() {
  return (
    <>
    <h2>{sum('ciao', ' a chi legge')}</h2>
    {stampaH2(2, 4)}
    </>

  );
}

export default App;
