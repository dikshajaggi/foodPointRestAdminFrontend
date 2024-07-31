import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <>
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
        </>
    )
  }

export default TabIcon

const styles = StyleSheet.create({})