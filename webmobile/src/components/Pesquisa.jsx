export default function Pesquisa(){
    const [nomes, setNomes] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [erro, setErro] = useState(null);
    const [ano, setAno] = useState("");
    const [descricao, setDescricao] = useState("");

    
    const buscar = async() => {
        try{
            const resp = await fetch("https://api.themoviedb.org/3/search/movie?api_key=d3bb84ede80dc92a552c391613321c4b&query="+nomes);
            const json = await resp.json();
            if(json.error){
                setErro(json.error);
                setFilmes([]);
            }else{
                setFilmes(json.title);
                setErro(null);
            }
        }catch(error){
            setErro("Filme não encontrado")
        }
    } 

    useEffect(() => {
        buscar();
    }, []);

    const filmesJSX = filmes.map((f) => {
        return (
            <div>

            </div>
        )
    })
}