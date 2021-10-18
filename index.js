function verifMonnaie(somme, euros, caisse){
    if(somme){


    var res = 0
    for(items in euros){
        var elem = euros[items];
        if(elem < somme){
            var prod = somme / elem;
            var unit = Math.trunc(prod)
            var res = unit * elem
            
        }
    }
    var reste = somme - res
    console.log('reste');

    console.log(reste)
    if(reste == somme){
        return rendu
    }else{
        verifMonnaie(reste, euros, caisse)
    }

    }
}

function calcul(prixTotal, argentClient){

    // On crée un objet qui définit le rendu par pièce
    var rendu = {
        b200: 0,
        b100: 0,
        b50: 0,
        b20: 0,
        b10: 0,
        b5: 0,
        e2: 0,
        e1: 0,
        c50: 0,
        c20: 0,
        c10: 0,
        c5: 0,
        c2: 0,
        c1: 0
    };
    // On définjt le système monétaire
    var euros = {
        b200: 200,
        b100: 100,
        b50: 50,
        b20: 20,
        b10: 10,
        b5: 5,
        e2: 2,
        e1: 1,
        c50: 0.5,
        c20: 0.2,
        c10: 0.1,
        c5: 0.05,
        c2: 0.02,
        c1: 0.01
    };
    // On définit le nombre de pièces de chaque sorte contenues dans la caisse
    var caisse = {
        c1: 10,
        c2: 2,
        c5: 20,
        c10: 40,
        c20: 50,
        c50: 88,
        e1: 20,
        e2: 40,
        b5: 20,
        b10: 30,
        b20: 10,
        b50: 10,
        b100: 5,
        b200: 2
    };
    // On définit la somme à rendre au client
    var diff = argentClient - prixTotal;
    console.log('diff')
    console .log(diff)
    var resu = verifMonnaie(diff, euros, caisse)
    console.log('rendu');
    console.log(resu)

    // On retourne le rendu par le commerçant

    /*if (count == diff){
        return  rendu
    }*/
   
}
calcul(57.32, 100)