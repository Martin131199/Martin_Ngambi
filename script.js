document.addEventListener('DOMContentLoaded', function () {
    const certificateContainer = document.getElementById('certificate-container');
    const pdfViewer = document.getElementById('pdf-viewer');

    // List of certificates
    const certificates = [
        "ESG%20Risks%20and%20Opportunities.pdf",
        "Corporate%20Sustainability_%20%20Strategic%20Opportunity.pdf",
        "Sustainability%20Consulting.pdf",
        "Introduction%20to%20Physical%20Chemistry.pdf",
        "Quantum%20Mechanics.pdf"
    ];

    // Base URL from GitHub Pages
    const baseURL = "https://martinngambi.github.io/portfolio_website/";

    certificates.forEach(filename => {
        const certificateCard = document.createElement('div');
        certificateCard.classList.add('certificate-card');

        const nameElement = document.createElement('h3');
        nameElement.textContent = filename.replace(/%20/g, ' ').replace('.pdf', '');
        certificateCard.appendChild(nameElement);

        // Button to open the PDF inside the browser
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View PDF';
        viewButton.addEventListener('click', function () {
            pdfViewer.src = baseURL + filename; // Open in embedded viewer
        });

        certificateCard.appendChild(viewButton);
        certificateContainer.appendChild(certificateCard);
    });
});

