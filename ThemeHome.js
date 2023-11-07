import React, { useState, useEffect } from 'react'
import { Button, CircularProgress } from '@mui/material'
import { HomeOutlined } from '@mui/icons-material'
import './ThemeHome.css'
import ThemeCard from './ThemeCard'
import { Link } from 'react-router-dom'
function Index() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000); // 15 seconds delay

        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <>
            <div className="component">
                {loading ? (
                    <>
                        <div className="spinMsg">
                            <div className="spinner">
                                <CircularProgress size={24} style={{ marginRight: '10px' }} />
                            </div>

                            <div className="message">
                                <p className='wait-text'>Wait for a minute, your presentation is getting ready...</p>
                            </div>
                        </div>


                    </>
                ) : (
                    <Link to='/'> <Button variant='contained' startIcon={<HomeOutlined />} className='home'>
                        Home
                    </Button></Link>
                )}
            </div>
            {!loading && <ThemeCard />}
        </>
    )
}

export default Index
