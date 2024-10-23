import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LockClosedIcon, MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline'
import Searchcard from './components/searchcard'
import Loading from './loading'

const Searchscreen = () => {
  const router=useRouter()  
  const [results,setresults]=useState([1,2,3,4,5])
  const {width,height} =Dimensions.get('window')
  const [loading,setloading]=useState(false)

  return (
    <>
    {
        loading ? <Loading/> :
        <View className='flex-1 bg-neutral-900'>
        <StatusBar style='light' />
        <SafeAreaView className='mt-12' >
         <View className='w-[90%] mx-auto h-14 
         border-2 border-gray-500 rounded-full
         flex flex-row bg-neutral-500 items-center' >
         <TextInput placeholder='Search Movie'
         placeholderTextColor={'lightgray'} 
          className='w-[90%] pl-5 h-full text-white text-lg' style={{color:'white'}} />
         <TouchableOpacity onPress={()=>router.back()} >
       <XMarkIcon color={'white'} size={'30'} strokeWidth={2} />
       </TouchableOpacity>
         </View>
        </SafeAreaView>
        <Text className='text-white text-lg pt-5 pl-5'>
          Results (0)
        </Text>
       {
        results?.length === 0 ?
        <ScrollView>
        <View className='flex flex-row mx-0 ml-5 my-3  flex-wrap' >
    {
      results?.map((item,index)=>(
        <Searchcard item={item} key={index} /> 
      ))
    }
    </View>
    </ScrollView> : <View className='items-center ' >
        <Image source={require('../assets/error.png')}
         style={{
            width:width*0.98,
            height:height*0.5
         }}
         />
        <Text className='text-white text-xl font-medium ' >
            No Matches Found
        </Text>
        </View>
       }
       </View>
    }
    </>
   
  )
}

export default Searchscreen