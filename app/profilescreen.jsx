import React, { useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { styles } from './index'
import { HeartIcon } from 'react-native-heroicons/solid'
import Movielist from './components/movielist'
import { useRouter } from 'expo-router'
import './index.css'
import Loading from './loading'

const Profilescreen = () => {
  
   const [isliked,setisliked]=useState(false)
   const {width,height}=Dimensions.get('window')
   const [movies,setmovies]=useState([1,2,3,4,5])
   const router=useRouter()
   const [loading,setloading]=useState(false)
  
  return (
   <>
   {
      loading ? 
      <Loading/> : 
      <View className='flex-1 bg-neutral-900' >
      <ScrollView>
      <SafeAreaView className='flex flex-row mt-8 mx-4 justify-between'>
        <TouchableOpacity style={styles.background} 
        onPress={()=>router.back()}
        className='p-1 rounded-lg' >
         <ChevronLeftIcon color={'white'} strokeWidth={'2'} 
          width={30}
          height={30}
          />
         </TouchableOpacity> 
         <TouchableOpacity onPress={()=>setisliked(!isliked)} >
         <HeartIcon color={isliked ? 'red': 'white'} strokeWidth={'2'} 
         width={38}
         height={38}
         />
         </TouchableOpacity> 
      </SafeAreaView>  

      <View className='space-y-2 w-full items-center mt-20'>
   <View style={{
   }} className='flex-row justify-center '>
 <View 
  style={{
        width: width*0.61,
        height:height*0.29,
        borderRadius: 9999,
        elevation: 45,            
        shadowColor: 'blue',      
        shadowOpacity: 0.5,        
        shadowOffset: { width: 0, height: 4 }, 
        shadowRadius: 5,           
      }} 
      className='border-2 border-neutral-400  box-shadow-2
      oveflow-hidden items-center image rounded-full'>
    <Image 
      style={{
        width: width*0.6,
        height:height*0.28
      }}
      source={require('../assets/author.jpeg')}
      className='rounded-full '
     />
    </View>
   </View>
     <Text className='text-white text-2xl font-medium'>
     Robert Downey JR
     </Text> 
      <Text className='text-neutral-500 text-lg mb-2'>
        New York • United States
      </Text>

      <View 
      className='flex flex-row bg-neutral-600 
      gap-x-2 
      rounded-full px-4 py-1'
      >
     <View className='items-center pr-4'>
     <Text className='text-white text-lg'>
       Gender
      </Text>  
      <Text className='text-lg text-neutral-400'>
         Male
      </Text>
     </View> 
     <View className='w-[1px] rounded  h-12 m-auto bg-neutral-400'>
     </View>
     <View className='items-center px-3'>
     <Text className='text-white text-lg'>
       D.O.B
      </Text>  
      <Text className='text-lg text-neutral-400'>
       18/10/2005
      </Text>
     </View>
     <View className='w-[1px] rounded h-12 m-auto bg-neutral-400'>
     </View> 
     <View className='items-center pl-4 pr-1'>
     <Text className='text-white text-lg'>
       Nationality
      </Text>  
      <Text className='text-lg text-neutral-400'>
         American
      </Text>
     </View> 
      </View>
     </View>
     <Text className='text-xl ml-2 mt-4 font-medium ' 
     style={styles.text}>
      Biography
     </Text>
     <Text className='text-lg mx-2 text-neutral-500 mt-2'>
     Incorrect View Usage: The View component wraps around the Stack, but Stack should not be placed inside a View component without being properly nested with flex: 1 styles, as the View can cause layout issues, such as preventing the Stack from rendering correctly.
Stack Needs to Be a Child of a Layout Component: Stack is used to render your navigational screens. To allow it to work properly, you should ensure it's rendered directly as the main content in the layout, without unnecessary wrappers that can cause layout issues.
     </Text>
     <Movielist title={'Movies'} data={movies} isMoviepage={true} />
      </ScrollView> 
     </View>     
   }
   </>
  
  )
}

export default Profilescreen