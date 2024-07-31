import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const login = () => {
  return (
    <View className="flex justify-center items-center h-full w-full">
      <Text>helloo loginnn</Text>
      <Link href="/home">Go to home</Link>
    </View>
  )
}

export default login
