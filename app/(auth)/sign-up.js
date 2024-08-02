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
            <FormInput placeholder="enter username" fieldName = "login" label = "enter username" handleChange= {(e) => setForm({...prev, username: e})} value={form.username} />
            <FormInput placeholder="enter email" fieldName = "login" label = "enter email" handleChange= {(e) => setForm({...prev, email: e})} value={form.email} />
            <FormInput placeholder="enter password" fieldName = "password" label = "enter password" handleChange= {(e) => setForm({...prev, password: e})} value={form.password} />
            <CustomButton text="SignUp" isLoading = {false} />
          </View>
        </View>
    )
}

export default signup

const styles = StyleSheet.create({})