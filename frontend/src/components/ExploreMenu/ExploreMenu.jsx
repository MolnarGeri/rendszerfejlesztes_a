import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Fedezze fel menüinket</h1>
      <p className='explore-menu-text'>A NutriGo gondoskodik arról, hogy minden falat tápláló, friss és ízletes legyen. Kényelmes, gyors kiszállítás – így Önnek csak az élvezetre kell figyelnie. Válassza a NutriGo-t, és adja meg testének azt, amit megérdemel!</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
