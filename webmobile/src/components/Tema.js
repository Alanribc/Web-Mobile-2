'use client';

import { useEffect, useState } from "react";

export default function Tema() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        }
        else{
            document.body.classList.remove('dark-mode');
        }
    });

    const trocaTema = () => {
        setDarkMode(!darkMode);
    }

    return(
        <section className = "secaoTema">
            <h1>Tema:</h1>
            <label className = "botao">
                <input type = "checkbox" checked = {darkMode} onChange = {trocaTema}/>
                <span className = "slider"></span>
            </label>
        </section>
        
    );
}