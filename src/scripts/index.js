import '../styles/index.scss';

//Pitch variables
let targetCustomer = [
      'cani',
      'tirocinanti',
      'poveri',
      'tecnci informatici',
      'quelli li'];

let customerNeed = [
      'fanno cose',
      'hanno poco tempo',
      'hanno problemi di comunicazione',
      'credono in Dio',
      'hanno 5 dita'];

let serviceName = [
      'Colopax',
      'Etrox',
      'Primps',
      'Trupps',
      'Cosa'];

let marketCategory = [
      'applicazione web',
      'drone',
      'pedalò',
      'collare',
      'innovazione fotonica',
      'cosa',
      'machine learning in the brain'];

let oneKeyBenefit = [
    'evita collisioni tra umani',
    'risolve la fame nel mondo',
    'aumenta la consapevolezza',
    'fa cose'];

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
          `Per ${targetCustomer[randomTargetCustomerIdx]} che ${customerNeed[randomCustomerNeedIdx]}, ${serviceName[randomServiceNameIdx]} è un ${marketCategory[randomMarketCategoryIdx]} che ${oneKeyBenefit[randomOneKeyBenefitIdx]}`;
}
