// EXEMPLO 1
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

// EXWMPLO 2
// import { fakeFetch } from '../fakeApi';
// export function useFetch(url) {
// const [dados, setDados] = useState(null);
// const [carregando, setCarregando] = useState(true);
// const [erro, setErro] = useState(null);
// useEffect(() => {
// let cancelado = false;
// setCarregando(true);
// fakeFetch(url)
// .then(r => { if (!r.ok) throw new Error(`Erro ${r.status}`); return r.json(); })
// .then(json => { if (!cancelado) setDados(json); })
// .catch(e => { if (!cancelado) setErro(e.message); })
// .finally(() => { if (!cancelado) setCarregando(false); });
// return () => { cancelado = true; };
// }, [url]);
// return { dados, carregando, erro };
// }