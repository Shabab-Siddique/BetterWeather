import React from 'react';
//import react in our code. 
import { View, Text, ImageBackground, StyleSheet, Image, TextInput, Button } from 'react-native';
//import all the components we are going to use. 
 
export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'https://i.gyazo.com/37070b0ff31fd40d1effc1087dbae554.png',
        }}

        >
		<View style={{padding: 10}}>
  <View 
    style={{padding: 5}}>
     <View style ={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      <TextInput 
    placeholder ="Location 1" 
    style = {{width: '80%', borderColor: 'black', borderWidth: 1, padding: 10}}/>
	<TextInput 
    placeholder ="Location 2" 
    style = {{width: '80%', borderColor: 'black', borderWidth: 1, padding: 10}}/>
    </View>
  </View>
  
  <View style={{padding: 10, flexDirection: 'row'}}>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.cityTitles}>Chandler</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '20%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text>Day</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.cityTitles}>Tempe</Text>
  </View>
  </View>
  
  {/* MONDAY */}
  <View style={{padding: 0, flexDirection: 'row'}}>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>98 °F</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '20%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text>M</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>92 °F</Text>
  </View>
  </View>
  
  {/* TUESDAY */}
  <View style={{padding: 0, flexDirection: 'row'}}>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>90 °F</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '20%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text>T</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>89 °F</Text>
  </View>
  </View>
  
  {/* WEDNESDAY */}
  <View style={{padding: 0, flexDirection: 'row'}}>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>88 °F</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '20%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text>W</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>93 °F</Text>
  </View>
  </View>
  
  {/* THURSDAY */}
  <View style={{padding: 0, flexDirection: 'row'}}>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>93 °F</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '20%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text>Th</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>91 °F</Text>
  </View>
  </View>
  
  {/* FRIDAY */}
  <View style={{padding: 0, flexDirection: 'row'}}>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>89 °F</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '20%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text>F</Text>
  </View>
  <View
    style = {{
      backgroundColor: '',
      width: '40%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text style={styles.temp}>87 °F</Text>
  </View>
  </View>
  
  </View>
		
		
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  TextStyle: {
    color: '#0250a3',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
  cityTitles: {
	 fontSize: 30,
	 alignItems: 'center',
	 color: "#FFFFFF",
  },
   temp: {
	 fontSize: 20,
	 alignItems: 'center',
	 color: "#FFFFFF",
  },
  
});



