import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/outline';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { selectRestaurant } from '../features/restaurantSlice';
import { urlFor } from '../sanity/sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  useEffect(()=>{
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
     
    },{});
    setGroupedItemsInBasket(groupedItems);
  },[items]);

 




  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="p-5 border-b border-[#33C3FF] bg-white shadow-xs">

                <View>
                    <Text className="text-lg font-bold text-center pt-7">Cesto</Text>
                    <Text className="text-center text-gray-400">{restaurant.title}</Text>
                </View>

                <TouchableOpacity onPress={navigation.goBack} className="rounded-full absolute top-2 right-5 p-9">
                    <XCircleIcon color="#33C3FF" height={50} width={50}/>
                </TouchableOpacity>
              
            </View> 
            <View className="flex-row item-center space-x-4 px-4 py-3 bg-white my-5">
              <Image
              source={{
                uri: "https://links.papareact.com/wru"
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
              />
              <Text className="flex-1">Entrega em 30-45 minutos</Text>
              <TouchableOpacity>
                <Text className="text-[#33C3FF]">Mudar</Text>
              </TouchableOpacity>
            </View>

            <ScrollView className="divide-y divide-gray-200">
              {Object.entries(groupedItemsInBasket).map(([key,items]) =>(
                <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                  <Text className="text-[#33C3FF]">{items.length} x </Text>
                  <Image 
                    source={{uri : urlFor(items[0]?.image).url()}}
                    className="h-12 w-12 rounded-full"
                  
                  />
                  <Text className="flex-1">{items[0]?.name}</Text>
                  <Text className="text-gray-600">{items[0]?.price},00 Kz</Text>
                  <TouchableOpacity>
                    <Text className="text-[#33C3FF] text-xs" onPress={() => dispatch(removeFromBasket({id:key}))}>
                      Remover
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">{basketTotal},00 Kz</Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Taxa de Entrega</Text>
                    <Text className="text-gray-400">1000,00 Kz</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="">Total</Text>
                    <Text className="font-extrabold">{basketTotal + 1000} Kz</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} className="rounded-lg bg-[#33C3FF] p-4">
                    <Text className="text-center text-white text-lg font-bold">Encomendar</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    </SafeAreaView>
  );
}

export default BasketScreen;
