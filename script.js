document.addEventListener('DOMContentLoaded', function () {
    const certificateContainer = document.getElementById('certificate-container');
    const pdfViewer = document.getElementById('pdf-viewer');
    const modal = document.getElementById('pdf-modal');
    const closeModal = document.getElementById('close-modal');

    // List of certificates
    const certificates = [
        { filename: "ESG%20Risks%20and%20Opportunities.pdf", title: "ESG Risks and Opportunities" },
        { filename: "Corporate%20Sustainability_%20%20Strategic%20Opportunity.pdf", title: "Corporate Sustainability: Strategic Opportunity" },
        { filename: "Sustainability%20Consulting.pdf", title: "Sustainability Consulting" },
        { filename: "Introduction%20to%20Physical%20Chemistry.pdf", title: "Introduction to Physical Chemistry" },
        { filename: "Quantum%20Mechanics.pdf", title: "Quantum Mechanics" }
    ];

    // Base URL from GitHub Pages
    const baseURL = "https://martinngambi.github.io/portfolio_website/";

    certificates.forEach(cert => {
        const certificateCard = document.createElement('div');
        certificateCard.classList.add('certificate-card');

        const nameElement = document.createElement('h3');
        nameElement.textContent = cert.title;
        certificateCard.appendChild(nameElement);

        // View Button - Opens PDF in Modal
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View PDF';
        viewButton.addEventListener('click', function () {
            pdfViewer.src = baseURL + cert.filename;
            modal.style.display = "flex";
        });

        // Download Button - Directly Downloads PDF
        const downloadButton = document.createElement('a');
        downloadButton.textContent = "Download";
        downloadButton.href = baseURL + cert.filename;
        downloadButton.classList.add("download-btn");
        downloadButton.download = cert.filename;

        certificateCard.appendChild(viewButton);
        certificateCard.appendChild(downloadButton);
        certificateContainer.appendChild(certificateCard);
    });

    // Close Modal Functionality
    closeModal.addEventListener('click', function () {
        modal.style.display = "none";
        pdfViewer.src = "";
    });

    // Close Modal if Click Outside Content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            pdfViewer.src = "";
        }
    });
});
