/* eslint-disable */
import React,{useState} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./FAQ.scss";
import { FaQuestion } from "react-icons/fa";
import RendezVous from "../../components/RendezVous/RendezVous";
 

function FAQ() {
  const [ShowItem, setShowItem] = useState(null)


  const Show =(n) =>{
    return 'show'
     if(ShowItem == n) return "show"
  }
  return (
    <div className="">
          <section className="breadcrumb-area">
       
       <div className="breadcrumb-content">
         <div className="col-12 px-0">
           <div className="page-title">
           <h1 className="heading-2">Questions fréquentes</h1>
           </div>
         </div>
         <ul className="page-list">
           <li>
             <a href="index.html">Accueil</a>
           </li>
           <li>FAQ</li>
         </ul>
       </div>
  
 </section>
      {/* <div className="col-lg-12 mt-5">
            <div className="common-title">
              <h2 className="heading">Foire aux questions</h2>
            </div>
            </div> */}
     

      <div className="container faq">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 600: 2, 1000: 3 }}
        >
          <Masonry>
            <div className="single-couterup" onClick={() => setShowItem(1)}>
              <FaQuestion />
              <div className="content">
                <span className="count-num titles">
                  Comment faire pour prendre RDV (appel ou internet) ?
                </span>
                <h4 className={"title " +(Show(1))}>
                  Pour prendre Rendez-vous, vous pouvez nous contacter au <br />{" "}
                  <b>54 339 924</b> <br /> <b>71 432 393</b> <br /> ou prendre
                  rendez-vous en ligne.
                </h4>
              </div>
            </div>
            <div className="single-couterup" onClick={() => setShowItem(2)}>
              <FaQuestion />
              <div className="content">
                <span className="count-num titles">
                  Est-ce que vous prenez des patients sans RDV ?
                </span>
                <h4 className={"title " +(Show(2))}>
                  Les patients sans RDV sont les bienvenus et seront évidemment
                  reçus par ordre d’arrivée. En cas d’accident ou de forte
                  douleur bucco-dentaire, nous vous conseillons de prendre un
                  rendez-vous parmi les créneaux réservés aux urgences auprès du
                  centre Dentego près de chez vous. Nous ferons notre maximum
                  pour vous trouver un rendez-vous dans la journée.
                </h4>
              </div>
            </div>
            <div className="single-couterup" onClick={() => setShowItem(3)}>
              <FaQuestion />
              <div className="content">
                <span className="count-num titles">
                  Est-ce que vous recevez les patients en urgence ?
                </span>
                <h4 className={"title " +(Show(3))}>
                  Dans notre cabinet nous faisons notre maximum pour garantir un
                  rdv au plus vite en consacrant certains créneaux pour les
                  urgences. Pour cela, appelez nous et on fera tout pour vous
                  soulager au plus vite.
                </h4>
              </div>
            </div>
            <div className="single-couterup" onClick={() => setShowItem(4)}>
              <FaQuestion />
              <div className="content">
                <span className="count-num titles">
                  Est-ce que le patient doit avancer les frais ?
                </span>
                <h4 className={"title " +(Show(4))}>
                  Concernant les prothèses (appareils, couronnes, bridges,
                  implants) et les soins non remboursés (parodontie…), vous
                  pourrez bénéficier également du tiers payant du montant pris
                  en charge par la mutuelle.
                </h4>
              </div>
            </div>
            <div className="single-couterup" onClick={() => setShowItem(5)}>
              <FaQuestion />
              <div className="content">
                <span className="count-num titles">
                  A partir de quel âge peut-on effectuer un blanchiment ?
                </span>
                <h4 className={"title " +(Show(5))}>
                  Un blanchiment peut être réaliser une fois que les dents ont
                  terminées leur évolution et que l'on soit sur qu'il n'y existe
                  pas de caries ni de problèmes de gencives. Ce blanchiment peut
                  être fait sur des patients agés de plus de 18 ans.
                </h4>
              </div>
            </div>
            <div className="single-couterup" onClick={() => setShowItem(6)}>
              <FaQuestion />
              <div className="content">
                <span className="count-num titles">
                  Est-ce que je peux avoir les dents plus blanches ?
                </span>
                <h4 className={"title " +(Show(6))}>
                  Vous trouvez que vos dents sont devenues plus foncées et cela
                  vous préoccupe? Il existe diverses solutions pour blanchir vos
                  dents sans les abîmer. La majorité de nos patients choisissent
                  de se procurer des gouttières personnalisées et blanchissent
                  leurs dents dans le confort de leur foyer. Cette procédure est
                  offerte à un coût plus avantageux que jamais et est supervisée
                  par un dentiste qualifié, afin de vous garantir une expérience
                  de blanchiment sécuritaire et vous permettre d’obtenir
                  d’excellents résultats.
                </h4>
              </div>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <RendezVous />
    </div>
  );
}

export default FAQ;
