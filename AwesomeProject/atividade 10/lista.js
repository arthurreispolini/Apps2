// EXERCÍCIO 1
// import { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// export default function App() {
// const [numero, setNumero] = useState(0);
// return (
// <View>
// <Text>{numero}</Text>
// <Button title="+" onPress={() => setNumero(numero + 1)} />
// <Button title="-" onPress={() => setNumero(numero - 1)} />
// </View>
// );
// }

// EXERCÍCIO 2
// import { useState } from 'react';
// import { View, Text, TextInput } from 'react-native';
// export default function App() {
// const [nome, setNome] = useState('');
// return (
// <View>
// <TextInput onChangeText={setNome} />
// <Text>Olá, {nome}!</Text>
// </View>
// );
// }
 
// EXERCÍCIO 3
// import { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// export default function App() {
// const [visivel, setVisivel] = useState(false);
// return (
// <View>
// <Button title="Mostrar/Esconder" onPress={() => setVisivel(!visivel)}
// />
// {visivel && <Text>Você encontrou o segredo!</Text>}
// </View>
// );
// }

// EXERCÍCIO 4
// import { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList } from 'react-native';
// export default function App() {
// const [tarefas, setTarefas] = useState([]);
// const [texto, setTexto] = useState('');
// const adicionar = () => {
// if (!texto) return;
// setTarefas([...tarefas, texto]);
// setTexto('');
// };
// const remover = (index) => {
// setTarefas(tarefas.filter((_, i) => i !== index));
// };
// return (

// <View>
// <TextInput value={texto} onChangeText={setTexto} />
// <Button title="Adicionar" onPress={adicionar} />
// <FlatList
// data={tarefas}
// keyExtractor={(_, i) => String(i)}
// renderItem={({ item, index }) => (
// <View>
// <Text>{item}</Text>
// <Button title="Remover" onPress={() => remover(index)} />
// </View>
// )}
// />
// </View>
// );
// }

// EXERCÍCIO 5
// import { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// export default function App() {
// const [jogo, setJogo] = useState({ pontos: 0, vidas: 3 });
// return (
// <View>
// <Text>Pontos: {jogo.pontos} | Vidas: {jogo.vidas}</Text>
// <Button
// title="Acertar"
// onPress={() => setJogo({ ...jogo, pontos: jogo.pontos + 1 })}
// />
// <Button
// title="Errar"
// onPress={() =>
// setJogo({ ...jogo, vidas: Math.max(0, jogo.vidas - 1) })
// }
// />
// </View>
// );
// }

// EXERCÍCIO 6
// import { useEffect } from 'react';
// import { Text } from 'react-native';
// export default function App() {
// useEffect(() => {
// console.log('Componente montado');
// return () => console.log('Componente desmontado');
// }, []);
// return <Text>Olá</Text>;
// }

// EXERCÍCIO 7
// import { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// export default function App() {
// const [segundos, setSegundos] = useState(0);
// const [rodando, setRodando] = useState(true);
// useEffect(() => {
// if (!rodando) return;
// const timer = setInterval(() => setSegundos((s) => s + 1), 1000);
// return () => clearInterval(timer);
// }, [rodando]);
// return (
// <View>
// <Text>{segundos}s</Text>
// <Button
// title={rodando ? 'Pausar' : 'Retomar'}

// onPress={() => setRodando(!rodando)}
// />
// </View>
// );
// }

// EXERCÍCIO 8
// import { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// export default function App() {
// const [dados, setDados] = useState([]);
// const [carregando, setCarregando] = useState(true);
// const [erro, setErro] = useState(null);
// useEffect(() => {
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((r) => r.json())
// .then(setDados)
// .catch((e) => setErro(e.message))
// .finally(() => setCarregando(false));
// }, []);
// if (carregando) return <ActivityIndicator />;
// if (erro) return <Text>Erro: {erro}</Text>;
// return (
// <FlatList
// data={dados}
// keyExtractor={(item) => String(item.id)}
// renderItem={({ item }) => <Text>{item.name}</Text>}
// />
// );
// }

// EXERCÍCIO 9
// import { useState, useEffect } from 'react';
// import { View, Text, TextInput, FlatList } from 'react-native';
// export default function App() {
// const [texto, setTexto] = useState('');
// const [resultados, setResultados] = useState([]);
// useEffect(() => {
// const t = setTimeout(() => {
// fetch(`https://jsonplaceholder.typicode.com/users?q=${texto}`)
// .then((r) => r.json())
// .then(setResultados);
// }, 500);
// return () => clearTimeout(t);
// }, [texto]);
// return (
// <View>
// <TextInput value={texto} onChangeText={setTexto} />
// <FlatList
// data={resultados}
// keyExtractor={(item) => String(item.id)}
// renderItem={({ item }) => <Text>{item.name}</Text>}
// />
// </View>
// );
// }

// EXERCÍCIO 10
// import { useState, useEffect } from 'react';
// import { Text, Button } from 'react-native';
// export default function App() {
// const [valor, setValor] = useState(0);
// const [titulo, setTitulo] = useState('Valor: 0');
// useEffect(() => {
// console.log('Novo valor:', valor);
// setTitulo(`Valor: ${valor}`);

