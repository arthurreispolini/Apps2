import { Button, TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';

export default function App() {
   
return (
    <view>
<Button title="Clique" onPress={() => alert('Oi!')} />
<TouchableOpacity onPress={() => alert('Toque!')}>
<Text>Botão personalizado</Text>
</TouchableOpacity>
    </view>
);
}