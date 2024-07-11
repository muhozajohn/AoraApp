import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { Link } from "expo-router";
import CustomButtons from "../../components/CustomButtons";
images;
const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {};
  return (
    <SafeAreaView className=" bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center h-screen px-4">
          <Image
            source={images.logo}
            resizeMode="conatain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-semibold mt-10 font-psemibold text-white ">
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={`mt-7`}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={`mt-7`}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={`mt-7`}
            keyboardType="email-address"
          />
          <CustomButtons
            title="Sign Up"
            containerStyles={`mt-7`}
            handlePress={handleSubmit}
          />
          <View className=" justify-center flex-row pt-5 gap-2">
            <Text className=" text-gray-100 text-lg font-pregular ">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-secondary text-lg font-psemibold "
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
