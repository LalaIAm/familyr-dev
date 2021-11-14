import React from 'react'

function BubbleBackground({numBubbles}) {
    const createBubbles = () => {
        let bubbles = []
        for(let i = 0; i < numBubbles; i++){
            bubbles.push('bubble')
        }
        return bubbles;
    }

    let bubbles = createBubbles()
    return (
        <div className='bubbles'>
            {bubbles.map((bubble, i) => (
                <div key={i} className='bubble'></div>
            ))}
        </div>
    )
}

export default BubbleBackground
