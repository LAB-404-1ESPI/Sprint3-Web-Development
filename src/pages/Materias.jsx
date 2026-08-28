import SubjectButton from "../components/SubjectButton";

import "../styles/materias.css";

function Materias() {

    return (
        <main id="materias">

            <h1>MATÉRIAS</h1>

            <div className="botoes-materias">

                <SubjectButton
                    nome="Matemática"
                    materia="matematica"
                    className="matematica"
                />

                <SubjectButton
                    nome="História"
                    materia="historia"
                    className="historia"
                />

                <SubjectButton
                    nome="Geografia"
                    materia="geografia"
                    className="geografia"
                />

            </div>

        </main>
    );
}

export default Materias;