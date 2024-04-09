import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Text>Here's map stuff</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          {/* <Stack.Screen
            name="RideOptionscard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen> */}
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
