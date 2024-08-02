import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const FormInput = ({placeholder, fieldName, label, handleChange, value}) => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2`}>
      <Text className="text-base font-pmedium">{label}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput   
            className="flex-1 text-black font-psemibold text-base"
            value = {value}
            placeholder={placeholder} 
            placeholderTextColor="#7B7B8B"
            onChangeText={handleChange}
            secureTextEntry={fieldName === "password" && !showPassword}
        />
      </View>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({})