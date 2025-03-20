import React from 'react'; // Assurez-vous d'importer React
import logo from '../assets/logo.png';
import './style/App.css'; // Importez le fichier CSS principal si nécessaire
import Banner from './Banner';
import Cart from './cart';
import ShoppingList from './ShoppingListe';


function App() {
  return (
    <div>
      <Banner>
      <img src={logo} alt="logo de la maison jungle" className='lmj-logo' />
      <h1 className="lmj-title">La maison de la jungle</h1>
     </Banner>
      <Cart />
      < ShoppingList/>
    </div>
  );
}

export default App;