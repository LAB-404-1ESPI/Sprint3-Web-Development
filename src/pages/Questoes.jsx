import { useParams } from "react-router-dom";

import Question from "../components/Question";

import { questoes } from "../data/questoes";

import "../styles/questoes.css";

function Questoes() {

    const { materia } = useParams();

    const questao = questoes[materia];

    if (!questao) {

        return (
            <main className="erro">

                <h1>Matéria não encontrada.</h1>

                <p>
                    A matéria selecionada não existe.
                </p>

            </main>
        );
    }

    return (
        <Question
            materia={questao.materia}
            pergunta={questao.pergunta}
            opcoes={questao.opcoes}
            correta={questao.correta}
            explicacao={questao.explicacao}
        />
    );
}

export default Questoes;