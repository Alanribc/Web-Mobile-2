import Link from "next/link";
import Tema from "./Tema";
import Image from "next/image";

export default function Menu() {
    return (
        <nav>
            <section className = "logomenu">
                <Image 
                src = "/images/play.png"
                width = {50}
                height = {50}
                alt = "Logo"
                className="imagem"
                />
                <ul>
                    <li><Link href = "/" className="links">Home</Link></li>
                    <li><Link href = "/filmes" className="links">Filmes</Link></li>
                    <li><Link href = "/sobre" className="links">Sobre</Link></li>
                </ul>
            </section>
            <Tema />
        </nav>
    );
}