import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from 'react-native'

var {width,height} =Dimensions.get('window')


const Moviecard = ({data}) => {
  
  const router=useRouter()

  const handleclick=()=>{
    router.push('moviescreen',data)
  }
  // console.log('data',data)
  return (
   <TouchableWithoutFeedback 
   onPress={handleclick}
   >
     <Image 
     className='rounded-3xl'
     style={{width:width*0.6 ,
      height:height*0.4,
      marginHorizontal:'auto'
     }}
     source={data}
     />
   </TouchableWithoutFeedback>
  )
}

export default Moviecard