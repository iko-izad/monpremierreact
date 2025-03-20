import React from 'react'; // Assurez-vous d'importer React
import { planteListe } from "../data/planteListe";
import "./style/ShoppingListe.css";
import CareScale from './CareScale';

function ShoppingList() {
    let listeCourse = ["monster", "banane", "Palmier"];

    const categories = planteListe.reduce((acc, plante) => 
        acc.includes(plante.category) ? acc : [...acc, plante.category],
        []
    );
     
    console.log("categories plantes: ", categories);
  
    return (
        <div>
            <h3>Liste de courses</h3>
            <ul>
                { 
                    listeCourse.map((plante, index) => (
                        <li key={index}>{index}- {plante}</li>
                    ))
                }
            </ul>
  
            <h3>nouvelle liste</h3>
            <ul>
                { 
                    planteListe.map((plante) => (
                        <li key={plante.id}>{plante.name} - {plante.category}</li>
                    ))
                }
            </ul>

            <h3>Liste des catégories</h3>
            <ul>
                {
                    categories.map((maCategorie) => (
                        <li key={maCategorie}>{maCategorie}</li>
                    ))
                }
            </ul>
            <h6>Les plantes : </h6>
            <ul className="lmj-plant-list">
                {
                    planteListe.map((plante) => (
                        <li key={plante.id} className='lmj-plant-item'> {plante.name} - {plante.category}
                        <CareScale lumiere={plante.light} typePlante='lumiere'/>
                        <CareScale lumiere={plante.water} typePlante='Eau'/>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
  
export default ShoppingList;
  
  