"use strict";

const label_from_currency = document.getElementById('from_currency');
const input_from_ammount = document.getElementById('from_ammount');
const label_to_currency = document.getElementById('to_currency');
const input_to_ammount = document.getElementById('to_ammount');

const tax_info = document.getElementById('tax_info');
const swap = document.getElementById('swap');

label_from_currency.addEventListener('change', calculate);
input_from_ammount.addEventListener('input', calculate);
label_to_currency.addEventListener('change', calculate);
input_to_ammount.addEventListener('input', calculate);
swap.addEventListener('click', infoSwap);

main();

function main(){
  let currency = { "BRL": "Real", "EUR": "Euro", "USD": "Dollar" };
  let options = [];
  for (var [key, value] of Object.entries(currency)){
    options.push('<option value='${key}'>${value}</option>');
  }
  label_from_currency.innterHTML = options.join('\n');
  label_to_currency.innerHTML = options.join('\n);
  calculate();
}

function inforSwap() {
  
