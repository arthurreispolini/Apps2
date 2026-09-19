// ## Questão 9
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ToggleTexto() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Mostrar" onPress={() => setVisivel(!visivel)} />
      {visivel && <Text style={styles.texto}>Texto que aparece e desaparece!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    marginTop: 20,
    fontSize: 18,
  },
});


// ## Questão 11
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ titulo, corFundo = '#f0f0f0' }) {
  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});