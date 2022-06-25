import React from 'react'
import Carousel from "react-elastic-carousel";
import Service2 from "../../assets/img/orthodontie-tunisie.jpg";
import Service3 from "../../assets/img/chirurgie-dentaire-tunisie.jpg";
import Service0 from "../../assets/img/implant-dentaire-tunisie.jpg";
import Service5 from "../../assets/img/chirurgie-dent-de-sagesse.jpg";
import Service4 from "../../assets/img/esthetique-dentaire-tunisie.jpg";
import Service6 from "../../assets/img/bridge-dentaire-tunisie.jpg";
import { BsCheck2Square } from "react-icons/bs";
import RendezVous from '../../components/RendezVous/RendezVous';

function Traitements() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },

  ]
  return (
    <div className=''>
       <section className="breadcrumb-area">
       
       <div className="breadcrumb-content">
         <div className="col-12 px-0">
           <div className="page-title">
           <h1 className="heading-2">Traitements Dentaire Tunisie</h1>
           </div>
         </div>
         <ul className="page-list">
           <li>
             <a href="index.html">Accueil</a>
           </li>
           <li>Traitements</li>
         </ul>
       </div>
  
 </section>

      <section className="coundown-section">
        <div className="container">

          <div className="col-lg-12">
            <div className="common-title padding-bottom-20">
              <h2 className="heading">Nos traitements dentaires</h2>
              <div className="valeur-area mt-3">
              <p>
                Chez <b>Tunisie Dentiste</b>, nous vous garantissons des <b>traitements dentaires</b> adaptés à vos besoins, 
                prodigués par le dentiste de votre choix, au prix le plus juste et avec une prise en charge rapide, 
                complète et personnalisée. Ces traitements dentaires vous permettront de conserver ou de rétablir 
                une bonne santé <b>bucco-dentaire</b>. Nos équipes sont constituées de praticiens experts et d’assistants qualifiés, 
                spécialisés dans de nombreux domaines comme <b>l’orthodontie</b>, <b>la pédodontie</b>, <b>la parodontologie</b>...
                <br /> Renseignez-vous en prenant rendez-vous en ligne ou par téléphone pour bénéficier 
                de tous les traitements dont vous avez besoin et de manière adaptée
              </p>
              </div>
         
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="service-right">
              <div className="row">
                <Carousel   itemPadding={[10, 10]}   breakPoints={breakPoints}  itemsToShow={3}>
                 
                    <div
                      style={{ backgroundImage: `url(${Service0})` }}
                      className="service-item service-carousel"
                    >
                      <div className="heading-6 service-div">
                        <h3>Implantologie</h3>
                      </div>
                    </div>
                 
                    <div
                      style={{ backgroundImage: `url(${Service2})` }}
                      className="service-item service-carousel"
                    >
                      <div className="heading-6 service-div">
                        <h3>Aligner par gouttière <br /> transparente</h3>
                      </div>
                    </div>
                 
                 
                    <div
                      style={{ backgroundImage: `url(${Service3})` }}
                      className="service-item service-carousel"
                    >
                      <div className="heading-6 service-div">
                        <h3> Chirurgie dentaire</h3>
                      </div>
                    </div>
                
                    <div
                      style={{ backgroundImage: `url(${Service4})` }}
                      className="service-item service-carousel"
                    >
                      <div className="heading-6 service-div">
                        <h3>Facettes dentaires <br /> veneers</h3>
                      </div>
                    </div>
                   
                    <div
                      style={{ backgroundImage: `url(${Service5})` }}
                      className="service-item service-carousel"
                    >
                      <div className="heading-6 service-div">
                        <h3>Chirurgie <br /> Dent de sagesse</h3>
                      </div>
                    </div>
                
                    <div
                      style={{ backgroundImage: `url(${Service6})` }}
                      className="service-item service-carousel"
                    >
                      <div className="heading-6 service-div">
                        <h3>Bridge <br /> Ceramique - Zircone</h3>
                      </div>
                    </div>
                 
                </Carousel>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 mt-5">
            <h2>Quels sont les avantages ?</h2>
             <div className="valeur-area">
             <p>Le domaine de la dentisterie est vaste. Avec les évolutions techniques, de plus en plus de possibilités apparaissent et permettent aux praticiens d’aider leurs patients à profiter d’une dentition saine et fonctionnelle tout au long de leur vie. Ils assurent donc :</p>
                  <p>
                    <BsCheck2Square />
                    Le maintien d’une bonne santé dentaire 

                  </p>
                  <p>
                    <BsCheck2Square />
                    La résolution de problèmes, tels que les maladies parodontales
                  </p>
                  <p>
                    <BsCheck2Square />
                    La correction des défauts esthétiques des mâchoires de leurs patients
                  </p>
              
                </div>
          </div>
        </div>

      </section>
      <RendezVous />
    </div>
  )
}

export default Traitements