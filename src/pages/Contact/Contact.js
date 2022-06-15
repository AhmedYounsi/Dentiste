import React from 'react'
import RendezVous from '../../components/RendezVous/RendezVous'

function Contact() {
  return (
    <div>
         <section
        className="breadcrumb-area padding-50 mb-3"

      >
        <div className="container-fluid">
          <div className="row">
            <div className="breadcrumb-content">
              <div className="col-12 px-0">
                <div className="page-title">
                  <h1 className="heading-1">Contactez-nous</h1>
                </div>
              </div>
              <ul className="page-list">
                <li>
                  <a href="index.html">Accueil</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <RendezVous />
    </div>
  )
}

export default Contact