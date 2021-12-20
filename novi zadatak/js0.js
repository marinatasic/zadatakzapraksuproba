//trazim sve elemente u dokumentu koje u sebi imaju klasu akcija da bi obuhvatio sve akcije
let akcije = document.querySelectorAll('.akcija')
//dodajem jedan aktivan zato sto je na pocetku uvek prvi aktivan
let aktivanIndeks = 0;

//ovo je funkcija koja se poziva kad se desi neki eventlistener
function klik(mojargument) {
    //prolazim kroz sve akcije(dugmice)
    for (let i=0; i<akcije.length; i++){
        //skidam im klasu active zato sto je mozda neki vec aktivan i da ne bi stalno dodavao active klasu
        akcije[i].classList.remove('active')
    }
    //trenutnom argumentu(nodu) dodam active klasu zato sto je na njega kliknuto 
    mojargument.classList.add('active')
    //izvlacimo atribut data-selektor iz elementa-mojargument koji je ustvari node
    let selektor = mojargument.getAttribute('data-selektor')
    //izvlacim sve elemente koji se sakrivaju i prikazuju(sve elemente koje grupisem)
    let elementi = document.querySelectorAll('.akcije')
    //prolazim kroz izvucene elemente
    for (let i=0; i<elementi.length; i++){
        //proveravam da li trenutni element sadrzi klasu koja se meni nalazi u akciji(buttonu, nodu)
        if(elementi[i].classList.contains(selektor)){
            //s obzirom da odgovara pokazujem ga tako sto skidam klasu hide
            elementi[i].classList.remove('hide')

        }else{
            //s obzirom da ne sadrzi klasu krijem ga dodavanjem klase hide
            elementi[i].classList.add('hide')
        }
    }
}
//prolazimo kroz duzinu cele akcije 
for (let i=0; i<akcije.length; i++){
    //stampam jednu akciju 
    console.log(akcije[i])
    //jednoj akciji(nodu) dodajem eventlistener koji ce da slusa kad se klikne i pozovu funkciju klik
    //prosledjujem deklaraciju funkcije a ne pozivam je sa zagradama zato sto je poziva eventlistener
    //akcije[i].addEventListener('click', klik)
    //dodajem eventlistener na jedan nod
    let node = akcije[i]
    //zato sto ne mogu da prosledim argumente funkciji inace bi je pozvala ja pravim anonimnu inline funkciju koja ce da poziva moju funkciju sa argumentima koje zelim
    node.addEventListener('click', function () {
        klik(node)
        aktivanIndeks = i;
    } )
}

let levo = document.querySelector('#levo');
let desno = document.querySelector('#desno');


levo.addEventListener('click', function () {
    aktivanIndeks = (akcije.length + aktivanIndeks - 1) % akcije.length;
    klik(akcije[aktivanIndeks])
})

desno.addEventListener('click', function () {
    aktivanIndeks = (aktivanIndeks + 1) % akcije.length;
    klik(akcije[aktivanIndeks])
})
