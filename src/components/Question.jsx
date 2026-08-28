import { useState } from "react";
import { useNavigate } from "react-router-dom";

import iaJovix from "../assets/iajovix.png";

function Question({
    materia,
    pergunta,
    opcoes,
    correta,
    explicacao
}) {

    const [respostaSelecionada, setRespostaSelecionada] =
        useState(null);

    const navigate = useNavigate();

    function responder(indice) {

        setRespostaSelecionada(indice);

        if (indice === correta) {

            alert("Resposta correta! Parabéns.");

            navigate("/materias");

        } else {

            alert("Resposta incorreta! Tente novamente.");
        }
    }

    function mostrarResolucao() {

        alert(`IA JOVIX: ${explicacao}`);
    }

    return (
        <main id="questoes">

            <h2>Questão</h2>

            <p className="materia">
                {materia}
            </p>

            <p className="pergunta">
                {pergunta}
            </p>

            <div className="opcoes">

                {opcoes.map((opcao, indice) => (

                    <button
                        key={indice}
                        className={`botaoquestao ${
                            respostaSelecionada === indice
                                ? "selecionada"
                                : ""
                        }`}
                        onClick={() => responder(indice)}
                    >
                        {opcao}
                    </button>

                ))}

            </div>

            <img
                src={iaJovix}
                alt="Imagem do Jovix"
                id="imagemia"
            />

            <button
                className="respostaia"
                onClick={mostrarResolucao}
            >
                Quer ver a resolução?
            </button>

        </main>
    );
}

export default Question;