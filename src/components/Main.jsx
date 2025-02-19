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

        // uso setFormData cosi aggiorna
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: e.target.value,
            
        }))
       
    }

    // TEST console.log
    console.log(formData)



    // 4 Ora andiamo a gestire l invio del form con onSubmit

    return (
        <>
            <main>
                <div>

                    {/* FORM PER UTENTE*/}
                    <form >

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

                        <input
                            type="text"
                            name="contenuto"
                            onChange={handleFormData}
                            value={formData.contenuto}
                            placeholder="Inserisci Contenuto"
                        />

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
                        </section>
                    )}
                </div>
            </main>

        </>
    );
}