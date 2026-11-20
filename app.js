
// Select DOM elements
const form = document.querySelector('#queue-form');
const codeInput = document.querySelector('#patient-code');
const serviceSelect = document.querySelector('#service-type');
const queueList = document.querySelector('#queue-list');

// Allow sample card's Served button to work
document.querySelectorAll('.served-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('.patient-card').remove();
  });
});

// Listen for form submission
form.addEventListener('submit', function (event) {

  // TODO 4: Prevent page reload
  event.preventDefault();

  const patientCode = codeInput.value.trim();
  const serviceName = serviceSelect.value;

  if (!patientCode) return;

  // Create patient card
  const card = document.createElement('article');
  card.classList.add('patient-card');

  const infoDiv = document.createElement('div');

  // Create patient code text
  const codeText = document.createElement('p');
  codeText.classList.add('code');

  // TODO 5: Safely display patient code
  codeText.textContent = patientCode;

  // Create service name text
  const serviceText = document.createElement('p');
  serviceText.classList.add('service');
  serviceText.textContent = serviceName;

  // Create Served button
  const servedBtn = document.createElement('button');
  servedBtn.type = 'button';
  servedBtn.classList.add('served-btn');
  servedBtn.textContent = 'Served';

  // TODO 6: Remove card after serving patient
  servedBtn.addEventListener('click', function () {
    card.remove();
  });

  // Assemble patient card
  infoDiv.appendChild(codeText);
  infoDiv.appendChild(serviceText);

  card.appendChild(infoDiv);
  card.appendChild(servedBtn);

  // Add card to the waiting queue
  queueList.appendChild(card);

  // Clear the input field
  codeInput.value = '';
});
