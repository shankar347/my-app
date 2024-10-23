import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

const Searchcard = ({item}) => {
 
    const {width,height} =Dimensions.get('window')
    const moviename='Avengers End game'
    return (
   <View className='space-y-2 mr-7 mb-5'>
    <Image 
    source={require('../../assets/avengers.jpg')}
    style={{
        width:width * 0.4,
        height:height * 0.23
    }}
    className='rounded-xl'
     
     />
     <Text className='text-white text-center text-lg'>
       {moviename.length > 15 ? moviename.slice(0,15) + '...' : moviename }
    </Text>
   </View>
  )
}

export default Searchcard