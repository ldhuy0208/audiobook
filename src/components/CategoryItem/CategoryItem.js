import React from 'react'
import './CategoryItem.scss'
function CategoryItem(props) {
  ;
  return (
    <div className={"category-item gradient-color-"+Math.floor(Math.random()*10)}>
      {props.children}
    </div>
  )
}

export default CategoryItem
