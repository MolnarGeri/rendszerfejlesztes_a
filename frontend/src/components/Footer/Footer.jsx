import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>A NutriGo-val az egészséges életmód még sosem volt ilyen könnyen elérhető! Küldetésünk, hogy friss, tápláló és ízletes ételeket szállítsunk Önnek, legyen szó ebédről, vacsoráról vagy akár egy gyors nassolnivalóról. Mi gondosan válogatjuk össze a legjobb alapanyagokat, hogy Önnek csak az élvezetre kelljen koncentrálnia – az egészséges táplálkozás minden egyes falatban benne van. NutriGo: frissesség, ízek, energia – az Ön asztalára!</p>
            
        </div>
        
        <div className="footer-content-right">
            <h2>Kapcsolatfelvétel</h2>
            <ul>
                <li>+36-30-123-4567</li>
                <li>contact@NutriGo.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © NutriGo.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
