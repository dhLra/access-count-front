import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Page404() {

    const [ghostEffect, setGhostEffect] = useState('fa-fade');
    const [ghostCount, setGhostCount] = useState(0);

    const ghost = () => {
        if (ghostCount > 3) {
            setGhostEffect('fa-flip')
            setTimeout(() => setGhostEffect('fa-fade'), 2883);
        }
        setGhostCount(ghostCount + 1)
    }


    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row text-center">
                <FontAwesomeIcon className={"p-0 mb-3 " + ghostEffect} icon={faGhost} size="7x" onClick={() => ghost()} />
                <h1>404!</h1>
                <h3>Pagina não encontrada</h3>
                <p className="p-0 m-0">A pagina que você procurou não existe...</p>
                <p className="p-0 m-0">Caso ache que isso seja um erro entre em contato com o desenvolvedor </p>
            </div>
        </div>
    )
}