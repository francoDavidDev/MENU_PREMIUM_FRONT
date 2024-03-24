import React from 'react'
import FlexCenter from './muiComponents/FlexCenter'
import loadinCoffee from '../assets/gifs/loadingCoffee.gif'

const Loading = () => {

 

  return (
    <FlexCenter width={1} height={1} sx={{position:'absolute', zIndex:100}}>
        <img  src={loadinCoffee} width={'100%'}  height={'60%'} />
    </FlexCenter>
  )
}

export default Loading