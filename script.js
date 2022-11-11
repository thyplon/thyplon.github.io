let quotes=[

    '"Jesteś slodka jak slodki ziemniak albo cukierek taki wiesz typu landrynka',
    '"Kocham cie bardziej niz fortnite',
    '"Dzisiaj to cretinie z pieknoscia przesadzilas',
    '"Jestes goraca jak lawa w minecrafcie a ja nie mam fire resistance',
    '"Z kazdym dniem co raz bardziej cie kocham wiesz?',
    '"Jakas randka?',
    '"Jestes najlepsza i nie daj sobie wmowic ze jest inaczej',
    '"Tesknie w chuj, like a lot',
    '"Chyba jakis mandacik za przekroczenie pieknosci',
    '"Jestes moze czerwona pochodnia? bo odpalasz moj piston',
    '"Przy tobie nawet fortnajt wyglada blado',
    '"Jestes giga slodziakemmmmmmmmmm',
    '"AAAAAAAAAAAAAAAAAAA i cant youre too cuteeeeee',
    '"Jak mozna byc tak slodkim i wyrozumialym jak ty?',
    '"Slodka jak miod żądli jak osa',
    '"Ale bym cie giga mocno przytulil',
    '"Why are you not here :C',
    '"Nie moge sie doczekac jakiegos spotkanka hihi',
    '"Mam nadzieje ze bedziesz miec zajebisty dzionek',
    '"Zaslugujesz na wszystko co najlepsze a masz mnie xD',
    '"On flexible skarbie dasz rade',
    '"Troche Usmiechu it suits you',
    '"I like your smile, i like the way you laugh',
    '"Nie moge bez ciebie zyc jak harry bez louisa',
    '"Mozesz mi powiedziec wszystko',
    '"Pamietaj ze jestes zawsze tu dla ciebie',
    '"Jakies przytulanki?',
    '"Powodzenia skarbie wiem ze dasz rade',
    '"Naucz mnie tanczyc pls',
    '"Spokojnie kto jak nie ty?',
    '"Jeszcze tylko troszke skarbie tylko troszke',
    '"<33333333',
    '"wysylam pozytywna energie',
    '"Drogie sa te pierscionki strasznie',
    '"Dochodzac do fundamentalnej konkluzji bierzemy slub',
    '"Skad to zwatpienie wiecej wiary <3',
    '"Kocham cie i zawsze bede jak pomyslisz przez sekunde inaczej to pogryze',
    '"Youre the only place i really belong<3',
    '"Youre the one i love',
    '"KOCHAM BARDZIEJ HAHA I NIE ODPOWIESZ MI WYGRALEEEEEEM',
    '"Ja jestem magikiem ty plyta betonowa <3',
    '"Obejrzymy shreka?',
    '"Moze jakis musical cos ten',
];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
//create an index of a random number 
//convert it into between 0 to length of quotes[]
let index=Math.floor(Math.random()*quotes.length);

//display the quote of that index
let div=document.querySelector('#quote');
let quote=`<div class="card">

<p>${quotes[index]}</p>

</div>
`;
div.innerHTML=quote;

}