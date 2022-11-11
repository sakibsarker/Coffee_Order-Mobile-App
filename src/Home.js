import { View} from 'react-native'
import React from 'react'
import Header from '../components/Header';
import Products from '../components/Products';

const Home = ({navigation}) => {

  return (
    <View>
        <Header/>
        <Products navigation={navigation}/>
    </View>
  )}
export default Home;