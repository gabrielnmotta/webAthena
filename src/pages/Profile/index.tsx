import { Button } from '@mui/material'
import React from 'react'
import './profile.scss'

export function Profile() {
  return (
    <div className="settings">
      <div className="container">

        <div className="details__form">
          <h2 className="title">Profile</h2>
          <form>
         

            <div className="form">
              <div>
                <label>Email</label>
                <input type="email" placeholder="example@example.com" />
              </div>

              <div>
                <label>Contact</label>
                <input type="number" placeholder="+55 xxx 40028922" />
              </div>
            </div>

            <div className="form">
              <div>
                <label>Photo</label>
                <input type="file" placeholder="choose file" />
              </div>
            </div>
            <div className="profimg">
                <Button variant="contained" className="btn">Submit</Button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}
