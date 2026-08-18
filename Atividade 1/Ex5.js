import { StyleSheet,View, Text, Image } from 'react-native';

export default function App() {
   
return (
    <view>

<Image
source={{ uri: 'https://site.com/foto.png' }}
style={{ width: 100, height: 100 }}
/>
<Image source={require('./miranha.png')} />
</view>
);
}