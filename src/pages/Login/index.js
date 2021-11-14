import React, {useState} from 'react'
import WelcomeCard from './Cards/WelcomeCard'
import LoginCard from './Cards/LoginCard'
import SignupCard from './Cards/SignupCard'
import BubbleBackground from '../../components/BubbleBackground'

const Login = () => {
    const [card, setCard] = useState('welcome')
    return (
        <>
        <BubbleBackground numBubbles={50} />
        <div className='signup-wrapper container-fluid px-4 px-md-4 py-5 mx-auto'>
            <div className='row d-flex justify-content-center align'>
                {card === 'welcome' && (
                    <WelcomeCard setCard={setCard} />
                )}
                {card === 'login' && (
                    <LoginCard setCard={setCard} />
                )}
                {card === 'register' && (
                    <SignupCard setCard={setCard} />
                )}
            </div>
        </div>
        </>
    )
}

export default Login
