import logo from './logo.svg';
import './App.css';

function salutaTizio(nome){
  return <h1>hello, {nome}</h1>
}

function App() {
  return (
    <>
    {salutaTizio('Pierferdinando')}
    </>
  );
}

export default App;
