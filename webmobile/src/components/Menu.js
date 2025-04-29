import Link from "next/link";
import Tema from "./Tema";
import Image from "next/image";

export default function Menu() {
    return (
        <nav>
            <section className = "logomenu">
                <Image 
                src = "/images/play.png"
                width = {80}
                height = {80}
                alt = "Logo"
                />
                <ul>
                    <li><Link href = "/" className="links">Home</Link></li>
                    <li><Link href = "/" className="links">Sobre</Link></li>
                </ul>
            </section>
            <Tema />
        </nav>
    );
}