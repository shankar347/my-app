import { useRoute } from '@react-navigation/native'
import { useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { ArrowLeftIcon, ChevronLeftIcon} from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from './index'
import {LinearGradient} from 'expo-linear-gradient'
import Castcard from './components/castcard'
import Movielist from './components/movielist'
import Loading from './loading'
import img7 from '../assets/spider.webp'
import img8 from '../assets/avengers1.jpg'
import img9 from '../assets/jus.webp'
import img1 from '../assets/author1.jpeg'
import img2 from '../assets/author2.jpeg'
import img3 from '../assets/author.jpeg'


const Moviescreen = () => {
    const params =useLocalSearchParams()
    const router=useRouter()
    const {width,height} =Dimensions.get('window')
    const [isfavourite,setisfavourite]=useState(false)
    // console.log(params)
    const ios=Platform.OS === 'ios'
   const moviename='John Wick' 
   const [cast,setcast]=useState([img1,img2,img3])
   const [Related,setrelated]=useState([img7,img8,img9])
   const [loading,setloading]=useState(false)


  return (
   <>
   {
    loading ?
    <Loading/> : 
<ScrollView 
   contentContainerStyle={{paddingBottom:20}}
   className='bg-neutral-900 flex-1 w-full'
   >
   <StatusBar style='light' /> 
   <View className='w-full'>
   <SafeAreaView className={`flex flex-row  z-20 w-full
   px-4  justify-between items-center 
   absolute
    ${ios ? '' : 'mt-8'}
   `}>
    <TouchableOpacity style={styles.background} className='rounded-xl p-1' 
    onPress={()=>router.back()}
    >
     <ChevronLeftIcon color={'white'} width={30} height={30} strokeWidth={2}/>
    </TouchableOpacity> 
    <TouchableOpacity onPress={()=>setisfavourite(!isfavourite)}>
        <HeartIcon color={isfavourite ? theme.background : 'white'} 
        width={38} height={38} />
    </TouchableOpacity>
   </SafeAreaView>
   </View>
    <View>
      <Image
       source={require('../assets/jonwick.jpg')}
       style={{
        width:width,
        height:height*0.55
       }}
      />  
      <LinearGradient 
      colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
      style={{width,height:height*0.40}}
      start={{x:0.5,y:0}}
      end={{x:0.5,y:1}}
      className='absolute bottom-0'
      />
    </View>
  
     {/* Movie details */}
   
     <View 
     style={{marginTop: -height*0.09 }}
     className={`space-y-3`}
     >
      <Text className='text-3xl font-medium text-white text-center mx-4 tracking-wider'>
       {moviename}
      </Text>
      <View 
    className='flex flex-row gap-x-2 justify-center '
    >
      <Text className='text-neutral-400 text-lg'>
        Released  •
      </Text>
      <Text className='text-neutral-400 text-lg'>
        2020  •
      </Text>
      <Text className='text-neutral-400 text-lg'>
        180 min 
      </Text>
    </View>     
    
    <View 
    className='flex flex-row gap-x-2 justify-center '
    >
      <Text className='text-neutral-400 text-lg'>
        Actions  •
      </Text>
      <Text className='text-neutral-400 text-lg'>
        Adventure  •
      </Text>
      <Text className='text-neutral-400 text-lg '>
        Love 
      </Text>
    </View>     
     <Text className='text-neutral-400 text-lg mx-2 py-4'
     >
     Centered Dot: The • symbol (bullet point) is used as a separator between the categories.
Horizontal Layout: The flex-row class arranges the items horizontally.
Spacing Between Elements: The space-x-2 class adds horizontal spacing between each element.
Text Alignment: justify-center centers the text content within the parent View.
     </Text>
     </View>
    <Text className='text-white ml-2 font-medium text-xl' 
    style={styles.text}>
     Top Cast
    </Text> 
    <ScrollView 
    showsHorizontalScrollIndicator={false} 
    horizontal
    className='mx-1 my-2 '
    >
    {
        cast?.map((item,index)=>(
           <Castcard item={item} key={index} />
        ))
    }
    </ScrollView>
     <Movielist title={'Similar Movies'} data={Related} isMoviepage={true}/>
   </ScrollView>
   }
   </>
   
  )
}

export default Moviescreen