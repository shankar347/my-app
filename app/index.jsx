
import React, { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import TrendingMovies from './components/trendingMovies'
import { useRouter } from 'expo-router'
import Movielist from './components/movielist'
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { StatusBar } from 'expo-status-bar'
import './index.css'
import Loading from './loading'
import img1 from '../assets/jonwick.jpg'
import img2 from '../assets/avengers.jpg'
import img3 from '../assets/curice.jpg'
import img4 from '../assets/ironman2.jpg'
import img5 from '../assets/jurasic.jpg'
import img6 from '../assets/spiderman3.jpg'
import img7 from '../assets/spider.webp'
import img8 from '../assets/avengers1.jpg'
import img9 from '../assets/jus.webp'





export const theme={
  text:'#eab308',
  background:'#eab308'
}

export const styles={
  text:{
      color:theme.text
  },
  background:{
      backgroundColor:theme.background
  }
}


const HomeScreen = () => {
  
    const [movies,setemovies]=useState([img1,img2,img3])
    const [upcoming,setupcoming]=useState([img4,img5,img6])
    const [toprated,settoprated]=useState([img7,img8,img9])
    const [loading,setloading]=useState(false)
    const router=useRouter()   
// console.log('upcoming',movies)
 
    return (
    <>
   {
    loading ? 
    <Loading /> : 
    <View 
     className='flex-1 bg-neutral-800' 
       >
   <SafeAreaView className='mt-8' >
   <View className='justify-between flex-row items-center mx-4'>
   <Bars3CenterLeftIcon size={'30'} color={'white'} strokeWidth={2} />
   <Text className=' text-white  text-3xl font-bold'>
      <Text style={styles.text}>
        M
      </Text>ovies
    </Text>
   <TouchableOpacity onPress={()=>router.push('searchscreen')} >
   <MagnifyingGlassIcon color={'white'} size={'30'} strokeWidth={2} />
   </TouchableOpacity>
   </View> 
    </SafeAreaView>   
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:10}}
    >
   <TrendingMovies data={movies} />
   <Movielist title={'Upcoming'} data={movies} />
   <Movielist title={'Top Rated'}  data={movies} />
    </ScrollView>
    </View>
    }
    </>
  )
}

export default HomeScreen