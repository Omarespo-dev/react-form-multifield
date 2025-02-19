// Importo usesState
import { useState } from "react";
// Importo array di oggetti
import postList from "../data/arrayList"

export default function Main() {
    return (
        <>
            <main>

                
                
                
                {/* post card  with map*/}
                <div>
                    {postList.map((post) =>
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