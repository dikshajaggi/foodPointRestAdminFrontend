import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({text, isLoading}) => {
  return (
    <TouchableOpacity  
        activeOpacity={0.7}
        className={`bg-orange-500 rounded-xl min-h-[62px] flex flex-row justify-center items-center ${
        isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
    >
        <Text className={`text-primary font-psemibold text-lg text-white`}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton