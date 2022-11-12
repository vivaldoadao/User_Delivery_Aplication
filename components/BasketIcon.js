import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="mx-5 bg-[#33C3FF] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#62ABED] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">Ver cesta</Text>
        <Text className="text-lg text-white font-extrabold">{basketTotal},00 Kz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
