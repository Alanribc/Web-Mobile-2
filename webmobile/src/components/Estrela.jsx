'use client'

import { useEffect, useState } from "react";

export default function Estrela({filme}){
    const [curtido, setCurtido] = useState(false);

    useEffect(() => {
        const filmesCurtidos = JSON.parse(localStorage.getItem('filmesCurtidos') || '[]');
        const jaCurtido = filmesCurtidos.some(f => f.id === filme.id);
        setCurtido(jaCurtido);
    }, [filme.id]);

    const salvarFilme = () => {
    const filmesCurtidos = JSON.parse(localStorage.getItem('filmesCurtidos') || '[]');

    if (!curtido) {
      filmesCurtidos.push(filme);
      localStorage.setItem('filmesCurtidos', JSON.stringify(filmesCurtidos));
    } else {
      const filtrados = filmesCurtidos.filter(f => f.id !== filme.id);
      localStorage.setItem('filmesCurtidos', JSON.stringify(filtrados));
    }

    setCurtido(!curtido);
  };



    return (
        <svg 
            onClick={salvarFilme}
            xmlns="http://www.w3.org/2000/svg" 
            fill= {curtido ? "yellow" : "white"} 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="estrelaCurtir">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    )
};





