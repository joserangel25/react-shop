import React from 'react'
import '../styles/MenuProfile.scss'

export default function MenuProfile() {
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <a href="/" className="title">My orders</a>
        </li>

        <li>
          <a href="/">My account</a>
        </li>

        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
  </div>
  )
}
