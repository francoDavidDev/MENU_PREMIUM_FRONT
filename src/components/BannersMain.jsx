import { Card, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BANNERS } from '../constants/specials'

const Banners = ({value}) => {
  return (
    <Box sx={{ p:2 ,borderRadius:4, mt:5,  }}>
        {BANNERS.map((item,index)=>{
            return item.tag === 'bannerMain' && value === item.category ?  (
                <Card key={index} sx={{ borderRadius:5  }}>
                <CardMedia
                component={'img'}
                height="350"
                image={item.image}
                >
      
                </CardMedia>
                </Card>
            ):(null)
        })}
        
        </Box>
  )
}

export default Banners