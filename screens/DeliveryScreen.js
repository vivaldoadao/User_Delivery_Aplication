import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { XIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import * as Progress from 'react-native-progress';
import MapView ,{Marker} from 'react-native-maps';


const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
  

    
  return (
    <View className="bg-[#33C3FF] flex-1 ">
      <SafeAreaView className="z-50">
            <View className="flex-row justify-between item-center p-5">
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XIcon color="white" size={30} />
                </TouchableOpacity>
                <Text className="font-light text-white text-lg">Ajuda</Text>
            </View>

            <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                <View className="flex-row justify-between">
                        <View >
                            <Text className="text-lg text-gray-400">Estimativa de Chegada</Text>
                            <Text className="text-4xl font-bold">45-55 Minutos</Text>
                        </View>
                        <Image
                        source={{uri: "https://links.papareact.com/fls",}}
                        className="h-20 w-20"/>
                </View>
                <Progress.Bar size={30} color="#33C3FF" indeterminate={true}/>
                <Text className="mt-3 text-gray-500">A sua encomenda no restaurante <Text className=" text-[#33C3FF]">{restaurant.title}</Text>  esta a ser preparado</Text>
            </View>
      </SafeAreaView>
      <MapView initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      className="flex-1 -mt-10 z-0"
      mapType='terrain'
      
      >

        <Marker
        coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
        }}
        title={restaurant.title}
        description={restaurant.short_description}
        identifier="origin"
        pinColor='#33C3FF'
        
        >

        </Marker>

      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
            source={{
                uri: "https://links.papareact.com/wru"
            }}
            className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
            <Text className="text-lg">
                Vidão adão
            </Text>
            <Text className="text-gray-400">Seu entregador</Text>
        </View>
        <Text className="text-[#33C3FF] text-lg  mr-5 font-bold">Ligar</Text>
      </SafeAreaView>
    </View>
  );
}

export default DeliveryScreen;
