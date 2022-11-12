import React from 'react';
import { View, Text, TouchableOpacity , Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity/sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
    
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {

  const navigation= useNavigation();
  return (
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Restautante', { id, imgUrl, title, rating, genre, dishes, long, lat, address ,short_description });
      }}
    
    className="bg-white mr-3 shadow">
      <Image
      source={{uri: urlFor(imgUrl).url(), }}
      className="h-36 w-64 rounded-sm"
      
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text>. {genre}</Text>

        </View>
        <View className="flex-row items-center space-x-1">
            <LocationMarkerIcon color='gray' opacity={0.4} size={22}/>
            <Text className="text-xs text-gray-500">Próximo de . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantCard;