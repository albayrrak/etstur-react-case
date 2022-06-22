import React from "react";
import { useContext } from "react";
import FirebaseContext from "../../context/firebaseContex";
import { Link } from "react-router-dom";
const Login = () => {
    const {
        login,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
    } = useContext(FirebaseContext);

    return (
        <div className='bg-gray-100 w-full h-screen flex items-center justify-center'>
            {/* Create a login form */}
            <form
                onSubmit={login}
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'
            >
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Email
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='email'
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />

                    <label className='block text-gray-700 text-sm font-bold mb-2 mt-6'>
                        Şifre
                    </label>

                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        type='password'
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />

                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        GİRİŞ YAP
                    </button>
                    {/* if not user*/}
                    <p className='text-center text-gray-500 text-xs'>
                        Üyeliğiniz yok mu? <Link to='/register'>Kayıt Ol</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
