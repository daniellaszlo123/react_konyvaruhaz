//import { useState } from 'react';
//import { useEffect } from "react";
import './App.css';
import Konyv from '../components/public/Konyv';
//import Kosar from '../components/public/Kosar';
//import KosarModel from '../model/KosarModel';


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



function Public() {
  /*const [konyvek, setKonyvek] = useState([]);
  let vegpont = "http://localhost:3001/konyveim";
  
  useEffect(() => {
    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => setKonyvek(data));
  }, [vegpont]);*/
  //let db=0;
  //const [db, setDb]=useState(0)
  //const [ossz, setOssz]=useState(0)
  //const [kosar, setKosar]=useState([])
  //const [elemDb, setElemDb]=useState(0)
  
  //const km = new KosarModel(kosar);
  //function kosarFeldolgoz(adat) {
    //console.log(adat);
    //hány könyv van a kosárban
    //db++;
    //console.log(db);
    //a dbszám jelenti a komponens pillnatnyi állapotát, 
    //amikor ez változik akkor az oldal egy részének újra kell renderelődni
    //state
    //km.setKosarElem(adat)

    //setDb(); //ez változtatja meg a hozzá rendelt változó értékét + frissíti az oldal vonatkozó részeit is
    //setOssz(km.getOsszAr())
    //kosar.push(adat)//először push a kosárba és utána állítjuk be a setKosar-al
    //setKosar(km.getKosar())
    //setElemDb(km.getOsszDb())
    
    //console.log(km.getElemDb(adat));
    //console.log(km.getKosar());
  //}
/*
  function kosarTorol(adat) {

    let kosar = km.getKosar()
    console.log(kosar);
    
    //setKosar(kosar.slice(adat.id-1, adat.id-1))
    //console.log(adat.id);
    //console.log(kosar)
    let index = kosar.findIndex((elem)=>{
      return elem.id===adat.id
    })
    //console.log(index);
    let elotte=kosar.splice(0, index)
    let utana=kosar.splice(index+1, kosar.length-1)
    let ujKosar=elotte.concat(utana);
    setKosar(ujKosar)
  }

  function kosarElemTorol(adat) {
    if (adat.db<=1) {
      kosarTorol(adat)
    }else{
      adat.db--;
      setElemDb(km.getOsszDb())
    }
    
    //console.log(adat);
  }
  
  function kosarElemHozzaAd(adat) {
    adat.db++;
    setElemDb(km.getOsszDb())
    
    //console.log(adat);
  }*/

  return ( //jsx
    <>
      {/*<section className='kosar'>
        <p>A könyvek száma: {elemDb}</p>
        <p>A könyvek értéke: {ossz}</p>
      </section>*/}
      <article className='konyvek'>
      {
        konyveim.map((konyv, index)=>{
          return(<Konyv konyvAdat={konyv} key={index} kosarFeldolgoz={kosarFeldolgoz}/>)
        })
      }
      
        
      </article>
    </>
  );
}

export default Public;
