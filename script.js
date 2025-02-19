document.addEventListener('DOMContentLoaded', function () {
  const certificateContainer = document.getElementById('certificate-container');
  const pdfViewer = document.getElementById('pdf-viewer');

  // List of certificates
  const certificates = [
    {
      name: "ESG Risks & Opportunities",
      url: "https://raw.githubusercontent.com/martinngambi/portfolio_website/main/ESG%20Risks%20%26%20Opportunities.pdf"
    },
    {
      name: "Corporate Sustainability - Strategic Opportunity",
      url: "https://raw.githubusercontent.com/martinngambi/portfolio_website/main/Corporate%20Sustainability_%20%20Strategic%20Opportunity.pdf"
    },
    {
      name: "Sustainability Consulting",
      url: "https://raw.githubusercontent.com/martinngambi/portfolio_website/main/Sustainability%20Consulting.pdf"
    },
    {
      name: "Introduction to Physical Chemistry",
      url: "https://raw.githubusercontent.com/martinngambi/portfolio_website/main/Introduction%20to%20Physical%20Chemistry.pdf"
    },
    {
      name: "Quantum Mechanics",
      url: "https://raw.githubusercontent.com/martinngambi/portfolio_website/main/Quantum%20Mechanics.pdf"
    }
  ];

  // Loop through the certificates and create clickable elements
  certificates.forEach(cert => {
    const certificateCard = document.createElement('div');
    certificateCard.classList.add('certificate-card');

    // Add certificate name
    const nameElement = document.createElement('h3');
    nameElement.textContent = cert.name;
    certificateCard.appendChild(nameElement);

    // Add a button to view the PDF inside the website
    const viewButton = document.createElement('button');
    viewButton.textContent = 'View Certificate';
    viewButton.onclick = function () {
      pdfViewer.src = cert.url; // Load the PDF inside the iframe
    };

    certificateCard.appendChild(viewButton);
    certificateContainer.appendChild(certificateCard);
  });
});
