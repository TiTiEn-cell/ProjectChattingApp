import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  ImageBackground, 
  Dimensions,
  TextInput,
  TouchableOpacity } from 'react-native';

export default function DangKy({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('../imgs/BackGround.jpg')}
      resizeMode='stretch'
      style = {styles.Background}
      >
        <Image
        source={require('../imgs/Talks.jpg')}
        style = {{
          width: 50,
          height: 50,
          borderRadius: 50,
          position: 'absolute',
          top: 50,
        }}
        />
        <View style = {styles.ViewSignUp}>
          <Text style = {styles.LabelSignUp}>
            Sign up
          </Text>

          <TextInput
          style = {styles.TextInput}
          placeholder='E-mail Address'
          placeholderTextColor='grey'
          />
          <TextInput
          style = {styles.TextInput}
          placeholder='Password'
          placeholderTextColor='grey'
          secureTextEntry
          />
          <TextInput
          style = {styles.TextInput}
          placeholder='Retype password'
          placeholderTextColor='grey'
          secureTextEntry
          />

          <TouchableOpacity style = {styles.ButtonLogin}>
            <ImageBackground
            source={require('../imgs/BackgroundButtonLogin.jpg')}
            resizeMode='stretch'
            style = {styles.ImageButtonLogin}
            >
            <Text style = {styles.LabelLogin}>
            Login
            </Text>
            </ImageBackground>
          </TouchableOpacity>
          
            <View style = {{flexDirection: 'row', marginTop: 20,}}>
              <Text style = {{
                fontSize: 12,
                fontFamily: 'Brygada1918-Regular'
              }}>
              Already have an account? 
              </Text>

              <TouchableOpacity style = {{
                fontSize: 12,
                fontFamily: 'Brygada1918-Regular',
                fontWeight: 'bold',
                marginLeft: 5,
              }}
              onPress={()=>{navigation.navigate('DangNhap')}}
              >
              Login
              </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Background:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewSignUp:{
    width: 300,
    height: 380,
    borderRadius: 38,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LabelSignUp:{
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Brygada1918-Bold',
  },
  TextInput:{
    fontSize: 15,
    fontFamily: 'Brygada1918-Regular',
    borderBottomWidth: 1,
    borderColor: '#DB00FF',
    borderRadius: 10,
    width: 260,
    height: 40,
    paddingLeft: 10,
    marginTop: 20,
  },
  ButtonLogin:{
    borderWidth: 1,
    width: 150,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  ImageButtonLogin:{
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  LabelLogin:{
    fontFamily: 'Brygada1918-Regular',
    fontSize: 15,
    color: 'white',
  },
});
