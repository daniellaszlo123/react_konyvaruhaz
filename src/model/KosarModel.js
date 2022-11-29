class KosarModel{

    #kosar=[]
    #osszAr
    #db
    constructor(kosar){
        this.#kosar=kosar;
        this.#db=0;
        this.#osszAr=0;
    }

    setKosarElem(elem){
        const kosarHossz=this.#kosar.length
        //console.log(this.#kosar.includes(elem.id));
        let i=0;
        while (i<kosarHossz && !(this.#kosar[i].id===elem.id)){
            i++;
        }
        if (i<kosarHossz) {
            elem.db++;
        }else{
            this.#kosar.push(elem)
        }
    }

    setKosar(kosar){
        this.#kosar=kosar
    }

    getElemDb(elem){
        return elem.db;
    }

    getOsszDb(){
        return this.#db;
    }

    getOsszAr(){
        let ar=0;
        this.#kosar.forEach((adat)=>{
            ar+=adat.ar
        })
        this.#osszAr=ar
        return this.#osszAr;
    }

    getKosar(){
        return this.#kosar;
    }
}

export default KosarModel