import React from 'react'

const WelcomeCard = ({setCard}) => {
    return (
        <div className='card card1 border-0 rounded-0 mb5'>
            <h1 className='mb-0'>Familyr</h1>
            <p>Keeping Households Planning Together</p>
            <div className='row mt-auto mb-2'>
                <div className='col-6'>
                    <button type='submit' className='btn btn-block btn-primary' onClick={() => setCard('login')}>Log In</button>
                </div>
                <div className='col-6'>
                    <button onClick={() => setCard('register')} type="submit" className='btn btn-block btn-inverse'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeCard
