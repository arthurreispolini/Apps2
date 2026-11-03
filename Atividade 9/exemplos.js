// EX 1
// function ListaUsuarios() {
// const [usuarios, setUsuarios] = useState([]);
// const [carregando, setCarregando] = useState(true);
// useEffect(() => {
// async function carregar() {
// const resposta = await fetch(URL_API);
// const dados = await resposta.json();
// setUsuarios(dados);
// setCarregando(false);
// }
// carregar();
// }, []);
// if (carregando) return <ActivityIndicator />;
// return <Lista dados={usuarios} />;
// }


// EX 2
// function DetalhePost({ postId }) {
// const [post, setPost] = useState(null);
// useEffect(() => {
// setPost(null); // limpa enquanto carrega
// fetch(`${API}/posts/${postId}`)
// .then(r => r.json())
// .then(setPost);
// }, [postId]); // roda de novo se postId mudar
// if (!post) return <ActivityIndicator />;
// return <Text>{post.title}</Text>;
// }


// EX 3
// function Cronometro() {
// const [segundos, setSegundos] = useState(0);
// useEffect(() => {
// const id = setInterval(() => {
// setSegundos(s => s + 1);
// }, 1000);
// return () => clearInterval(id); // limpeza
// }, []);
// return <Text>{segundos}s</Text>;
// }


// EX 4
// function BuscaProdutos() {
// const [termo, setTermo] = useState('');
// const [resultados, setResultados] = useState([]);
// useEffect(() => {
// if (termo.length < 3) return;
// const timer = setTimeout(async () => {
// const r = await fetch(`${API}/search?q=${termo}`);
// const dados = await r.json();
// setResultados(dados.products);
// }, 500);
// return () => clearTimeout(timer); // cancela
// }, [termo]);
// return <TextInput value={termo} onChangeText={setTermo} />;
// }