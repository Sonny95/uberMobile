import { View, Text, TouchableOpacity, ScrollView, TextInput, FlatList, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

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
  const origin = useSelector(selectOrigin);

  return (
    <SafeAreaView style={tw`px-2 bg-white`}>
      {/* customer location */}
      <View style={tw`h-1/3`}>
        <Text>Deliver now</Text>
        <View style={tw`py-2 flex flex-row items-center `}>
          <Icon type="ionicon" name="navigate-outline" style={tw`mr-1`} size={20}></Icon>
          <Text>{origin.description}</Text>
        </View>

        <View style={tw` w-full`}>
          <View style={tw`flex flex-row items-center bg-gray-200 h-10 rounded-full px-4`}>
            <Icon type="ionicon" name="search-outline" style={tw`mr-2`} />
            <TextInput style={tw`flex-1`} placeholder="Search Uber Eats" />
          </View>
          {/* menu row-scroll */}
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={tw`flex flex-row items-center`}>
              {data.map((item) => (
                <View style={tw`my-3`}>
                  <Icon type="ionicon" key={item.id} name={item.icon} size={50} style={tw`mx-5 `} />
                  <Text key={origin.id} style={tw`flex text-center mt-3`}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={tw`flex-row py-2 mt-auto border-t border-white`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("RideOptionsCard")}
              style={tw`flex justify-between flex-row bg-gray-300 w-28 px-4 py-3 rounded-full mr-2`}
            >
              <Icon name="car" type="font-awesome" color="black" size={16} />
              <Text style={tw`text-black text-center`}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex justify-between flex-row bg-gray-300 w-28 px-4 py-3 rounded-full`}
            >
              <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
              <Text style={tw`text-center`}>Pickup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Restaurant component */}
      <View style={tw`h-2/3`}>
        <Text style={tw`py-3`}>Additional fees may apply.</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}></View>
        <ScrollView>
          {restaurantData.map((item) => (
            <View key={item.id} style={tw`flex-1 mb-5`}>
              <Image source={{ uri: item.image }} style={tw`h-48 w-full`} />
              <View style={tw`flex justify-between flex-row`}>
                <Text style={tw`font-semibold`}>{item.name}</Text>
                <Text style={tw`font-semibold`}>{item.time}min</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FoodScreen;
