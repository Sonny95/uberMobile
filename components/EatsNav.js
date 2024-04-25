import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const EatsNav = ({ data }) => {
  const origin = useSelector(selectOrigin);
  return (
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
  );
};

export default EatsNav;
