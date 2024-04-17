import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectDestination, selectTravelTimeInformation } from "../slices/navSlice";
import { useSelector } from "react-redux";

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

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`flex-1 `} edges={["right", "bottom", "left"]}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome"></Icon>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Pick a Ride - {travelTimeInformation?.duration.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            ></Image>
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.distance.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-au", {
                style: "currency",
                currency: "AUD",
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-500`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
