import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from 'react-native'

const Castcard = ({item}) => {
 
    const {width,height} =Dimensions.get('window')

    let charactername='Tony Stark' 
    let personname='Roberty Downery JR'
    const router=useRouter()
    return (
   <TouchableWithoutFeedback
   onPress={()=>router.push('profilescreen',item)}
   >
     <View 
    className='mr-3'
    >
     <Image 
     source={item}
     style={{
        width:width*0.30,
        height:height*0.15  
    }}
    className='rounded-full'
     />   
      <Text className='text-white  text-lg text-center' >
       {charactername.length > 12 ? charactername.slice(0,12) + '...' : charactername}
     </Text>
     <Text className='text-neutral-400 text-lg text-center' >
       {personname.length > 12 ? personname.slice(0,12) + '...' : personname}
     </Text>
    </View>
   </TouchableWithoutFeedback>
  )
}

export default Castcard