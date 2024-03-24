import { Card, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BANNERS } from '../constants/specials'

const Banners = ({filterState}) => {
  return (
    <Box sx={{ p:2 , pt:5, backgroundColor:'primary.main'  }}>
        {BANNERS.map((item,index)=>{
            return item.tag === 'bannerMain' && filterState === item.category ?  (
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