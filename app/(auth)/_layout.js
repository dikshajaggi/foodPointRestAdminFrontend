import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const authLayout = () => {
  return (
    <View className="flex justify-center items-center h-full">
      <Slot />
    </View>
  )
}

export default authLayout

const styles = StyleSheet.create({})