import { Button, TouchableOpacity, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';

function Saudacao({ nome }) {
return <Text>Olá, {nome}!</Text>;
}

export default function App() {
  
return (
    <view>
<Saudacao nome="Ana" />
<Saudacao nome="Beto" />
    </view>
);
}