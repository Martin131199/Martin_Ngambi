document.addEventListener('DOMContentLoaded', function () {
  const certificateContainer = document.getElementById('certificate-container');

  // GitHub Repository Information
  const username = "martinngambi"; // Your GitHub username
  const repo = "portfolio_website"; // Your repository name
  const path = ""; // Folder is directly in the root of the repository, so the path is an empty string

  // GitHub API to list files in the repository
  fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        const noCertificatesMessage = document.createElement('p');
        noCertificatesMessage.textContent = 'No certificates found.';
        certificateContainer.appendChild(noCertificatesMessage);
      } else {
        data.forEach(file => {
          if (file.name.endsWith('.pdf')) {
            const certificateCard = document.createElement('div');
            certificateCard.classList.add('certificate-card');

            // Add certificate name
            const nameElement = document.createElement('h3');
            nameElement.textContent = file.name.replace('.pdf', '');
            certificateCard.appendChild(nameElement);

            // Add a link to view/download the PDF
            const pdfLink = document.createElement('a');
            pdfLink.textContent = 'View/Download PDF';
            pdfLink.href = file.download_url;
            pdfLink.target = '_blank';
            certificateCard.appendChild(pdfLink);

            // Add the card to the container
            certificateContainer.appendChild(certificateCard);
          }
        });
      }
    })
    .catch(error => console.error('Error fetching certificates:', error));
});
