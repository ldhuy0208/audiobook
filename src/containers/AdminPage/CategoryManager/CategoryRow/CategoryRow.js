import React from 'react'
import './CategoryRow.scss'

function CategoryRow(props) {
  return (
    <div className="category-row">
      <ul>
        <li>
          {props.category.title}
        </li>
        <li>
          {props.category.orderNumber}
        </li>
      </ul>
    </div>
  )
}

export default CategoryRow
