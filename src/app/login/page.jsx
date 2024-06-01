import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '@/firebase/auth';
import { useAuth } from '../../contexts/authContext'

const LoginPage = () => {
    // const { userLoggedIn } = useAuth()

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [isSigningIn, setIsSigningIn] = useState('')
    // const [errorMessage, setErrorMessage] = useState('')



    return (
        <div>Login</div>
    )
}

export default LoginPage