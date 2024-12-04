import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>Jobb élmény érdekében töltsd le a NutriGo alkalmazást <br />NutriGo</p>
            <div className="app-download-platforms">
                
                <a href="https://play.google.com/store/apps/details?id=com.wolt.android&hl=hu&pli=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <img src={assets.play_store} alt="play store" style={{ width: '150px', cursor: 'pointer' }} />
                </a>
                
                <a href="https://apps.apple.com/hu/app/wolt-t%C3%B6bb-mint-%C3%A9tel-sz%C3%A1ll%C3%ADt%C3%A1s/id943905271?l=hu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <img src={assets.app_store} alt="App Store" style={{ width: '150px', cursor: 'pointer' }} />
                </a>
            </div>
        </div>
    )
}

export default AppDownload
