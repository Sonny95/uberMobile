import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
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

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <SafeAreaView style={tw`bg-gray-400 px-2`}>
      {/* customer location */}
      <View style={tw`h-1/3 bg-yellow-200`}>
        <Text>Deliver now</Text>
        <View style={tw`py-2 flex flex-row items-center `}>
          <Icon type="ionicon" name="navigate-outline" style={tw`mr-1`} size={20}></Icon>
          <Text>{origin.description}</Text>
        </View>

        <View style={tw`bg-gray-200 w-full`}>
          <View style={tw`flex flex-row items-center bg-white h-10 rounded-full px-4`}>
            <Icon type="ionicon" name="search-outline" style={tw`mr-2`} />
            <TextInput style={tw`flex-1`} placeholder="Search Uber Eats" />
          </View>

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
        </View>
      </View>
      <View style={tw`h-2/3 bg-blue-200`}>
        <Text>sd</Text>
      </View>
    </SafeAreaView>
    // <View>
    //   <TouchableOpacity
    //     onPress={() => navigation.navigate("HomeScreen")}
    //     style={tw`absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}
    //   >
    //     <Icon name="menu" />
    //   </TouchableOpacity>
    //   <View style={tw`h-1/2`}>{/* <Map /> */}</View>
    //   <View style={tw`h-1/2`}>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="NavigateCard"
    //         component={NavigateCard}
    //         options={{
    //           headerShown: false,
    //         }}
    //       ></Stack.Screen>
    //       {/* after type the address */}
    //       <Stack.Screen
    //         name="RideOptionsCard"
    //         component={RideOptionsCard}
    //         options={{
    //           headerShown: false,
    //         }}
    //       ></Stack.Screen>
    //     </Stack.Navigator>
    //   </View>
    // </View>
  );
};

export default FoodScreen;
