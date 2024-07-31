import React, { useEffect } from 'react';
import { withExpoSnack } from 'nativewind';
import { Image, Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

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
      <Text className="text-slate-800 flex">
        Try editing me! 🎉
        <Link href="/home">Go to home</Link>
      </Text>
    </View>
  );
}
export default withExpoSnack(SplashScreen);