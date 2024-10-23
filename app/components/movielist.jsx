import React from 'react'
import { Dimensions, Image, Pressable, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from '../index'
import { useRouter } from 'expo-router'


const Movielist = ({data,title,isMoviepage}) => {
 
  const moviename='Avengers End game' 
  var {width,height} =Dimensions.get('window')
  const router=useRouter()
  console.log(data,'data')

  return (
   <View className='flex flex-col' >
  <View className='flex-row mt-2 px-2 w-full justify-between items-center'>
     <Text className='text-white text-xl '>
        {title}
     </Text>
    {
      !isMoviepage &&
      <Pressable>
      <Text  style={styles.text} className='text-xl' >
          See All
       </Text>
      </Pressable>
    }
    </View>
    <ScrollView 
    className='my-3 mx-2'
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingHorizontal:'15'}}
    >
    {
      data?.map((item,index)=>(
      
        <TouchableWithoutFeedback  
        key={index}
        onPress={()=>router.push('moviescreen',item)}
        >
  <View 
      className='flex flex-col gap-2 space-y-2 px-2'
        >
        <Image 
          source={item}
          style={{
            width: width*0.4 ,
            height: height*0.22}}
          className='rounded-lg'
        />
        <Text 
  className='text-lg  text-center text-white'
  >
  {moviename.length > 15 ? moviename.slice(0,15) + '...' : moviename} 
  </Text>
       </View>
        </TouchableWithoutFeedback>
      
      ))
    }
    </ScrollView>
   </View>
  )
}

export default Movielist