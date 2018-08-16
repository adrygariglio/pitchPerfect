/*jshint node: true, esnext: true */
'use strict';

import '../styles/index.scss';
import $ from 'jquery';

let promise = $.get("http://5b72eacf414e970014304b0f.mockapi.io/V1/users");
promise.then(
  data  => console.log('success: ', data),
  error => console.log('error: ',   error)
);

// Pitch variables
let targetCustomer = [
    "i cani",
    "i pianisti",
    "i tirocinanti",
    "le melanzane",
    "i poveri",
    "i tecnici informatici",
    "i transformer",
    "gli architetti",
    "le Alaska Tunderfuck 500",
    "i dinosauri",
    "quelli del laboratorio",
    "quelli del GAR",
    "i neuroscienziati",
    "i ciclisti",
    "i ricercatori",
    "i bioingegneri",
    "i direttori d'orchestra",
    "gli infermieri",
    "i pallavolisti",
    "i nutrizionisti",
    "le scimmie allo zoo"
];

let customerNeed = [
    "fanno cose",
    "poi hanno fatto design",
    "vogliono fare un PhD",
    "credono che two is better than one",
    "hanno poco tempo",
    "hanno problemi di comunicazione",
    "cercano se stessi",
    "hanno un contratto da pochi mesi",
    "si spulciano il naso",
    "hanno il pancino delicato",
    "credono in Dio",
    "hanno 5 dita",
    "ricercano",
    "creano prototipi",
    "firmano i contratti",
    "applicano la blockchain",
    "sequenziano il DNA",
    "volevano fare ingegneria",
    "creano robot iperspaziali",
    "fanno bingewatching su Netflix",
    "installano software sull'infrastruttura di progetto",
    "vogliono recitare nella serie 'Sedie'",
    "devono scrivere proposte di progetto",
    "disegnano scarabocchi",
    "devono farsi dare un passaggio dal fratello in ospedale"
];

let serviceName = [
    "Colopax",
    "Etrox",
    "Primps",
    "Trupps",
    "Pippapau",
    "BugFoot",
    "Allocatoz",
    "Indices",
    "SheLSD",
    "Dripax",
    "Wipee",
    "SpaRAX",
    "Estive",
    "Sottraendo"
];

let marketCategory = [
    "un'applicazione web",
    "un drone",
    "un pedalò",
    "un collare",
    "un'innovazione fotonica",
    "un robot",
    "un carrello",
    "uno use case che non c'entra niente",
    "un algoritmo",
    "un machine learning in the brain",
    "una catena del valore",
    "una lavagna interattiva",
    "un'invenzione del futuro",
    "un'architettura",
    "una borsetta di tela",
    "un orecchino",
    "una libreria",
    "un requisito",
    "un badge",
    "una single button application",
    "uno schema a blocchi",
    "una magifantastica infografica",
    "uno usability test"
];

let oneKeyBenefit = [
    "evita collisioni tra umani",
    "ti manda un vocale di 10 minuti",
    "risolve la fame nel mondo",
    "aumenta la consapevolezza",
    "fa suonare un pianoforte con la mente",
    "prepara i workmeter",
    "assolve dai peccati",
    "lampeggia",
    "compila i timesheet",
    "cura lo stroke",
    "fa sventolare le bandiere",
    "scrive i requisiti funzionali",
    "dice dove trovare gli asset grafici",
    "ti controlla la postura",
    "scambia dati generici",
    "saluta gli operai dalla finestra",
    "allinea le figure in PowerPoint",
    "traduce dal mandarino al macedone",
    "fa la rendicontazione",
    "fa firmare un permesso d'uscita",
    "brilla al buio",
    "elenca le mutazioni del vicino di casa"
];

//DOM variables
let textArea  = document.getElementById('text-area'),
    newButton = document.getElementById('new-button');

newButton.addEventListener('click', function() {
    showPitches();
});

function drawIndex(maxIndex) {
    return Math.trunc(Math.random() * maxIndex);
}

function showPitches() {
    let randomTargetCustomerIdx = drawIndex(targetCustomer.length);
    let randomCustomerNeedIdx   = drawIndex(customerNeed.length);
    let randomServiceNameIdx    = drawIndex(serviceName.length);
    let randomMarketCategoryIdx = drawIndex(marketCategory.length);
    let randomOneKeyBenefitIdx  = drawIndex(oneKeyBenefit.length);

    textArea.innerText =
          `Per ${targetCustomer[randomTargetCustomerIdx]} che ${customerNeed[randomCustomerNeedIdx]}, ${serviceName[randomServiceNameIdx]} è ${marketCategory[randomMarketCategoryIdx]} che ${oneKeyBenefit[randomOneKeyBenefitIdx]}`;
}