// }, [valor]);
// return (
// <>
// <Text>{titulo}</Text>
// <Button title="+1" onPress={() => setValor(valor + 1)} />
// </>
// );
// }

// EXERCÍCIO 11
// import { createContext, useContext } from 'react';
// import { Text } from 'react-native';
// const UsuarioContext = createContext();
// function Perfil() {

// const { nome, idade } = useContext(UsuarioContext);
// return <Text>{nome}, {idade} anos</Text>;
// }
// export default function App() {
// return (
// <UsuarioContext.Provider value={{ nome: 'Ana', idade: 25 }}>
// <Perfil />
// </UsuarioContext.Provider>
// );
// }

// EXERCÍCIO 12
// import { createContext, useContext, useState } from 'react';
// import { View, Text, Button } from 'react-native';
// const TemaContext = createContext();
// function Header() {
// const { texto } = useContext(TemaContext);
// return <Text style={{ color: texto }}>Meu App</Text>;
// }
// function Corpo() {
// const { fundo, texto, alternarTema } = useContext(TemaContext);
// return (
// <View style={{ backgroundColor: fundo }}>
// <Text style={{ color: texto }}>Corpo</Text>
// <Button title="Alternar" onPress={alternarTema} />
// </View>
// );
// }
// export default function App() {
// const [tema, setTema] = useState('claro');
// const alternarTema = () => setTema((t) => (t === 'claro' ? 'escuro' :
// 'claro'));
// const fundo = tema === 'claro' ? '#fff' : '#000';
// const texto = tema === 'claro' ? '#000' : '#fff';

// return (
// <TemaContext.Provider value={{ fundo, texto, alternarTema }}>
// <Header />
// <Corpo />
// </TemaContext.Provider>
// );
// }

// EXERCÍCIO 13
// import { createContext, useContext, useState } from 'react';
// import { View, Text, Button, FlatList } from 'react-native';
// const CarrinhoContext = createContext();
// const produtos = [
// { id: 1, nome: 'Maçã', preco: 2 },
// { id: 2, nome: 'Pão', preco: 5 },
// ];
// function ListaProdutos() {
// const { adicionar } = useContext(CarrinhoContext);
// return (
// <FlatList
// data={produtos}
// keyExtractor={(item) => String(item.id)}
// renderItem={({ item }) => (
// <View>
// <Text>{item.nome} - R$ {item.preco}</Text>
// <Button title="Adicionar" onPress={() => adicionar(item)} />
// </View>
// )}
// />
// );
// }
// function Carrinho() {
// const { itens, remover, total } = useContext(CarrinhoContext);
// return (
// <View>
// {itens.map((item, i) => (

// <View key={i}>
// <Text>{item.nome}</Text>
// <Button title="Remover" onPress={() => remover(i)} />
// </View>
// ))}
// <Text>Total: R$ {total}</Text>
// </View>
// );
// }
// export default function App() {
// const [itens, setItens] = useState([]);
// const adicionar = (item) => setItens([...itens, item]);
// const remover = (index) => setItens(itens.filter((_, i) => i !== index));
// const total = itens.reduce((s, i) => s + i.preco, 0);
// return (
// <CarrinhoContext.Provider value={{ itens, adicionar, remover, total }}>
// <ListaProdutos />
// <Carrinho />
// </CarrinhoContext.Provider>
// );
// }

// EXERCÍCIO 14
// import { createContext, useContext, useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// const AuthContext = createContext();
// function Login() {
// const { login } = useContext(AuthContext);
// const [nome, setNome] = useState('');
// return (
// <View>
// <TextInput value={nome} onChangeText={setNome} />
// <Button title="Entrar" onPress={() => login(nome)} />
// </View>
// );
// }

// function Home() {
// const { usuario, logout } = useContext(AuthContext);
// return (
// <View>
// <Text>Bem-vindo, {usuario.nome}</Text>
// <Button title="Sair" onPress={logout} />
// </View>
// );
// }
// export default function App() {
// const [usuario, setUsuario] = useState(null);
// const login = (nome) => setUsuario({ nome });
// const logout = () => setUsuario(null);
// return (
// <AuthContext.Provider value={{ usuario, login, logout }}>
// {usuario ? <Home /> : <Login />}
// </AuthContext.Provider>
// );
// }

// EXERCÍCIO 15
// import { createContext, useContext, useState } from 'react';
// const AuthContext = createContext();
// export function AuthProvider({ children }) {
// const [usuario, setUsuario] = useState(null);
// const login = (nome) => setUsuario({ nome });
// const logout = () => setUsuario(null);
// return (
// <AuthContext.Provider value={{ usuario, login, logout }}>
// {children}
// </AuthContext.Provider>
// );
// }

// export function useAuth() {
// const ctx = useContext(AuthContext);
// if (!ctx) throw new Error('useAuth deve ser usado dentro de
// AuthProvider');
// return ctx;
// }
