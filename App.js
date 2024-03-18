import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Agrupador from './src/components/Agrupador/Agrupador';
import trindadeLogo from './src/components/ImageTimes/trindade.png';
import chapecoenseLogo from './src/components/ImageTimes/chapecoense.png';

export default function App() {
 let times = [
    {
      logos: <Image source={trindadeLogo} style={{ width: 100, height: 100 }} />,
      time: 'Trindade',
      conquista: 'Copa'
    },
    {
      logos: <Image source={chapecoenseLogo} style={{ width: 100, height: 100 }} />,
      time: 'Chapecoense',
      conquista: 'asass' 
    }
 ];

 return (
    <View style={styles.container}>
      {times.map((time) => (
        <Agrupador logo={time.logos} time={time.time} façanha={time.conquista} styles={styles.item} />
      ))}
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
 },
 item: {
    margin: 10,
 },
 

});



