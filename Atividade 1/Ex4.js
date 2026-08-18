import { StyleSheet,View, Text, Image } from 'react-native';

export default function App() {
    const styles = StyleSheet.create({
    titulo: { fontSize: 22, color: 'tomato' },
    });
return (
<Text style={styles.titulo}>Título</Text>
);
}