/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const Stack = createStackNavigator();

class Time extends Component{       //컴포넌트
    render () {
        let img='';
        if (this.props.type ==='one'){
            img = require('./assets/time.jpg');
        }
        else if (this.props.type ==='two'){
            img=require('./assets/고양.jpg');
        }
        return (
            <View>
                <Image source = {img} style={{width : 200, height : 200}}/>
            </View>
        )
    }
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>메인 페이지</Text>
      <Button
        title="Profile page"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    </View>
  );
}
class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
        address : '안산'
    }
  }
  
  
  writeAddress = () => {
      this.setState({
          address : '경기도 안산'
      },function(){
      alert('변경');
      })
  }
  writeReset = () => {
          this.setState({
              address : '안산'
          })
      }
  render(){
    return (
      <View style={styles.container}>
                  <Text>Hello world </Text>
                  <Time type = 'one'> </Time>
                  <Time type = 'two' />
                  <Text> {this.state.address}</Text>
                  <Button title={'나의 주소출력'} onPress={this.writeAddress}/>
                  <Button title={'주소리셋'} onPress={this.writeReset}/>
                  
              </View>
    );
  }
}
class App extends Component{
    

    render(){                           //component쓰면 render안에 return이 와야한다?
        return (
            /*<View style={styles.container}>
                <Text>Hello world </Text>
                <Time type = 'one'> </Time>
                <Time type = 'two' />
                <Text> {this.state.address}</Text>
                <Button title={'나의 주소출력'} onPress={this.writeAddress}/>
                <Button title={'주소리셋'} onPress={this.writeReset}/>
            </View>*/
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Profile" component={Profile} />
              </Stack.Navigator>
            </NavigationContainer>
            
          );
    }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',    //세로
    alignItems:'center'     //가로
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
