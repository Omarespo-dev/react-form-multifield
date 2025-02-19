// Importo usesState
import { useState } from "react";

// Importo array di oggetti
import postList from "../data/arrayList"

export default function Main() {

    //1 Ora vado a utilizzare lo useState perche mi permette di prendere l array di oggetti e catturarne l evento.
    const [list, setlist] = useState(postList)
    // -- list e l array di oggetti e setlist vado ad aggiornare quello array di ogetti


    //2 Faccio lo useState per il Form dove va a prendere l oggetto con delle proprieta che rappresentano il form come titolo autore etcc
    const initialFormData = {
        titolo: "",
        autore: "",
        contenuto: "",
        categoria: "",
    }

    //2 formDATA sono i dati raccolti dal form -- 
    // setFormData ti permette di aggiornare formData ogni volta che l'utente scrive o interagisce con il form.
    const [formData, setFormData] = useState(initialFormData)


    //3 Ora andiamo a gestire l onChange che e un evento con una funzione. La sua funzione e quando l utente scrive nel campo di testo rileva ogni cambiamento dell input

    // QUesta funzione serve a salvare i dati che l utente inserisce nel form e aggiornarli nello stato formData
    function handleFormData(e) {

        // uso setFormData cosi vado ad aggiornare currentFormData
        setFormData((currentFormData) => ({
            // faccio copia di formData con ...spread
            ...currentFormData,
            //Prende il nome dell input che l utente sta modificando --- invece value prende il valore inserito nell input
            [e.target.name]: e.target.value,
            
        }))
       
    }

    // TEST console.log
    console.log(formData)



    // 4 Ora andiamo a gestire l invio del form con onSubmit
    function addList(e) {
        // all invio non resetta la pagina
        e.preventDefault();

        // Ora andiamo ad aggiornare lo stato di list con setList-- poi facciamo la copia di list con il parametro currentList ---- Poi aggiungiamo un ogetto prende l'ultimo elemento dell'array, legge l'id, e lo incrementa di +1------- ...formData: aggiunge i dati inseriti dall'utente.
        setlist((currentList) => [...currentList,{ id: currentList[currentList.length - 1].id + 1, ...formData }])

        // reset del form all invio
        setFormData(initialFormData);
    }



    // 5 Ora andiamo a gestire la cancellazione di una lista attraverso ID
    function deleteList(idList){
        // creo nuovo array dove all interno faccio filter di list e vado a ricavarmi l elemento iesimo e faccio return di una condizione dicendo che Se l'ID dell'elemento attuale è diverso dall'ID da eliminare, allora lo tengo nella nuova lista.
        const updateLists = list.filter((list) =>{
            return list.id !== idList
        })

        // aggiornami la set list con updateList 
        setlist(updateLists)
    }

    return (
        <>
            <main>
                <div>

                    {/* FORM PER UTENTE*/}
                    <form onSubmit={addList}>

                        <input
                            type="text"
                            name="titolo"
                            onChange={handleFormData}
                            value={formData.titolo}
                            placeholder="Inserisci il Titolo"
                        />

                        <input
                            type="text"
                            name="autore"
                            onChange={handleFormData}
                            value={formData.autore}
                            placeholder="Inserisci Autore"
                        />

                        <textarea className="textarea"
                            
                            name="contenuto"
                            onChange={handleFormData}
                            value={formData.contenuto}
                            placeholder="Inserisci Contenuto"
                        ></textarea>

                        <input
                            type="text"
                            name="categoria"
                            onChange={handleFormData}
                            value={formData.categoria}
                            placeholder="Inserisci Categoria"
                        />

                        <button>AGGIUNGI</button>
                    </form>


                    {/* post card  with map*/}
                    {list.map((post) =>
                        <section className="post-set" key={post.id} >
                            <h2>{post.titolo}</h2>

                            <h4>Autore</h4>
                            <p>{post.autore}</p>

                            <h3>Testo</h3>
                            <p>{post.contenuto}</p>

                            <h3>Categoria</h3>
                            <p>{post.categoria}</p>
                            <button className="remove" onClick={() => deleteList(post.id)}>RIMUOVI</button>
                        </section>
                    )}
                </div>
            </main>

        </>
    );
}