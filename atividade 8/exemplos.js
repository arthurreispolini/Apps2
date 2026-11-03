// EX 1
// export default function Contador() {
// const [contador, setContador] = useState(0);
// return (
// <View style={styles.container}>
// <Text style={styles.numero}>{contador}</Text>
// <Button title="+1"
// onPress={() => setContador(contador + 1)} />
// <Button title="-1"
// onPress={() => setContador(contador - 1)} />
// <Button title="Zerar"
// onPress={() => setContador(0)} />
// </View>
// );
// }


// EX 2
// export default function Saudacao() {
// const [nome, setNome] = useState('');
// return (
// <View style={{ padding: 20 }}>
// <TextInput
// placeholder="Digite seu nome"
// value={nome}
// onChangeText={setNome}
// />
// <Text>
// {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
// </Text>
// </View>
// );
// }


// EX 3
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


// EX 4
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


// EX 5
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


// EX 6
// function Home() {
// const { modo, cores, alternarTema } =
// useContext(TemaContext);
// return (
// <View style={{ backgroundColor: cores.fundo }}>
// <Text style={{ color: cores.texto }}>
// Tema atual: {modo}
// </Text>
// <Button title="Trocar tema" onPress={alternarTema} />
// </View>
// );
// }


// EX 7
// const AuthContext = createContext(null);
// export function AuthProvider({ children }) {
// const [usuario, setUsuario] = useState(null);
// const login = (email) =>
// setUsuario({ nome: 'Ana', email });
// const logout = () => setUsuario(null);
// return (
// <AuthContext.Provider value={{
// usuario, logado: !!usuario, login, logout,
// }}>
// {children}
// </AuthContext.Provider>
// );
// }
// export function useAuth() {
// const ctx = useContext(AuthContext);
// if (!ctx) throw new Error(
// 'useAuth fora do <AuthProvider>');
// return ctx;
// }
// function Rotas() {
// const { logado } = useAuth();
// return logado ? <Home /> : <Login />;
// }


// EX 8
// function Configuracoes() {
// const [notif, trocarNotif] = useToggle(true);
// const [aviao, trocarAviao] = useToggle();
// return (
// <View>
// <Switch value={notif} onValueChange={trocarNotif} />
// <Switch value={aviao} onValueChange={trocarAviao} />
// </View>
// );
// }


// EX 9
// export function useFetch(url) {
// const [dados, setDados] = useState(null);
// const [carregando, setCarregando] = useState(true);
// const [erro, setErro] = useState(null);
// useEffect(() => {
// let cancelado = false;
// setCarregando(true);
// fetch(url)
// .then(r => { if (!r.ok) throw new Error(`Erro ${r.status}`); return r.json(); })
// .then(json => { if (!cancelado) setDados(json); })
// .catch(e => { if (!cancelado) setErro(e.message); })
// .finally(() => { if (!cancelado) setCarregando(false); });
// return () => { cancelado = true; };
// }, [url]);
// return { dados, carregando, erro };
// }

// function Posts() {
// const { dados, carregando, erro } =
// useFetch(`${API}/posts`);
// if (carregando) return <ActivityIndicator />;
// if (erro) return <Text>{erro}</Text>;
// return <Text>{dados.length} posts carregados</Text>;
// }
// function Usuarios() {
// const { dados, carregando } = useFetch(`${API}/users`);
// // ...
// }


// EX 10
// export function useForm(iniciais, validar) {
// const [valores, setValores] = useState(iniciais);
// const [erros, setErros] = useState({});
// const alterar = (campo, valor) =>
// setValores(v => ({ ...v, [campo]: valor }));
// function enviar(aoEnviar) {
// const novos = validar(valores);
// setErros(novos);
// if (Object.keys(novos).length === 0)
// aoEnviar(valores);
// }
// return { valores, erros, alterar, enviar}
