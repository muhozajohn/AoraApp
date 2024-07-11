import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import CustomButtons from "../components/CustomButtons";

const App = () => {
  return (
    <SafeAreaView className=" h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh]  px-4 justify-center items-center">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-full max-w-[380px] h-[300px]"
            resizeMode="contain"
          />

          <View className=" relative mt-5 ">
            <Text className="text-3xl text-white text-center font-bold ">
              Discover Endless Posibilities With{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8 "
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-medium mt-7 text-gray-100 text-center ">
            Where Creativity Meeats Innovation: Emback on a Jouney of Limitless
            Exploration With Aora
          </Text>
          <CustomButtons
            title="Continue With Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="mt-7 w-full"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
