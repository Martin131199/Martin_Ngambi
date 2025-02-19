document.addEventListener('DOMContentLoaded', function () {
    const certificateContainer = document.getElementById('certificate-container');
    const modal = document.getElementById('pdf-modal');
    const modalContent = document.getElementById('pdf-viewer');
    const closeModal = document.getElementById('close-modal');

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

        const cleanTitle = decodeURIComponent(filename.replace('.pdf', ''));

        const nameElement = document.createElement('h3');
        nameElement.textContent = cleanTitle;
        certificateCard.appendChild(nameElement);

        // Button to open the PDF in a modal
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View PDF';
        viewButton.addEventListener('click', function () {
            modalContent.src = baseURL + filename;
            modal.style.display = 'block';
        });

        // Button to download the PDF
        const downloadButton = document.createElement('a');
        downloadButton.textContent = 'Download';
        downloadButton.href = baseURL + filename;
        downloadButton.download = filename;
        downloadButton.classList.add('download-btn');

        certificateCard.appendChild(viewButton);
        certificateCard.appendChild(downloadButton);
        certificateContainer.appendChild(certificateCard);
    });

    // Close modal when clicking the close button
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        modalContent.src = ''; // Reset the viewer
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalContent.src = ''; 
        }
    });
});
