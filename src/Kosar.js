import './Kosar.css'
function Kosar(props) {

    function kosarTorol() {
        props.kosarTorol(props.konyvAdat)
    }

    function kosarElemTorol() {
        props.kosarElemTorol(props.konyvAdat)
    }

    function kosarElemHozzaAd() {
        props.kosarElemHozzaAd(props.konyvAdat)
    }

    return(
            <tr>
                <td>{props.konyvAdat.cim}</td>
                <td>{props.konyvAdat.szerzo}</td>
                <td>{props.konyvAdat.ar} ft</td>
                <td>{props.konyvAdat.db} <button onClick={kosarElemHozzaAd}>➕</button><button onClick={kosarElemTorol}>➖</button></td>
                <td><button onClick={kosarTorol}>❌</button></td>
            </tr>
    )
}
export default Kosar