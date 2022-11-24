import React from 'react'
import '@styles/RegisterUser.scss'

export default function RegisterUser() {
  return (
    <div className="container">

      <div className="container-account">

        {/* <!--<h1>My account</h1>--> */}

        <form className="form">
          <div>
            <h1>Create account</h1>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" id="name" name="" value="" placeholder="Jose Rangel" className="input"/>

            <label htmlFor="email" className="label">Email address</label>
            <input type="text" id="email" name="" value="" placeholder="jdrangel00@gmail.com" className="input"/>

            <label htmlFor="password" className="label">Password</label>
            <input type="password"  id="password" name="" value="" placeholder="*************" className="input"/>
          </div>

          <input type="button" name="" value="Save" className="primary-bottom bottom"/>
        </form>

      </div>

    </div>
  )
}
