import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

// EXERCÍCIO 1
export function Exercicio1() {
  return <View style={styles1.container} />;
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    width: '100%',
    height: '100%',
  },
});

// EXERCÍCIO 2
export function Exercicio2() {
  return (
    <View style={styles2.container}>
      <View style={[styles2.quadrado, { backgroundColor: 'red' }]} />
      <View style={[styles2.quadrado, { backgroundColor: 'green' }]} />
      <View style={[styles2.quadrado, { backgroundColor: 'blue' }]} />
    </View>
  );
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  quadrado: {
    width: 100,
    height: 100,
  },
});

// EXERCÍCIO 3
export function Exercicio3() {
  return (
    <View style={styles3.container}>
      <View style={styles3.quadrado} />
    </View>
  );
}
const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadrado: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});

// EXERCÍCIO 4
export function Exercicio4() {
  return (
    <View style={styles4.container}>
      <View style={[styles4.quadrado, { backgroundColor: 'orange' }]} />
      <View style={[styles4.quadrado, { backgroundColor: 'purple' }]} />
      <View style={[styles4.quadrado, { backgroundColor: 'teal' }]} />
    </View>
  );
}
const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quadrado: {
    width: 80,
    height: 80,
  },
});

// EXERCÍCIO 5
export function Exercicio5() {
  return (
    <View style={styles5.container}>
      <View style={[styles5.quadrado, { height: 50, backgroundColor: '#e74c3c' }]} />
      <View style={[styles5.quadrado, { height: 100, backgroundColor: '#2ecc71' }]} />
      <View style={[styles5.quadrado, { height: 75, backgroundColor: '#3498db' }]} />
    </View>
  );
}
const styles5 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  quadrado: {
    width: 100,
  },
});

// EXERCÍCIO 6
export function Exercicio6() {
  const cores = ['#e74c3c', '#f1c40f', '#e74c3c', '#f1c40f'];
  return (
    <View style={styles6.container}>
      {cores.map((cor, i) => (
        <View key={i} style={[styles6.quadrado, { backgroundColor: cor }]} />
      ))}
    </View>
  );
}
const styles6 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // padrão, pode ser omitido
    alignItems: 'center',
  },
  quadrado: {
    width: 100,
    height: 60,
    marginVertical: 5,
  },
});

// EXERCÍCIO 7
export function Exercicio7() {
  const itens = ['Início', 'Buscar', 'Perfil', 'Config'];
  return (
    <View style={styles7.container}>
      {itens.map((item, i) => (
        <View key={i} style={styles7.item}>
          <Text style={styles7.texto}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
const styles7 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#ecf0f1',
    borderRightWidth: 1,
    borderRightColor: '#bdc3c7',
  },
  texto: {
    fontSize: 14,
  },
});

// EXERCÍCIO 8
export function Exercicio8() {
  return (
    <View style={styles8.container}>
      <View style={styles8.foto} />
      <Text style={styles8.nome}>Maria Silva</Text>
      <Text style={styles8.bio}>Desenvolvedora React Native apaixonada por UI.</Text>
    </View>
  );
}
const styles8 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#95a5a6',
  },
  nome: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 6,
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

// EXERCÍCIO 9
export function Exercicio9() {
  return (
    <View style={styles9.container}>
      {[1, 2, 3, 4].map((n) => (
        <View key={n} style={styles9.card}>
          <Text>Card {n}</Text>
        </View>
      ))}
    </View>
  );
}
const styles9 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  card: {
    width: '50%',
    height: 100,
    padding: 8,
  },
});

