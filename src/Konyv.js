import './Konyv.css';


function Konyv(props) {

    function kosarFeldolgoz() {
        //<img src={props.konyvAdat.ut} alt={props.konyvAdat.cim} />
        //console.log(props.konyvAdat.id);
        props.kosarFeldolgoz(props.konyvAdat);
    }

    return(
        <div className="konyv">
            <h3>cím: {props.konyvAdat.cim}</h3>
            <p>szerző: {props.konyvAdat.szerzo}</p>
            <span>ár: {props.konyvAdat.ar}ft</span>
            <button onClick={kosarFeldolgoz}>Kosárba</button>
        </div>
    )
}

export default Konyv