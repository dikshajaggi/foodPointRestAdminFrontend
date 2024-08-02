import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import React,  {useState} from 'react'
import bg from "../../assets/bg/loginBg.jpg"
import CustomButton from '../../components/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormInput from '../../components/FormInput'

const login = () => {

 const [form, setForm] = useState({
  email: "",
  password: ""
 })
  
  return (
      <View className="h-full w-full">
         <View className="h-1/2 w-full">
          <ImageBackground source={bg} resizeMode='cover' className="h-full w-full justify-center items-center">
          <Text className="text-lg font-bold text-white">Partner with FoodPoint!</Text>
          </ImageBackground>
        </View>
        <View className="h-1/2 px-4">
          <FormInput 
            placeholder="enter email" 
            fieldName = "login" 
            label = "enter email" 
            handleChange= {(e) => setForm({...form, email: e})} 
            value={form.email} 
            otherStyles = "mt-7"
          />
          <FormInput 
            placeholder="enter password" 
            fieldName = "password" 
            label = "enter password" 
            handleChange= {(e) => setForm({...form, password: e})} 
            value={form.password} 
            otherStyles = "mt-7"
          />
          <CustomButton text="Login" isLoading = {false} otherStyles = "mt-7" />
        </View>
      </View>
  )
}

export default login
