import Kosar from '../components/public/Kosar';
import KosarModel from '../model/KosarModel';

function KosarPublic() {

    const [kosar, setKosar]=useState([])

    const km = new KosarModel(kosar);
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
      }

    return(
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
    );
}

export default KosarPublic