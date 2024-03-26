import React from 'react'
import FlexCenter from './muiComponents/FlexCenter'
import loadinCoffee from '../assets/gifs/loadingCoffee2.gif'

const Loading = () => {

 

  return (
    <FlexCenter width={1} height={1} sx={{position:'absolute', zIndex:100, backgroundColor:'primary.second'}}>
        <img  src={loadinCoffee} width={'70%'}  height={'30%'} />
    </FlexCenter>
  )
}

export default Loading