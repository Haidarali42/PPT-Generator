import React from 'react'
import { Button} from '@mui/material'
import { HomeOutlined } from '@mui/icons-material'
import './Index.css'
import PresentCard from './PresentCard';
import { Link } from 'react-router-dom'
function Index() {
    return (
        <>
            <div className="component">
                <Link to='/'><Button
                    variant='contained'
                    startIcon={<HomeOutlined />}
                    className='home' >Home</Button></Link>
                <div className='tag'>
                    <h5 className='line'>👋 Hi Haidar, I'm your AI design partner.
                        What would you like to create today?</h5>
                </div>
                <PresentCard></PresentCard>
            </div>
        </>
    )
}

export default Index
