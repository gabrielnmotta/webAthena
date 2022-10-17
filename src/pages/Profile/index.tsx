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
                <label>City</label>
                <input type="text" placeholder="Brasil" />
              </div>

              <div>
                <label>Street</label>
                <input type="text" placeholder="Rua municipios" />
              </div>
            </div>

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
                <label>Birthday</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

              <div>
                <label>Sex</label>
                <input type="text" placeholder="Male" />
              </div>
            </div>

            <div className="form">
              <div>
                <label>Photo</label>
                <input type="file" placeholder="choose file" />
              </div>

              <div className="profimg">
                <button type="button" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
