
// Select DOM Elements
const form = document.querySelector('#queue-form');
const codeInput = document.querySelector('#patient-code');
const serviceSelect = document.querySelector('#service-type');
const queueList = document.querySelector('#queue-list');

// Existing sample card's Served button
document.querySelectorAll('.served-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('.patient-card').remove();
  });
});

// Listen for form submission
form.addEventListener('submit', function (event) {

  // TODO 4: Stop page from reloading
  event.preventDefault();

  // Get form values
  const patientCode = codeInput.value.trim();
  const serviceName = serviceSelect.value;

  // Validate patient code
  if (!patientCode) {
    return;
  }

  // Create patient card
  const card = document.createElement('article');
  card.classList.add('patient-card');

  // Create information container
  const infoDiv = document.createElement('div');

  // Create patient code element
  const codeText = document.createElement('p');
  codeText.classList.add('code');

  // TODO 5: Safe text output
  codeText.textContent = patientCode;

  // Create service element
  const serviceText = document.createElement('p');
  serviceText.classList.add('service');
  serviceText.textContent = serviceName;

  // Create Served button
  const servedBtn = document.createElement('button');
  servedBtn.type = 'button';
  servedBtn.classList.add('served-btn');
  servedBtn.textContent = 'Served';

  // TODO 6: Remove patient card when served
  servedBtn.addEventListener('click', function () {
    card.remove();
  });

  // Assemble patient information
  infoDiv.appendChild(codeText);
  infoDiv.appendChild(serviceText);

  // Assemble patient card
  card.appendChild(infoDiv);
  card.appendChild(servedBtn);

  // Add patient to waiting queue
  queueList.appendChild(card);

  // Clear patient code input
  codeInput.value = '';

  // Focus input for next patient
  codeInput.focus();

});
