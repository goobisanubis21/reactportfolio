import React from 'react'
import ResPhoto from './resume-screenshot.png'
import './resume.css'

function Resume() {
    return (
        <div className='resumeStyle'>
            <img src={ResPhoto} alt='resume' />
        </div>
    )
}

export default Resume
