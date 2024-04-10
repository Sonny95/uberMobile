import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

//multiplier = price
const data = [
  { id: "uber-CYJ59X", title: "Uber X", multiplier: 1, image: "https://links.papareact.com/3pn" },
  {
    id: "uber-AWS10Y",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "uber-QME95Z",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`} edges={["right", "bottom", "left"]}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome"></Icon>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Pick a ride</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity style={tw`flex-row items-center justify-between`}>
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            ></Image>
            <View>
              <Text>{title}</Text>
              <Text>Travel Time</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;
