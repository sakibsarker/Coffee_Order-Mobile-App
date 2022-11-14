import {View,} from "react-native";
import React from "react";
import ProductsCard from "../components/ProductsCard";
import AutomationCard from "../components/AutomationCard";
const Home = ({ navigation }) => {
  
  return (
    <>
    <ProductsCard navigation={navigation}/>
    {/* <AutomationCard navigation={navigation}/> */}
    </>

  
  )}

export default Home;
