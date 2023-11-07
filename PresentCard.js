import React from 'react'
import { Card, CardMedia } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Input from './Input';
import './Demo.css'
import { useState } from 'react';
function PresentCard() {
    const [viewClick, setViewClick] = useState(false)
    function handleClick(){
        setViewClick(true);
    }
    return (
        <>
            <div className="centered-container">
                <Card variant='outlined' className='gammacard' sx={{ minWidth: 250 }}>
                    <CardContent>
                        <CardMedia>
                            <div className="image">
                                <img src="https://cdn.gamma.app/zc87vhr30n8uf3n/29a73f2a0f5840d4a9d30b150a8b0c22/optimized/slide-bg.svg" alt="" className='imgcard1' />
                            </div>
                        </CardMedia>
                    </CardContent>
                    <CardActions>
                        <div className="button-wrapper">
                            <Button variant='contained' className='button1' onClick={handleClick}>Presentation</Button>
                        </div>
                    </CardActions>
                </Card>
            </div>
            {
                viewClick && (
                    <Input/>
                )
            }
        </>
    )
}

export default PresentCard
