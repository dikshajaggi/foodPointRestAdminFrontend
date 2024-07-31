import React, { useEffect } from 'react';
import { withExpoSnack } from 'nativewind';
import { Image, Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import logo from "../assets/foodPointLogo.png"

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex items-center justify-center h-full w-full">
      <Image source={logo} resizeMode='contain' className="h-96 w-96" />
    </View>
  );
}
export default withExpoSnack(SplashScreen);