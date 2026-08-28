import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.css";

function Home() {

    const [nome, setNome] = useState("");

    const navigate = useNavigate();

    function entrar() {

        const nomeDigitado = nome.trim();

        if (nomeDigitado === "") {

            alert("Por favor, digite seu nome antes de entrar!");

            return;
        }

        // Salva o nome do usuário no localStorage
        localStorage.setItem("nomeUsuario", nomeDigitado);

        alert(`Bem-vindo, ${nomeDigitado}!`);

        navigate("/materias");
    }

    return (
        <main id="home">

            <h1>JOVIX</h1>

            <input
                type="text"
                id="nome"
                placeholder="Digite seu nome..."
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />

            <button
                id="entrar"
                className="entrar"
                onClick={entrar}
            >
                Entrar
            </button>

        </main>
    );
}

export default Home;