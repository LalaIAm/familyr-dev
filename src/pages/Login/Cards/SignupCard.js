import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useFirebase } from '../../../firebase'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../../../actions/auth.actions'

const SignupCard = ({ setCard }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { emailSignUp, googleSignIn } = useFirebase()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSignup = async (event) => {
    event.preventDefault()
    try {
      let user = await emailSignUp(email, password)
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(setAuthUser(user))
      history.push('/app')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form  onSubmit={handleSignup} className='card border-0 rounded-0 mb-5'>
      <h1 className='mb-2'>Nice to Meet You</h1>
      <small>Welcome to the Familyr</small>
      <label className='font-weight-bold mb-0'>Your Name</label>
      <input
        type='text'
        name='name'
        className='mb-4'
        placeholder='Your Name'
        required
        onChange={(e) => setName(e.target.value)}
      />
      <label className='font-weight-bold mb-0'>Email</label>
      <input
        type='email'
        name='email'
        className='mb-4'
        placeholder='you@email.com'
        required
        onChange={e => setEmail(e.target.value)}
      />
      <label className='font-weight-bold mb-0'>Password</label>
      <input
        type='password'
        name='password'
        className='mb-4'
        placeholder='Your Password'
        required
        onChange={e => setPassword(e.target.value)}
      />
      <div className='custom-control custom-checkbox custom-control-inline mt-4'>
        <input
          type='checkbox'
          id='chk1'
          name='chk'
          className='custom-control-input'
          checked
        />
        <label htmlFor='chk1' className='custom-control-label small'>
          I agree with the Terms of Service, Privacy Policy.
        </label>
      </div>
      <div className='row px-3 mt-5'>
        <button type='submit' className='btn btn-primary px-3 mr-3'>
          Sign Up
        </button>
        <small className='text-muted mr-3 mt-2'>or login with</small>
        <span>
          <FcGoogle />
        </span>
      </div>
      <span onClick={() => setCard('login')} className='small'>
        Already have an account?
      </span>
    </form>
  )
}

export default SignupCard
