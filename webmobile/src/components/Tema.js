import { useEffect, useState } from "react";

export default function Tema() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() {
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
        <label><div></div></label>
    );
}