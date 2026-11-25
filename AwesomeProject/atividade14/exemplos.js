// EXEMPLO 1
// import { useCameraPermissions } from 'expo-camera';
// import { Button, Linking, Text, View } from 'react-native';

// export function ComPermissao({ children }) {
//   const [permission, requestPermission] = useCameraPermissions();
//   if (!permission) return null; // carregando
//   if (permission.granted) return children; // liberado
//   return (
//     <View>
//       <Text>Precisamos da câmera para ler o QR Code.</Text>
//       {permission.canAskAgain
//         ? <Button title="Permitir" onPress={requestPermission} />
//         : <Button title="Abrir ajustes"
//             onPress={() => Linking.openSettings()} />}
//     </View>
//   );
// }


// EXEMPLO 2
// import * as Notifications from 'expo-notifications';
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowBanner: true, shouldShowList: true,
//     shouldPlaySound: true, shouldSetBadge: false,
//   }),
// });
// export async function agendarLembrete() {
//   await Notifications.setNotificationChannelAsync('default', {
//     name: 'Lembretes',
//     importance: Notifications.AndroidImportance.HIGH,
//   });
//   const { status } = await Notifications.requestPermissionsAsync();
//   if (status !== 'granted') return;

//   await Notifications.scheduleNotificationAsync({
//     content: { title: 'Hora de estudar', body: 'Revise o módulo 2.' },
//     trigger: { type: 'timeInterval', seconds: 5 },
//   });
// }


// EXEMPLO 3 
// import * as Notifications from 'expo-notifications';
// import * as Device from 'expo-device';
// import Constants from 'expo-constants';

// if (!Device.isDevice) return;
// const projectId = Constants.expoConfig?.extra?.eas?.projectId;
// const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId });
// // token = "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]"


// EXEMPLO 4
// await fetch('https://exp.host/--/api/v2/push/send', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     to: token,
//     title: 'Pedido enviado', body: 'Chega amanhã',
//     data: { url: '/pedidos/42' },
//   }),
// });

// EXEMPLO 5 
// import { useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import { router } from 'expo-router';

// export function useNotificacoes() {
//   useEffect(() => {
//     const recebida = Notifications.addNotificationReceivedListener(
//       (n) => console.log('Chegou:', n.request.content.title)
//     );
//     const tocada = Notifications.addNotificationResponseReceivedListener(
//       (resposta) => {
//         const { url } = resposta.notification.request.content.data;
//         if (url) router.push(url); // abre a tela certa
//       }
//     );
//     return () => { recebida.remove(); tocada.remove(); }; // limpeza
//   }, []);
// }

// EXEMPLO 6 
// import { CameraView, useCameraPermissions } from 'expo-camera';
// import { useRef, useState } from 'react';
// import { Button, Image, View } from 'react-native';

// export default function Camera() {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [foto, setFoto] = useState(null);
//   const camera = useRef(null);

//   if (!permission?.granted)
//     return <Button title="Permitir câmera" onPress={requestPermission} />;

//   async function tirarFoto() {
//     const { uri } = await camera.current.takePictureAsync({ quality: 0.7 });
//     setFoto(uri);
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <CameraView ref={camera} style={{ flex: 1 }} facing="back" />
//       <Button title="Tirar foto" onPress={tirarFoto} />
//       {foto && <Image source={{ uri: foto }} style={{ height: 160 }} />}
//     </View>
//   );
// }

// EXEMPLO 7 
// // imports iguais ao exemplo da câmera, mais Text
// import { CameraView, useCameraPermissions } from 'expo-camera';
// import { useState } from 'react';
// import { Button, Text, View } from 'react-native';

// export default function LeitorQR() {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [lido, setLido] = useState(null);

//   if (!permission?.granted)
//     return <Button title="Permitir câmera" onPress={requestPermission} />;

//   return (
//     <View style={{ flex: 1 }}>
//       <CameraView
//         style={{ flex: 1 }}
//         barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
//         onBarcodeScanned={lido ? undefined : ({ data }) => setLido(data)}
//       />
//       {lido && <Text>Conteúdo: {lido}</Text>}
//       {lido && <Button title="Ler outro" onPress={() => setLido(null)} />}
//     </View>
//   );
// }


// EXEMPLO 8
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Linking, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Mapa() {
  const [posicao, setPosicao] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErro('Precisamos da sua localização para mostrar o mapa.');
          return;
        }
        const { coords } = await Location.getCurrentPositionAsync();
        setPosicao({ latitude: coords.latitude, longitude: coords.longitude });
      } catch (e) {
        setErro('Não foi possível obter sua posição. Verifique se o GPS está ligado.');
      }
    })();
  }, []);

  if (erro)
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
        <Text>{erro}</Text>
        <Button title="Abrir ajustes" onPress={() => Linking.openSettings()} />
      </View>
    );

  if (!posicao) return <ActivityIndicator />;

  return (
    <MapView
      style={{ flex: 1 }}
      showsUserLocation
      initialRegion={{ ...posicao, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
    >
      <Marker coordinate={posicao} title="Você está aqui" />
    </MapView>
  );
}