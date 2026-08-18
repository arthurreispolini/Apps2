import { View, Text, Image } from 'react-native';

export default function App() {
return (
<View >
<Text>Texto no app</Text>
<Image source={require('./miranha.jpg')} />
</View>
);
}