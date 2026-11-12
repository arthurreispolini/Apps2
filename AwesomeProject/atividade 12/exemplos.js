// Exemplo 1
// export function useToggle(inicial = false) {
//   const [valor, setValor] = useState(inicial);
//   const alternar = () => setValor(v => !v);
//   return [valor, alternar]; // devolve array, igual ao useState
// }

// // Uso
// function Configuracoes() {
//   const [notif, trocarNotif] = useToggle(true);
//   const [aviao, trocarAviao] = useToggle();

//   return (
//     <View>
//       <Switch value={notif} onValueChange={trocarNotif} />
//       <Switch value={aviao} onValueChange={trocarAviao} />
//     </View>
//   );
// }

// EXEMPLO 2
// export function useFetch(url) {
//   const [dados, setDados] = useState(null);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(null);

//   useEffect(() => {
//     let cancelado = false;
//     setCarregando(true);

//     fetch(url)
//       .then(r => { if (!r.ok) throw new Error(`Erro ${r.status}`); return r.json(); })
//       .then(json => { if (!cancelado) setDados(json); })
//       .catch(e => { if (!cancelado) setErro(e.message); })
//       .finally(() => { if (!cancelado) setCarregando(false); });

//     return () => { cancelado = true; }; // Limpeza: evita setState após desmontar
//   }, [url]);

//   return { dados, carregando, erro };
// }

// EXEMPLO 3
// export function useForm(iniciais, validar) {
//   const [valores, setValores] = useState(iniciais);
//   const [erros, setErros] = useState({});

//   const alterar = (campo, valor) =>
//     setValores(v => ({ ...v, [campo]: valor }));

//   function enviar(aoEnviar) {
//     const novos = validar(valores);
//     setErros(novos);
//     if (Object.keys(novos).length === 0) aoEnviar(valores);
//   }

//   return { valores, erros, alterar, enviar };
// }