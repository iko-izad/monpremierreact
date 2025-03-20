import React from 'react'; // Assurez-vous d'importer React
import './style/cart.css'; // Importez le fichier CSS

function Cart() {
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowerPrice = 15;

    const mapFleur = new Map();

    mapFleur.set("age", 14);

    console.log("Map Fleur:", typeof mapFleur);
    console.log(mapFleur.get("age"));

    console.log(mapFleur);

    const tableauFleur = ["Tulipe","Rose","Anfou"];

    let flera = tableauFleur.map((fleur)=>fleur.toLocaleUpperCase());
    console.log(flera);

    
    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Montera : {monsteraPrice}€</li>
                <li>Lierre : {ivyPrice}€</li>
                <li>Fleurs : {flowerPrice}€</li>
            </ul>
            Total : {monsteraPrice + ivyPrice + flowerPrice}€
        </div>
    );
}

export default Cart;