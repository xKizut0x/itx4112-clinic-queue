// Select DOM elements
const form = document.querySelector('#queue-form');
const codeInput = document.querySelector('#patient-code');
const serviceSelect = document.querySelector('#service-type');
const queueList = document.querySelector('#queue-list');
 
// Allow the sample starting card's "Served" button to work
document.querySelectorAll('.served-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('.patient-card').remove();
  });
});
 
// Listen for form submission
form.addEventListener('submit', function (event) {
  // TODO 4: Prevent the form reload
  // Stop the browser's default page refresh by adding: event.preventDefault();
  event.preventDefault();
 
  const patientCode = codeInput.value.trim();
  const serviceName = serviceSelect.value;
  if (!patientCode) return;
 
  // Create card elements in live DOM memory
  const card = document.createElement('article');
  card.classList.add('patient-card');
 
  const infoDiv = document.createElement('div');
 
  const codeText = document.createElement('p');
  codeText.classList.add('code');
  // TODO 5: Create cards with textContent
  // Safely set codeText's text using .textContent (never .innerHTML!):
  // codeText.textContent = ???;
  codeText.textContent = patientCode
 
  const serviceText = document.createElement('p');
  serviceText.classList.add('service');
  serviceText.textContent = serviceName;
 
  const servedBtn = document.createElement('button');
  servedBtn.type = 'button';
  servedBtn.classList.add('served-btn');
  servedBtn.textContent = 'Served';
 
  // TODO 6: Remove a served queue card
  // Add a click listener to servedBtn that calls card.remove();
  // servedBtn.addEventListener('click', function () { ... });
  servedBtn.addEventListener('click', function () {
    card.remove();
  });
 
  // Assemble and append the card to #queue-list
  infoDiv.appendChild(codeText);
  infoDiv.appendChild(serviceText);
  card.appendChild(infoDiv);
  card.appendChild(servedBtn);
  queueList.appendChild(card);
 
  // Reset input
  codeInput.value = '';
});
 