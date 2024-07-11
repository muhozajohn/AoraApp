import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
const FormField = ({
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  title,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium ">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 rounded-2xl items-center flex-row focus:border-secondary">
        <TextInput
          className="flex-1 h-full  text-white text-base font-semibold"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor={`#7b7b8b`}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
