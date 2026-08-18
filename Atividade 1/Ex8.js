import { Button, TouchableOpacity, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';

export default function App() {
   const [nome, setNome] = useState('');
return (
    <view>
<ScrollView>
<Text>Item 1</Text>
<Text>Item 2</Text>
<Text>Item 3</Text>
</ScrollView>
    </view>
);
}