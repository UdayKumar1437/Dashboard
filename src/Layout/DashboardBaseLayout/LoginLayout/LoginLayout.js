import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../../../Slices/AuthenicationSlice"

const LoginLayout = () => {
    const [user, setUserData] = useState([]);
    // const [profile, setProfile] = useState([]);
    const profile = useSelector((state) => state?.user);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUserData(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        dispatch(setUser(res.data));
                        navigate('/');
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );
    const logOut = () => {
        googleLogout();
        dispatch(setUser(null));
    };
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    console.log(profile);

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={login}>Sign in with Google 🚀 </button>
            )}
        </div>
    )
}

export default LoginLayout