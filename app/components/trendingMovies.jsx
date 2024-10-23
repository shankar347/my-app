import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Moviecard from './moviecard'
import Carousel from 'react-native-reanimated-carousel';

var {width,height} =Dimensions.get('window')

const TrendingMovies = ({data}) => {
//   console.log(data)
    return (
   <View className='mb-7' >
   <Text className='text-gray-300 font-bold text-xl mx-4 mt-4 mb-4'>
      Trending
   </Text>
   <Carousel
      // loop
      width={width}
      height={height*0.4}
      autoPlay={true}
      data={data}
      style={{display:'flex' ,alignItems:'center' ,justifyContent:'center'}}
      scrollAnimationDuration={1000}
      renderItem={({ item }) => (
      <Moviecard data={item} width={0.6} height={0.4} /> 
      )}
    />
   </View>
  )
}

export default TrendingMovies