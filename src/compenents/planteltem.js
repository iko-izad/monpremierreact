// dans ce composant < planteltem /> , on va gérer chaque
import CareScale from "./CareScale"

function PlanteItem({name,id, water, light}) {
    return(
        <li className="lmj-plant-item">
            <img className="lmj-plante-item-cover" 
            src="" alt={`${name}`}/>
            {name}

            <div>
                <CareScale typeDeCulture={water} typePlante="eau"/>
            </div>

        </li>
    )
}

export default PlanteItem;