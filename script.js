document.addEventListener('DOMContentLoaded', function () {
    const certificateContainer = document.getElementById('certificate-container');
    const pdfViewer = document.getElementById('pdf-viewer');

    // List of certificate filenames
    const certificates = [
        "ESG%20Risks%20and%20Opportunities.pdf",
        "Corporate%20Sustainability_%20%20Strategic%20Opportunity.pdf",
        "Sustainability%20Consulting.pdf",
        "Introduction%20to%20Physical%20Chemistry.pdf",
        "Quantum%20Mechanics.pdf"
    ];

    // GitHub Pages Base URL (Replace with your actual GitHub Pages URL)
    const baseURL = "https://martinngambi.github.io/portfolio_website/";

    certificates.forEach(filename => {
        const certificateCard = document.createElement('div');
        certificateCard.classList.add('certificate-card');

        // Display certificate name
        const nameElement = document.createElement('h3');
        nameElement.textContent = filename.replace(/%20/g, ' ').replace('.pdf', '');
        certificateCard.appendChild(nameElement);

        // Add "View PDF" button
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View PDF';
        viewButton.addEventListener('click', function () {
            pdfViewer.src = baseURL + filename; // Correct URL for GitHub Pages
        });

        certificateCard.appendChild(viewButton);
        certificateContainer.appendChild(certificateCard);
    });
});
