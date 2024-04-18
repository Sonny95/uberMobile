import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const FoodScreen = () => {
  const data = [
    { id: "1", icon: "beer", title: "Beer" },
    { id: "2", icon: "pizza", title: "Pizza" },
    { id: "3", icon: "fast-food-outline", title: "Burger" },
  ];

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {data.map((item) => (
        <Icon type="ionicon" key={item.id} name={item.icon} /> // Icon 컴포넌트에 name 속성으로 아이콘 이름을 전달합니다.
      ))}
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
