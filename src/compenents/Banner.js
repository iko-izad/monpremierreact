import { children } from 'react'; // Assurez-vous d'importer React
import './style/Banner.css'; // Importez le fichier CSS

import logo from '../assets/logo.png';


function Banner({children}) {
    let titre = "la maison du jungle";
    return (
        <div className="lmj-Banner">
           {children}
        </div>
    );
}

export default Banner;