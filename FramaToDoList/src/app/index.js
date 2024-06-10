import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Link} from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
            source={require("../assets/avatar.png")}
            style={styles.image}
         />
      </View>
      <View style={styles.content}>
         <Text style={styles.title}>𝓕𝓻𝓪𝓶𝓪 𝓣𝓸 𝓓𝓸 𝓛𝓲𝓼𝓽</Text>
         <Text style={styles.text}>Monte sua lista de tarefas e tenha um melhor controle da sua rotina!! </Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor='#D9B0B7' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9B0B7',
  },
  imagecontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image :{
    width:230,
    height:230,
    borderRadius:115,
    resizeMode:'cover',
  },
  content: {
    flex: 1,
    backgroundColor: "#dadada",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  text:{
    color: 'gray',
    fontSize:16,
    textAlign: 'center'
  },
  button:{
    position:'absolute',
    backgroundColor:'#D9B0B7',
    borderRadius: 50,
    bottom:'15%',
    paddingVertical:15,
    width:'60%',
    alignSelf:'center',
    textAlign:'center',
  },
  buttonText:{
    color:'#fff',
    fontSize: 22,
    fontWeight:'bold',
  },
});
