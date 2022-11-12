import React from 'react';
import { View, Text ,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() =>{
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="bg-[#33C3FF] flex-1 justify-center items-center">
      <Animatable.Image
      source={require("../assets/burger.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="h-56 w-56 rounded-full"
      />

       <Animatable.Text
        
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
        >
          Aguarde até o restaurante aceitar a sua encomenda
        </Animatable.Text>
        <Progress.Circle size={60} indeterminate={true} color="white" />
      </SafeAreaView>
  );
}

export default PreparingOrderScreen;
