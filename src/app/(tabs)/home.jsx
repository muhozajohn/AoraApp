import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
images;
const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4">
          <Text className="text-sm mt-7 text-gray-100">Welcome Back</Text>
          <View className="flex-row items-center justify-between w-full">
            <Text className="text-lg font-psemibold text-gray-50">
              Jsmastery
            </Text>
            <Image
              className="w-10 h-10"
              source={images.logoSmall}
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            necessitatibus deserunt vitae. Fuga qui ea, accusantium inventore
            dicta libero ad. Dignissimos esse maxime corrupti tempora
            consectetur, officia corporis! Vel, earum!{" "}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
