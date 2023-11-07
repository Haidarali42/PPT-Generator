import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ThemeCard.css'
import PPT_generator from './PPT_generator';
import { useState } from 'react';
const ThemeCard = ({ sendData }) => {
  const[font, setFont] = useState('')
  const[color, setColor] = useState('')
  const[backcolor,setBackcolor] = useState('')

  const handleButtonClick = (font, color, backColor) => {
    setFont(font);
    setColor(color);
    setBackcolor(backColor);
  };

    return (
        <>
            <div className="centeredContainer">
                <Grid container className='grid-container' justifyContent="center" rowSpacing={2}>
                    <Grid className='item' item xs={12} sm={6} md={4} >
                        <div className="sub-contain4">
                            <Card variant='outlined' className='card-theme' sx={{ minWidth: 250 }} onClick={() => handleButtonClick('monospace', '#ff0000', '#b466c1')} >
                                <CardMedia
                                    component="img"
                                    height="130"
                                    image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/atmosphere/atmosphere-2_39682e37.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <div>
                                            <h5 className='cardTitle'>Title</h5>
                                        </div>
                                        <div>
                                            <p className='bodytag'>Body & <a href="">Link</a></p>
                                        </div>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid className='item' item xs={12} sm={6} md={4} >
                        <div className="sub-contain3">
                            <Card variant='outlined' className='card-theme' sx={{ minWidth: 250 }} onClick={() => handleButtonClick('cursive', '#ee82ee', '#b466c1')}>
                                <CardMedia
                                    component="img"
                                    height="130"
                                    image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/marine/marine-01_4e09ec6d.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <div>
                                            <h5 className='cardTitle'>Title</h5>
                                        </div>
                                        <div>
                                            <p className='bodytag'>Body & <a href="">Link</a></p>
                                        </div>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid className='item' item xs={12} sm={6} md={4} >
                        <div className="sub-contain16">
                            <Card variant='outlined' className='card-theme' sx={{ minWidth: 250 }} onClick={() => handleButtonClick('fantasy', '#7b68ee', '#b466c1')}>
                                <CardMedia
                                    component="img"
                                    height="130"
                                    image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/flamingo/flamingo-01_3a8256df.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <div>
                                            <h5 className='cardTitle'>Title</h5>
                                        </div>
                                        <div>
                                            <p className='bodytag'>Body & <a href="">Link</a></p>
                                        </div>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <PPT_generator font={font} color={color} backcolor={backcolor}/>
        </>
        
    )
}

export default ThemeCard
