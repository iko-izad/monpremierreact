// Ce composant gère l'escalier de soin des plantes
function CareScale(propos){
    const lumiere = propos.lumiere;
    const typePlante = propos.typePlante;

    //
    const nbEscalier = [1,2,3];
    const typeDeCulture = typePlante ==='lumiere'? 'lumiere': 'Eau'


    return(
        <div>
            {nbEscalier.map((marcheEsalier) => (
                lumiere >= marcheEsalier ? <span key={nbEscalier.toString()}> {typeDeCulture}</span> : null
            ))}
        </div>
    )
}
export default CareScale;