// EXERCÍCIO 10
export function Exercicio10() {
  return (
    <View style={styles10.container}>
      <View style={styles10.header}>
        <Text style={styles10.headerTexto}>Meu App</Text>
      </View>
      <ScrollView style={styles10.conteudo}>
        {Array.from({ length: 20 }).map((_, i) => (
          <Text key={i} style={styles10.item}>Item {i + 1}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
const styles10 = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTexto: {
    color: '#fff',
    fontSize: 18,
  },
  conteudo: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

// EXERCÍCIO 11
export function Exercicio11() {
  return (
    <View style={styles11.container}>
      <Text>🏠</Text>
      <Text>🔍</Text>
      <Text>👤</Text>
    </View>
  );
}
const styles11 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

// EXERCÍCIO 12
export function Exercicio12() {
  return (
    <View style={styles12.card}>
      <View style={styles12.imagem} />
      <Text style={styles12.titulo}>Tênis Esportivo</Text>
      <Text style={styles12.preco}>R$ 199,90</Text>
    </View>
  );
}
const styles12 = StyleSheet.create({
  card: {
    flexDirection: 'column',
    width: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    padding: 8,
  },
  imagem: {
    width: '100%',
    height: 120,
    backgroundColor: '#bdc3c7',
    borderRadius: 8,
  },
  titulo: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  preco: {
    marginTop: 4,
    fontSize: 15,
    color: '#27ae60',
    fontWeight: 'bold',
  },
});

// EXERCÍCIO 13
export function Exercicio13() {
  return (
    <View style={styles13.container}>
      <View style={styles13.logo} />
      <TextInput style={styles13.input} placeholder="Email" />
      <TextInput style={styles13.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles13.botao}>
        <Text style={styles13.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles13 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#3498db',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  botao: {
    width: '100%',
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// EXERCÍCIO 14
export function Exercicio14() {
  return (
    <View style={styles14.container}>
      {Array.from({ length: 9 }).map((_, i) => (
        <View key={i} style={styles14.foto} />
      ))}
    </View>
  );
}
const styles14 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  foto: {
    width: '33.33%',
    aspectRatio: 1,
    backgroundColor: '#95a5a6',
    borderWidth: 0.5,
    borderColor: '#fff',
  },
});

// EXERCÍCIO 15
export function Exercicio15() {
  return (
    <View style={styles15.post}>
      <View style={styles15.cabecalho}>
        <View style={styles15.avatar} />
        <Text style={styles15.nome}>João Souza</Text>
      </View>
      <Text style={styles15.texto}>Curtindo um dia lindo de sol! ☀️</Text>
      <View style={styles15.imagemPost} />
      <View style={styles15.acoes}>
        <TouchableOpacity><Text>👍 Curtir</Text></TouchableOpacity>
        <TouchableOpacity><Text>💬 Comentar</Text></TouchableOpacity>
      </View>
    </View>
  );
}
const styles15 = StyleSheet.create({
  post: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#bdc3c7',
    marginRight: 8,
  },
  nome: {
    fontWeight: 'bold',
  },
  texto: {
    marginTop: 8,
  },
  imagemPost: {
    width: '100%',
    height: 180,
    backgroundColor: '#ecf0f1',
    marginTop: 8,
    borderRadius: 6,
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

// EXERCÍCIO 16
export function Exercicio16() {
  const produtos = [
    { nome: 'Camiseta', preco: 'R$ 49,90' },
    { nome: 'Calça Jeans', preco: 'R$ 129,90' },
    { nome: 'Boné', preco: 'R$ 39,90' },
  ];
  return (
    <View>
      {produtos.map((p, i) => (
        <View key={i} style={styles16.item}>
          <View style={styles16.foto} />
          <View style={styles16.info}>
            <Text style={styles16.nome}>{p.nome}</Text>
          </View>
          <Text style={styles16.preco}>{p.preco}</Text>
        </View>
      ))}
    </View>
  );
}
const styles16 = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  foto: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#bdc3c7',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  nome: {
    fontSize: 15,
  },
  preco: {
    fontWeight: 'bold',
    color: '#27ae60',
  },
});

// EXERCÍCIO 17
export function Exercicio17() {
  const metricas = [
    { icone: '📈', valor: '1.2K' },
    { icone: '👥', valor: '340' },
    { icone: '💰', valor: 'R$ 8K' },
    { icone: '⭐', valor: '4.8' },
  ];
  return (
    <View style={styles17.container}>
      {metricas.map((m, i) => (
        <View key={i} style={styles17.card}>
          <Text style={styles17.icone}>{m.icone}</Text>
          <Text style={styles17.valor}>{m.valor}</Text>
        </View>
      ))}
    </View>
  );
}
const styles17 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#eee',
  },
  icone: {
    fontSize: 28,
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },
});

// EXERCÍCIO 18
export function Exercicio18() {
  return (
    <View style={styles18.container}>
      <View style={[styles18.balao, styles18.recebida]}>
        <Text style={styles18.nome}>Ana</Text>
        <Text>Oi, tudo bem?</Text>
        <Text style={styles18.hora}>09:12</Text>
      </View>
      <View style={[styles18.balao, styles18.enviada]}>
        <Text>Tudo ótimo, e você?</Text>
        <Text style={styles18.hora}>09:13</Text>
      </View>
    </View>
  );
}
const styles18 = StyleSheet.create({
  container: {
    padding: 12,
  },
  balao: {
    maxWidth: '75%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 4,
  },
  recebida: {
    backgroundColor: '#e5e5e5',
    alignSelf: 'flex-start',
  },
  enviada: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#3498db',
  },
  hora: {
    fontSize: 10,
    color: '#7f8c8d',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
});

// EXERCÍCIO 19
export function Exercicio19() {
  const eventos = ['Pedido criado', 'Pagamento aprovado', 'Enviado', 'Entregue'];
  return (
    <View style={styles19.container}>
      {eventos.map((evento, i) => {
        const esquerda = i % 2 === 0;
        return (
          <View key={i} style={styles19.linha}>
            {esquerda && <Text style={styles19.textoEsquerda}>{evento}</Text>}
            {!esquerda && <View style={styles19.espaco} />}
            <View style={styles19.circulo} />
            {!esquerda && <Text style={styles19.textoDireita}>{evento}</Text>}
            {esquerda && <View style={styles19.espaco} />}
          </View>
        );
      })}
    </View>
  );
}
const styles19 = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  espaco: {
    flex: 1,
  },
  textoEsquerda: {
    flex: 1,
    textAlign: 'right',
    paddingRight: 10,
  },
  textoDireita: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: 10,
  },
  circulo: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#3498db',
  },
});

// EXERCÍCIO 20
export function Exercicio20() {
  return (
    <View style={styles20.container}>
      <View style={styles20.linha}>
        <Text style={styles20.label}>Nome</Text>
        <TextInput style={styles20.input} />
      </View>
      <View style={styles20.linha}>
        <Text style={styles20.label}>Email</Text>
        <TextInput style={styles20.input} />
      </View>
      <View style={styles20.linha}>
        <Text style={styles20.label}>Telefone</Text>
        <TextInput style={styles20.input} />
      </View>
      <TouchableOpacity style={styles20.botao}>
        <Text style={styles20.botaoTexto}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles20 = StyleSheet.create({
  container: {
    padding: 16,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    width: 80,
    textAlign: 'right',
    marginRight: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
  },
  botao: {
    marginTop: 12,
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default function App() {
  return (
    <View style={{ flex: 1 }}>
     
      <Exercicio3 />
    </View>
  );
}
