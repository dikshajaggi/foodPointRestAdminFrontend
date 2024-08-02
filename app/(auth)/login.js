import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import React,  {useState} from 'react'
import bg from "../../assets/bg/loginBg.jpg"
import CustomButton from '../../components/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormInput from '../../components/FormInput'

const login = () => {

  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)

  const handleEmail = () => {}
  const handlePassword = () => {}
  
  return (
      <View className="h-full w-full">
         <View className="h-1/2 w-full">
          <ImageBackground source={bg} resizeMode='cover' className="h-full w-full justify-center items-center">
          <Text className="text-lg font-bold text-white">Partner with FoodPoint!</Text>
          </ImageBackground>
        </View>
        <View className="h-1/2 px-4">
          <FormInput placeholder="enter email" fieldName = "login" label = "enter email" handleChange= {handleEmail} value={email} />
          <FormInput placeholder="enter password" fieldName = "password" label = "enter password" handleChange= {handlePassword} value={pass} />
          <CustomButton text="Login" isLoading = {false} />
        </View>
      </View>
  )
}

export default login
