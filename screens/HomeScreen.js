import { useNavigation } from '@react-navigation/native';
import React , {  useEffect, useLayoutEffect, useState} from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';

import {  ChevronDownIcon, SearchIcon, AdjustmentsIcon, UserIcon} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity/sanity';
const HomeScreen = () => {
    const navigation= useNavigation();
    const [featuredCategories , setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type =="featured"]{
                ...,
                 restaurants[]->{
                  ...,
                   dishes[]->
                  
                  
                }
                
              }`
          
          ).then((data) => {
            setFeaturedCategories(data);
          });
    },[])

   
  return (
    <SafeAreaView className="bg-white pt-8">
        {/* Header */}

        <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
            <Image source={{uri: "https://links.papareact.com/wru",}} 
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"></Image>

            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Entregar Agora</Text>
                <Text className="font-bold text-xl">Localização Actual
                <ChevronDownIcon size={20} color="#33C3FF"/>
                
                </Text>
            </View>
            <UserIcon size={30} color="#33C3FF"/>
        </View>

        {/* Search */}

        <View className="flex-row space-x-2  items-center pb-2 mx-4 ">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 ">
                <SearchIcon color="gray" size={20}/>
                <TextInput placeholder='Escolha um restaurante' keyboardType='default'/>

            </View>
            <AdjustmentsIcon  color="#33C3FF"/>
        </View>


         {/* Search */}

         <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 100}}>
             {/* Categories*/}
             <Categories/>



             {/* Featured Rows*/}


             {featuredCategories?.map(category => (
                     <FeaturedRow
                    
                     id={category._id}
                     title={category.name}
                     description={category.short_description}
                     />
             ))}

        
            


         </ScrollView>




        
       
    </SafeAreaView>
  );
}

export default HomeScreen;
