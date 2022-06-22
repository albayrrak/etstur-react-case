import React from "react";
import { useContext } from "react";
import FirebaseContext from "../../context/firebaseContex";

const Register = () => {
    const {
        register,
        registerEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
    } = useContext(FirebaseContext);

    return (
        <div className='bg-gray-100 w-full h-screen flex items-center justify-center'>
            {/* Create a register form */}
            <form
                onSubmit={register}
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'
            >
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Email
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='email'
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Şifre
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        type='password'
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        KAYIT OL
                    </button>
                    <a
                        className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                        href='/'
                    >
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Register;
