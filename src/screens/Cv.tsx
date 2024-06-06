import React from 'react';
import './Cv.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Cv=() => {
  return (
    
    <div className="cv-container">
    <div className="left-column">
      <img className="circular-image"  src="https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-1/442473491_1496198480978333_466668237542750518_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r4u-hsVFUyQQ7kNvgEsfFQA&_nc_ht=scontent.frba2-2.fna&oh=00_AYAn9qjs81rVfN1vx2K0BGhtBUE03n-OK0k_UnkgZdFs6g&oe=6661595B"></img>
      <div className="section">
      </div>
      <div className="section">
        <h2>À PROPOS</h2>
        <p>
        Je suis actuellement étudiante en deuxième année d'école d'ingénieurs, spécialisée en réseaux et télécommunications. Passionnée par les technologies de l'information et de la communication, j'ai choisi ce domaine pour son dynamisme et son impact crucial sur notre société connectée.
        </p>
        <p>
        Au cours de ma formation, j'ai acquis des compétences solides en conception, gestion et optimisation des réseaux informatiques. Mes cours m'ont permis de maîtriser des technologies telles que les protocoles IP, la sécurité des réseaux, les infrastructures sans fil et les systèmes de communication modernes.
        </p>
      </div>
      <div className="section">
        <h2>COMPÉTENCES</h2>
        <ul className="skills">
          <li> <strong>Réseaux :</strong> TCP/IP, VLAN</li>
          <li> <strong>Sécurité : </strong>Firewalls, VPN</li>
          <li><strong>Télécommunications : </strong>LTE, 5G,ingénierie radio-mobile</li>
          <li> <strong>Outils : </strong>Wireshark, Packet Tracer</li>
          <li> <strong>linux(kali)</strong></li>
          <li> <strong>Python,Java ,c/c++</strong></li>
          <li> <strong>MySQL,PL/SQL</strong></li>
        </ul>
      </div>
      <div className="section">
        <h2>Langues</h2>
        <p>
          Arabe: Langue maternelle
          <br />
          Français: Bilingue
          <br />
          Anglais: Compétences professionnel
        </p>
      </div>
      
    </div>
    <div className="right-column">
      <div className="header">
        <h1>TAHIRI EL ALAOUI <span className="text-orange text-uppercase">OUMAIMA</span></h1>
        <p>Elève ingénieur en Réseaux et télécoms</p>
        <ul className="infos flex flex-col space-y-2 mt-4">
          <li className="flex items-center"><FaEnvelope></FaEnvelope> <a  href="mailto:contact@pgomba.com">contact@poumaima.com</a></li>
          <li className="flex items-center">< FaPhone ></FaPhone>  06 75 53 80 50</li>
          <li className="flex items-center"> <FaMapMarkerAlt />  Rabat, Maroc</li>
        </ul> 
      </div>
      <div className="content">
        <div className="section">
          <h2>Expériences <br /><span className="text-orange">professionelles</span></h2>
          <p>
            <strong>Juin - <i className="fas fa-long-arrow-alt-right"></i> Aout 2021</strong>
            <br />
            Stage d'un mois à <em>L'Onee</em>
          </p>
          <ul className="experience-list">
            <li> Apprentissage de la documentation technique relative aux transformateurs et alternateurs.</li>
            <li> Acquisition de compétences sur les procédures et technologies employées en maintenance des machines électriques.</li>
            <li> Étude des rapports de maintenance pour comprendre
                 les actions entreprises, les problèmes rencontrés et les
                 solutions apportées.</li>
            <li> Accompagnement des techniciens sur le terrain pour
                observer les opérations de maintenance préventive et
                corrective</li>
  
          </ul>
        </div>
       
        <div className="section">
          <h2>Études <br /><span className="text-orange">& formations</span></h2>
          <p>
            <strong>2019</strong>
            <br />
            <em>Bac science mathématique B </em>
          </p>
          <p>
            <strong>2020<i className="fas fa-long-arrow-alt-right"></i> -2021</strong>
            <br />
            <em>Classes préparatoires</em>, Mp
          </p>
          
          <p>
            <strong>2021 <i className="fas fa-long-arrow-alt-right"></i> en cours</strong>
            <br />
            <em></em>Ecole Mohammadia d'ingénieurs , filière réseaux et télécoms
          </p>
          
          
        </div>
        <div className="section">
          <h2>Autres <br /><span className="text-orange">expériences</span></h2>
          <p>
            <li>Oraganisation d'événement pour enfants</li>
            <li>Chef cellule logistique au club Emi-khayr</li>
            <li>Membre au club Emi-aéro,cellule technique </li>
            <li>Cours de soutien pour les enfants </li>
            <br />
        <div className="section">

          <h2>Centres<br /><span className="text-orange">d'intérêt</span> </h2>
          <p>
          <li>Dessin</li>
          <li>Lecture</li>
          <li>Art en général</li>
          <li> Sport</li>
        
          </p>
      </div>
            
           
          </p>
        </div>
      </div>
    </div>
    
  </div>
);
}

export default Cv;