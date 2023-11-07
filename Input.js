import React from 'react'
import { Grid, InputAdornment, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Input.css'
function Input() {
    const [textfield, setTextfield] = useState();
    function handlefield(e) {
        setTextfield(e.target.value);
    }
    return (
        <>
            <div className="main-container">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <div className="para-container">
                            <div className="paragraph">
                                <p className='firstPara'>Sounds good! What would you like the Presentation to be about?</p>
                                <p className='secondPara'>Tip: You can enter your own topic. or use one of our suggestions to get started quickly.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={8} justifyContent="flex-end" style={{ marginLeft: '30%' }}>
                        <div className="input-container">
                            <TextField
                                className='inputType'
                                placeholder='Type a topic in any language'
                                style={{ width: '100%' }}
                                onChange={handlefield}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {textfield ? (
                                                <Link to='/themehome'>
                                                    <SendIcon style={{ cursor: 'pointer' }} />
                                                </Link>
                                            ) : (
                                                <SendIcon style={{ cursor: 'not-allowed', color: 'grey' }} />
                                            )}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Input
