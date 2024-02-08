import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.aa}>SEP</Text>
      <Text style={styles.abc}>Sociedade Esportiva PalmeiraS, conhecida popularmente como Palmeiras, é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado em 26 de agosto de 1914 e suas cores, presentes no escudo e bandeira oficial, são o verde e branco.</Text>
       <Text style={styles.ultimo}>Sociedade Esportiva Palmeiras</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  abc: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
  },
  aa: {
    flex: 1,
    border: '1px solid red',
    backgroundColor: '#ff3',
    fontSize: '50px',
   
   
  },
  ultimo: {
    flex: 1,
    border: '1px solid green',
    backgroundColor: '#ff3',
    
    marginTop: '100px',
  },
  
  
});
