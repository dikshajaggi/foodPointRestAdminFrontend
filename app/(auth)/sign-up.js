import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const signup = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
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
              placeholder="enter username" 
              fieldName = "login" 
              label = "enter username" 
              handleChange= {(e) => setForm({...form, username: e})} 
              value={form.username} 
              otherStyles = "mt-7"
            />
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
            <CustomButton text="SignUp" isLoading = {false} otherStyles = "mt-7" />
          </View>
        </View>
    )
}

export default signup

const styles = StyleSheet.create({})