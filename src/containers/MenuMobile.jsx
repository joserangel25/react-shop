import React from 'react'
import { Link } from 'react-router-dom'
import { listMenu, objectIsValid } from '../constants'
import '@styles/MenuMobile.scss'
import { useAuthContext } from '../hooks/useAuthContext'

export default function MenuMobile() {

  const { usser } = useAuthContext();
  const modifierUrl = (name, ind) => `${name.toLowerCase()}-${ind}`

  return (
    <>
      <div className="mobile-menu">

        <div className="content">
          <ul>
            <li>
              <a>CATEGORIES</a>
            </li>
            {
              listMenu.map((item, ind) => (
                <li key={ind}>
                  <Link to={modifierUrl(item.name, ind)}>
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className="linea">

          </div>

          {
            objectIsValid(usser) ?
            (
              <>
                <ul className="info-cuenta">
                  <li>
                    <Link to="/">My orders</Link>
                  </li>
                  <li>
                    <Link to="/">My account</Link>
                  </li>
                </ul>

                <ul>
                  <li>
                    <Link to="#" className="email">{usser.email}</Link>
                  </li>
                  <li>
                    <Link to="#" className="sign-out">Sign out</Link>
                  </li>
                </ul>
              </>
            )
              :
              <ul>
                <li><Link to='/login'>Inicia sesión</Link></li>
              </ul>
          }

        </div>
      </div>
    </>
  )
}
