import { useNavigate } from "react-router-dom";

function SubjectButton({
    nome,
    materia,
    className
}) {

    const navigate = useNavigate();

    function selecionarMateria() {

        alert(`Você escolheu ${nome}`);

        navigate(`/questoes/${materia}`);
    }

    return (
        <button
            className={className}
            onClick={selecionarMateria}
        >
            {nome}
        </button>
    );
}

export default SubjectButton;