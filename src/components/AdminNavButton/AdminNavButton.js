import React from 'react'
import './AdminNavButton.scss'

function AdminNavButton(props) {
  return (
    <div className="admin-nav-button">
      <i className={props.iconClassName}></i>
      <span>{props.label}</span>
    </div>
  )
}

export default AdminNavButton
