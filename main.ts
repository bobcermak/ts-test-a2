
type Hodnoceni = {
    jmeno: string,
    znamka: number
}
// Máte seznam jmen a známek studentů ve třídě. 
// Například: 
let znamky: Array<Hodnoceni> = [
    { jmeno: "Petr", znamka: 2 },
    { jmeno: "Anna", znamka: 1 },
    { jmeno: "Jana", znamka: 3 },
    { jmeno: "David", znamka: 1 }
]
/* 
Napište algoritmus, který vytvoří nový seznam 
obsahující pouze jména studentů s nejlepší známkou. 
Pokud je více studentů se stejnou nejlepší známkou, 
zahrňte je všechny do seznamu.
*/

let bestZnamka = 5
const novySeznam: Array<string> = []; //Například: ["Anna", "David"].


for (let i of znamky) {
    if (i.znamka <= bestZnamka) {
        bestZnamka = i.znamka
    }
}

for (let i of znamky) {
    if (i.znamka === bestZnamka) {
        novySeznam.push(i.jmeno)
    }
}











console.logValue("šprti: ", novySeznam)
