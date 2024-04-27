import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import EatsNav from "../components/EatsNav";

const FoodScreen = () => {
  const data = [
    { id: "1", icon: "beer", title: "Beer", destination: "network Street, Sydney,AU" },
    { id: "2", icon: "pizza", title: "Pizza", destination: "george Street, Sydney,AU" },
    {
      id: "3",
      icon: "fast-food-outline",
      title: "Burger",
      destination: "bridge Street, Sydney,AU",
    },
    { id: "4", icon: "beer", title: "Drink", destination: "network Street, Sydney,AU" },
    { id: "5", icon: "pizza", title: "Italian", destination: "george Street, Sydney,AU" },
    {
      id: "6",
      icon: "fast-food-outline",
      title: "Fast food",
      destination: "bridge Street, Sydney,AU",
    },
  ];

  const restaurantData = [
    {
      id: "1",
      name: "Pizza Hut",
      destination: "network Street, Sydney,AU",
      time: "15",
      image:
        "https://tb-static.uber.com/prod/image-proc/processed_images/089caef02de622d3892232904390ec7a/97ef7458dde62fa918635bc21265d9f5.jpeg",
    },
    {
      id: "2",
      name: "BWS",
      destination: "George Street, Sydney,AU",
      time: "5",
      image:
        "https://tb-static.uber.com/prod/image-proc/processed_images/0f542e500e58a04fcdf6d66899429574/a70f5c9df440d10213e93244e9eb7cad.jpeg",
    },
    {
      id: "3",
      name: "Max Burger",
      destination: "Network Place, Sydney,AU",
      time: "45",
      image:
        "https://tb-static.uber.com/prod/image-proc/processed_images/d5ef8c1d4855a967dfeb1d8b2dda623b/a70f5c9df440d10213e93244e9eb7cad.jpeg",
    },
  ];

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`px-2 bg-white`}>
      {/* nav */}
      <EatsNav data={data} />

      {/* Restaurant component */}
      <View style={tw`h-2/3`}>
        <Text style={tw`py-3`}>Additional fees may apply.</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}></View>
        <ScrollView>
          {restaurantData.map((item) => (
            <TouchableOpacity key={item.id} style={tw`flex-1 mb-5`}>
              <Image source={{ uri: item.image }} style={tw`h-48 w-full`} />
              <View style={tw`flex justify-between flex-row`}>
                <Text style={tw`font-semibold`}>{item.name}</Text>
                <Text style={tw`font-semibold`}>{item.time}min</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FoodScreen;
