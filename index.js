function calcul(prixTotal, argentClient){
    // On définjt le système monétaire
    var euros = {
        c1: 0.01,
        c2: 0.02,
        c5: 0.05,
        c10: 0.1,
        c20: 0.2,
        c50: 0.5,
        e1: 1,
        e2: 2,
        b5: 5,
        b10: 10,
        b20: 20,
        b50: 50,
        b100: 100,
        b200: 200
    }
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
    }
    var diff = argentClient - prixTotal;

    var count = 0;

    var resu = verifMonnaie ()

   

    // On retourne le rendu par le commerçant
    var rendu = {
        c1: 0,
        c2: 0,
        c5: 0,
        c10: 0,
        c20: 0,
        c50: 0,
        e1: 0,
        e2: 0,
        b5: 0,
        b10: 0,
        b20: 0,
        b50: 0,
        b100: 0,
        b200: 0
    }

    if (count == rendu){
        return  rendu
    }
   
}
calcul(57.32, 100)