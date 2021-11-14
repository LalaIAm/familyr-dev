import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
const imgUrl =
  'https://images.unsplash.com/photo-1612392987205-c53f0200a175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

const LoginCard = ({ setCard }) => {
  return (
    <div className='card p-0 border-0 rounded-0 mb-2'>
      <div className='card border-0 rounded-0 card0'>
        <h1 className='mb-0'>Hello!</h1>
        <p>Please login with your account details</p>
        <label className='font-weight-bold mb-0'>Email</label>
        <input
          type='email'
          name='email'
          className='mb-2'
          placeholder='you@email.com'
          required
        />
        <label className='font-weight-bold mb-0'>Password</label>
        <input
          type='password'
          name='password'
          className='mb-2'
          placeholder='Your Password'
          required
        />
        <Link to='#' className='small ml-auto text-dim'>
          Forgot password?
        </Link>
        <div className='row justify-content-center mt-2'>
          <button type='submit' className='btn btn-primary px-5'>
            Log In
          </button>
        </div>
        <div className='row justify-content-center mt-1'>
          <small className='text-dim'>or log in with</small>
        </div>
        <div className='row justify-content-center mt-1 mb-1'>
          <span>
            <FcGoogle className='icon' />
          </span>
        </div>
        <div className='row justify-content-center mb-1'>
          <span className='small card-switch' onClick={() => setCard('register')}>
            Already have an account?
          </span>
        </div>
      </div>
      <img className='signup-img' src={imgUrl} alt='' className='mt-auto' />
    </div>
  )
}

export default LoginCard
