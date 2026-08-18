import { Button, TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';

export default function App() {
   const [nome, setNome] = useState('');
return (
    <view>
<TextInput
value={nome}
onChangeText={setNome}
placeholder="Digite seu nome"
/>
    </view>
);
}