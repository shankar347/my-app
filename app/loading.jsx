import React from 'react'
import { Dimensions, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { theme } from './index'

const Loading = () => {

   const {width,height} = Dimensions.get('window')
  
    return (
     <View style={{width,height}} className='flex-1 bg-neutral-900 items-center
     justify-center'  >
      <Progress.CircleSnail thickness={12} size={160} color={theme.background}   />
     </View>
  )
}

export default Loading