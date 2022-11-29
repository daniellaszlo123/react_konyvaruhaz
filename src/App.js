import { useState } from 'react';
import './App.css';
import Konyv from './Konyv';
import Kosar from './Kosar';
import KosarModel from './model/KosarModel';

const konyveim=[
  {
    id:1,
    cim:"Malveil",
    //ut:"kepek/kep1.png",
    szerzo:"Robert Merle",
    ar:1111,
    db:1
  },
  {
    id:2,
    cim:"Védett férfiak",
    //ut:"kepek/kep1.png",
    szerzo:"Robert Merle",
    ar:2111,
    db:1
  },
  {
    id:3,
    cim:"Állati elmék",
    //ut:"kepek/kep1.png",
    szerzo:"Robert Merle",
    ar:3112,
    db:1
  }
]

function App() {

  //let db=0;
  const [db, setDb]=useState(0)
  const [ossz, setOssz]=useState(0)
  const [kosar, setKosar]=useState([])
  const [elemDb, setElemDb]=useState(0)

  const km = new KosarModel(kosar);
  function kosarFeldolgoz(adat) {
    //console.log(adat);
    //hány könyv van a kosárban
    //db++;
    //console.log(db);
    //a dbszám jelenti a komponens pillnatnyi állapotát, 
    //amikor ez változik akkor az oldal egy részének újra kell renderelődni
    //state
    km.setKosarElem(adat)

    setDb(km.getOsszDb()); //ez változtatja meg a hozzá rendelt változó értékét + frissíti az oldal vonatkozó részeit is
    setOssz(km.getOsszAr())
    //kosar.push(adat)//először push a kosárba és utána állítjuk be a setKosar-al
    setKosar(km.getKosar())
    setElemDb(km.getElemDb(adat))
    //console.log(km.getElemDb(adat));
    //console.log(km.getKosar());
  }

  function kosarTorol(adat) {

    let kosar = km.getKosar()
    console.log(kosar);
    setKosar(kosar.slice(adat.id))
  }

  function kosarElemTorol(adat) {
    adat.db--;
    setElemDb(km.getElemDb(adat))
    //console.log(adat);
  }
  
  function kosarElemHozzaAd(adat) {
    adat.db++;
    setElemDb(km.getElemDb(adat))
    //console.log(adat);
  }

  return ( //jsx
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <section className='kosar'>
        <p>A könyvek száma: {db}</p>
        <p>A könyvek értéke: {ossz}</p>
        <table className="table table-striped text-left">
          <thead>
            <tr>
              <th>Cím</th>
              <th>Szerző</th>
              <th>Ár</th>
              <th>Db</th>
              <th>Törlés</th>
            </tr>
          </thead>
          <tbody>
            {km.getKosar().map((konyv, index)=>{
              return(<Kosar konyvAdat={konyv} key={index} kosarTorol={kosarTorol}
               kosarElemTorol={kosarElemTorol} kosarElemHozzaAd={kosarElemHozzaAd}/>)
            })}
          </tbody>
        </table>
      </section>
      <article className='konyvek'>
      {
        konyveim.map((konyv, index)=>{
          return(<Konyv konyvAdat={konyv} key={index} kosarFeldolgoz={kosarFeldolgoz}/>)
        })
      }
      
        
      </article>
      <footer className='lablec'>
        <p>én</p>
      </footer>
    </div>
  );
}

export default App;
