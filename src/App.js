import './App.css';
import artist from './data/artist';

function App() {
  let a = parseInt(prompt("Podaj a: "));
  let b = parseInt(prompt("Podaj b: "));
  let wiek = parseInt(prompt("Podaj wiek: "));
  const rok = new Date().getFullYear();
  console.log(rok);
  return (
    <div>
        <h1>Zadanie 1</h1>
        <p>Suma: { a + b }</p>
        <h1>Zadanie 2</h1>
        <h1>Rok urodzenia: {rok - wiek}</h1>
        <h1>Zadanie 3</h1>
        <ul>
          <li>Nick: {artist.nickname}</li>
          <li>Imię: {artist.firstName}</li>
          <li>Nazwisko: {artist.lastName}</li>
          <li>Wiek: {artist.age}</li>
        </ul>
    </div>
  );
}

export default App;
