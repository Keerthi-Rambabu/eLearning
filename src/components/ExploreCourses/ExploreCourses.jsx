import React,{useState} from 'react'
import './ExploreCourses.css'
import { menu_list } from '../../assets/assets'
const ExploreCourses = ({category,setCategory})=> {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit commodi numquam, aut nobis, cumque officia deleniti magni magnam cu</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="menu_image" />
                        <p>{item.menu_name}</p>
                    </div>

                )
            })}
        </div>
        <hr/>
    </div>
  );
}

export default ExploreCourses