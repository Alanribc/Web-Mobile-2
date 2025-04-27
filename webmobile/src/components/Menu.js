import Link from "next/link";
import Tema from "./Tema";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href = "/">Home</Link></li>
                <li><Link href = "/">Sobre</Link></li>
            </ul>
            <Tema />
        </nav>
    );
}