import '../styles/index.scss';
import $ from 'jquery';

let promise = $.get("http://5b72eacf414e970014304b0f.mockapi.io/V1/users");
promise.then(
  data => console.log('success: ', data),
  error => console.log('error: ', error)
);

//Pitch variables
let targetCustomer = [
      'i cani',
      'i pianisti',
      'i tirocinanti',
      'le melanzane',
      'i poveri',
      'i tecnici informatici',
      'i transformer',
      'gli architetti',
      'le Alaska Tunderfuck 500'];

let customerNeed = [
      'fanno cose',
      'che poi hanno fatto design',
      'volgiono fare un PhD',
      'credono che two is better than one',
      'hanno poco tempo',
      'hanno problemi di comunicazione',
      'cercano se stessi',
      'hanno un contratto da pochi mesi',
      'si spulciano il naso',
      'hanno il pancino delicato',
      'credono in Dio',
      'hanno 5 dita'];

let serviceName = [
      'Colopax',
      'Etrox',
      'Primps',
      'Trupps',
      'Pippapau',
      'BugFoot',
      'Allocatoz',
      'Indices',
      'SheLSD'];

let marketCategory = [
      'un\'applicazione web',
      'un drone',
      'un pedalò',
      'un collare',
      'un\'innovazione fotonica',
      'un robot',
      'un carrello',
      'uno use case che non centra niente',
      'un algoritmo',
      'un machine learning in the brain'];

let oneKeyBenefit = [
      'evita collisioni tra umani',
      'ti manda un vocale di 10 minuti',
      'risolve la fame nel mondo',
      'aumenta la consapevolezza',
      'fa suonare un pianoforte con la mente',
      'prepara i workmeter',
      'assolve dai peccati',
      'lampeggia'];

//DOM variables
let textArea = document.getElementById('text-area'),
    newButton = document.getElementById('new-button');

newButton.addEventListener('click', function() {
  showPitches();
});

function drawIndex(maxIndex) {
  return Math.trunc(Math.random() * maxIndex);
}

function showPitches() {
  let randomTargetCustomerIdx = drawIndex(targetCustomer.length);
  let randomCustomerNeedIdx = drawIndex(customerNeed.length);
  let randomServiceNameIdx = drawIndex(serviceName.length);
  let randomMarketCategoryIdx = drawIndex(marketCategory.length);
  let randomOneKeyBenefitIdx = drawIndex(oneKeyBenefit.length);

  textArea.innerText =
          `Per ${targetCustomer[randomTargetCustomerIdx]} che ${customerNeed[randomCustomerNeedIdx]}, ${serviceName[randomServiceNameIdx]} è ${marketCategory[randomMarketCategoryIdx]} che ${oneKeyBenefit[randomOneKeyBenefitIdx]}`;
}
