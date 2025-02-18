document.getElementById('certificate-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const certificateName = document.getElementById('certificate-name').value;
  const certificatePdf = document.getElementById('certificate-pdf').files[0];

  // Create a new certificate card
  const certificateCard = document.createElement('div');
  certificateCard.classList.add('certificate-card');

  // Add certificate name
  const nameElement = document.createElement('h3');
  nameElement.textContent = certificateName;
  certificateCard.appendChild(nameElement);

  // Add a link to view/download the PDF
  const pdfLink = document.createElement('a');
  pdfLink.textContent = 'View/Download PDF';
  pdfLink.href = URL.createObjectURL(certificatePdf);
  pdfLink.target = '_blank'; // Open in a new tab
  certificateCard.appendChild(pdfLink);

  // Add the card to the container
  document.getElementById('certificate-container').appendChild(certificateCard);

  // Reset the form
  document.getElementById('certificate-form').reset();
});