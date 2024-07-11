import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtons from "../../components/CustomButtons";
import { Link, router } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);
  const handleSubmit = () => {
    router.push("/home");
  };
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full justify-center h-screen px-4">
          <Image
            source={images.logo}
            resizeMode="conatain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-semibold mt-10 font-psemibold text-white ">
            Sign In to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <Link
            href="#"
            className="text-base font-pmedium text-gray-100 mt-2 text-right` w-full"
          >
            <Text>Forgot Password</Text>
          </Link>
          <CustomButtons
            title="Sign In"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className=" justify-center flex-row pt-5 gap-2">
            <Text className=" text-gray-100 text-lg font-pregular ">
              Don't have Account?
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary text-lg font-psemibold "
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
