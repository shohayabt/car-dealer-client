import React from 'react'
import { useState } from 'react';
import "./ResetPassword.css"
import "../Login/Login.css"
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../Firebase';
export const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    if(error){
        return(
            <div className="container flex-c " style={{ padding: "30px 0px" }}>
                <p className='error'>{error?.message || "unknown error "}</p>
            </div>
        )
    }
    return (
        <div className="container flex-c " style={{ padding: "30px 0px" }}>
            <Toaster></Toaster>
            <div className="reset">
                <h1>Reset</h1>
                <div className="input-area">
                    <input  onChange={(e) => setEmail(e.target.value)} type="email" required placeholder='Email' />
                </div>
                <div className="button-area">
                    <button onClick={async (event) => {
                        event.preventDefault();
                        await sendPasswordResetEmail(email);
                        toast('EMAIL SENT')
                    }} className='btn login-button'> Reset password</button>
                </div>
            </div>
        </div>
    )
}
