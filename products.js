// Comprehensive Products Database
const productsDatabase = [
    // Grail Products
    {
        name: "Galleri®",
        company: "grail",
        companyName: "Grail",
        type: "mced",
        typeName: "MCED",
        sample: "Blood",
        application: "screening",
        applicationName: "Cancer Screening",
        description: "Multi-cancer early detection test that screens for 50+ cancer types through blood analysis",
        features: ["50+ cancer types", "Tissue of origin prediction", "Methylation analysis", "Machine learning algorithms"],
        clinicalUse: "Early cancer detection and screening"
    },

    // Guardant Health Products
    {
        name: "Guardant360®",
        company: "guardant",
        companyName: "Guardant Health",
        type: "cgp",
        typeName: "CGP",
        sample: "Blood",
        application: "treatment",
        applicationName: "Treatment Selection",
        description: "Comprehensive genomic profiling test analyzing circulating tumor DNA for advanced cancer patients",
        features: ["73+ genes", "ctDNA analysis", "FDA approved", "Treatment guidance"],
        clinicalUse: "Treatment selection and resistance monitoring"
    },
    {
        name: "GuardantOMNI®",
        company: "guardant",
        companyName: "Guardant Health",
        type: "cgp",
        typeName: "CGP",
        sample: "Blood",
        application: "treatment",
        applicationName: "Treatment Selection",
        description: "Expanded genomic profiling test for comprehensive cancer analysis",
        features: ["500+ genes", "Enhanced sensitivity", "Research applications", "Biomarker discovery"],
        clinicalUse: "Comprehensive genomic profiling for research and treatment"
    },
    {
        name: "Guardant Reveal™",
        company: "guardant",
        companyName: "Guardant Health",
        type: "liquid",
        typeName: "Liquid Biopsy",
        sample: "Blood",
        application: "screening",
        applicationName: "CRC Screening",
        description: "Blood-based colorectal cancer screening test",
        features: ["ctDNA detection", "Non-invasive", "Colorectal focus", "Screening complement"],
        clinicalUse: "Colorectal cancer screening and early detection"
    },
    {
        name: "GuardantINFORM™",
        company: "guardant",
        companyName: "Guardant Health",
        type: "tissue",
        typeName: "Tissue CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Treatment Planning",
        description: "Tissue-based comprehensive genomic profiling test",
        features: ["Tissue analysis", "Genomic profiling", "Treatment matching", "Biomarker testing"],
        clinicalUse: "Tissue-based treatment planning and biomarker analysis"
    },

    // Natera Products
    {
        name: "Panorama™",
        company: "natera",
        companyName: "Natera",
        type: "nipt",
        typeName: "NIPT",
        sample: "Blood",
        application: "prenatal",
        applicationName: "Prenatal Screening",
        description: "Non-invasive prenatal testing for chromosomal abnormalities",
        features: ["SNP-based technology", "High accuracy", "Low false positive rate", "Multiple conditions"],
        clinicalUse: "Prenatal screening for chromosomal abnormalities"
    },
    {
        name: "Horizon™",
        company: "natera",
        companyName: "Natera",
        type: "carrier",
        typeName: "Carrier Screening",
        sample: "Blood/Saliva",
        application: "hereditary",
        applicationName: "Genetic Screening",
        description: "Expanded carrier screening for inherited genetic conditions",
        features: ["274+ conditions", "High detection rate", "Comprehensive analysis", "Family planning"],
        clinicalUse: "Carrier screening for family planning"
    },
    {
        name: "Signatera™",
        company: "natera",
        companyName: "Natera",
        type: "mrd",
        typeName: "MRD",
        sample: "Blood",
        application: "monitoring",
        applicationName: "Disease Monitoring",
        description: "Personalized circulating tumor DNA test for molecular residual disease detection",
        features: ["Personalized ctDNA", "MRD detection", "Recurrence monitoring", "Treatment response"],
        clinicalUse: "Post-treatment monitoring and MRD detection"
    },
    {
        name: "Prospera™",
        company: "natera",
        companyName: "Natera",
        type: "monitoring",
        typeName: "Transplant Monitoring",
        sample: "Blood",
        application: "monitoring",
        applicationName: "Transplant Monitoring",
        description: "Kidney transplant rejection surveillance test",
        features: ["Non-invasive monitoring", "Rejection detection", "Complement to biopsy", "Early warning"],
        clinicalUse: "Kidney transplant rejection monitoring"
    },

    // Tempus Products
    {
        name: "Tempus|xT",
        company: "tempus",
        companyName: "Tempus",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Treatment Selection",
        description: "Comprehensive genomic profiling with 648 genes plus whole transcriptome sequencing",
        features: ["648+ genes", "RNA sequencing", "AI insights", "Clinical database"],
        clinicalUse: "Comprehensive cancer profiling for treatment planning"
    },
    {
        name: "Tempus|xF",
        company: "tempus",
        companyName: "Tempus",
        type: "liquid",
        typeName: "Liquid Biopsy",
        sample: "Blood",
        application: "monitoring",
        applicationName: "Disease Monitoring",
        description: "Liquid biopsy test analyzing 105 genes for treatment guidance",
        features: ["105 genes", "ctDNA analysis", "Treatment monitoring", "Resistance tracking"],
        clinicalUse: "Liquid biopsy for treatment monitoring and selection"
    },
    {
        name: "Tempus|xE",
        company: "tempus",
        companyName: "Tempus",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Research & Treatment",
        description: "Whole exome plus whole transcriptome sequencing for comprehensive analysis",
        features: ["Whole exome", "Whole transcriptome", "Research grade", "Maximum coverage"],
        clinicalUse: "Comprehensive genomic analysis for research and treatment"
    },
    {
        name: "Tempus|HLA-LOH",
        company: "tempus",
        companyName: "Tempus",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Immunotherapy Selection",
        description: "HLA loss of heterozygosity assay for immunotherapy selection",
        features: ["HLA analysis", "Immunotherapy prediction", "LOH detection", "Treatment matching"],
        clinicalUse: "Immunotherapy selection and efficacy prediction"
    },

    // Caris Life Sciences Products
    {
        name: "MI Profile®",
        company: "caris",
        companyName: "Caris",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Treatment Planning",
        description: "Comprehensive molecular profiling with WES, WTS, and protein analysis",
        features: ["23,000+ genes", "WES + WTS", "Protein analysis", "AI predictions"],
        clinicalUse: "Comprehensive molecular profiling for treatment selection"
    },
    {
        name: "Caris Assure®",
        company: "caris",
        companyName: "Caris",
        type: "liquid",
        typeName: "Liquid Biopsy",
        sample: "Blood",
        application: "treatment",
        applicationName: "Treatment Selection",
        description: "Blood-based whole exome and transcriptome sequencing",
        features: ["WES from blood", "WTS from blood", "cNAS technology", "Minimal invasive"],
        clinicalUse: "Blood-based comprehensive profiling for treatment decisions"
    },
    {
        name: "MI Transcriptome®",
        company: "caris",
        companyName: "Caris",
        type: "tissue",
        typeName: "Transcriptome",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Gene Expression",
        description: "Whole transcriptome sequencing for gene expression analysis",
        features: ["RNA sequencing", "Gene expression", "Pathway analysis", "Biomarker discovery"],
        clinicalUse: "Gene expression profiling for treatment insights"
    },
    {
        name: "MI OTNS®",
        company: "caris",
        companyName: "Caris",
        type: "tissue",
        typeName: "Tissue Analysis",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Drug Sensitivity",
        description: "Organoid drug sensitivity testing for personalized treatment",
        features: ["Organoid testing", "Drug sensitivity", "Personalized approach", "Functional testing"],
        clinicalUse: "Functional drug testing for personalized treatment selection"
    }
];

// Filter state management
let currentFilters = {
    company: 'all',
    productTypes: [],
    applications: [],
    search: ''
};

// DOM elements
let tableBody;
let searchInput;
let resultsSummary;
let resultsCount;
let noResults;
let companySelect;
let typeCheckboxes;
let applicationCheckboxes;

// Initialize the products page
document.addEventListener('DOMContentLoaded', function() {
    tableBody = document.getElementById('productsTableBody');
    searchInput = document.getElementById('productSearch');
    resultsSummary = document.getElementById('resultsSummary');
    resultsCount = document.getElementById('resultsCount');
    noResults = document.getElementById('noResults');
    companySelect = document.getElementById('companySelect');
    typeCheckboxes = document.querySelectorAll('.type-checkbox');
    applicationCheckboxes = document.querySelectorAll('.application-checkbox');

    // Set up event listeners
    setupFilterListeners();
    setupSearchListener();
    setupMobileToggle();
    setupViewToggle();
    setupClearFilters();

    // Initial render
    renderProducts();
    updateResultsCount();
});

// Set up filter listeners
function setupFilterListeners() {
    // Company dropdown
    companySelect.addEventListener('change', function() {
        currentFilters.company = this.value;
        renderProducts();
        updateResultsCount();
    });

    // Product type checkboxes
    typeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                currentFilters.productTypes.push(this.value);
            } else {
                currentFilters.productTypes = currentFilters.productTypes.filter(type => type !== this.value);
            }
            renderProducts();
            updateResultsCount();
        });
    });

    // Application checkboxes
    applicationCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                currentFilters.applications.push(this.value);
            } else {
                currentFilters.applications = currentFilters.applications.filter(app => app !== this.value);
            }
            renderProducts();
            updateResultsCount();
        });
    });
}

// Set up search listener
function setupSearchListener() {
    searchInput.addEventListener('input', function() {
        currentFilters.search = this.value.toLowerCase().trim();
        renderProducts();
        updateResultsCount();
    });
}

// Set up additional functionality
function setupMobileToggle() {
    const mobileToggle = document.getElementById('mobileFilterToggle');
    const sidebar = document.querySelector('.filters-sidebar');

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    mobileToggle.addEventListener('click', function() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
}

function setupViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const tableView = document.getElementById('tableView');
    const gridView = document.getElementById('gridView');

    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;

            // Update active button
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Switch views
            if (view === 'table') {
                tableView.style.display = 'block';
                gridView.style.display = 'none';
            } else {
                tableView.style.display = 'none';
                gridView.style.display = 'block';
                renderGridView();
            }
        });
    });
}

function setupClearFilters() {
    const clearBtn = document.getElementById('clearFilters');

    clearBtn.addEventListener('click', function() {
        // Reset all filters
        currentFilters.company = 'all';
        currentFilters.productTypes = [];
        currentFilters.applications = [];
        currentFilters.search = '';

        // Reset UI elements
        companySelect.value = 'all';
        typeCheckboxes.forEach(checkbox => checkbox.checked = false);
        applicationCheckboxes.forEach(checkbox => checkbox.checked = false);
        searchInput.value = '';

        // Re-render
        renderProducts();
        updateResultsCount();
    });
}

// Filter products based on current filters
function getFilteredProducts() {
    return productsDatabase.filter(product => {
        // Company filter
        const companyMatch = currentFilters.company === 'all' || product.company === currentFilters.company;

        // Product type filter (checkbox array)
        const typeMatch = currentFilters.productTypes.length === 0 ||
                         currentFilters.productTypes.includes(product.type);

        // Application filter (checkbox array)
        const applicationMatch = currentFilters.applications.length === 0 ||
                                currentFilters.applications.includes(product.application);

        // Search filter
        const searchMatch = currentFilters.search === '' ||
            product.name.toLowerCase().includes(currentFilters.search) ||
            product.description.toLowerCase().includes(currentFilters.search) ||
            product.features.some(feature => feature.toLowerCase().includes(currentFilters.search)) ||
            product.clinicalUse.toLowerCase().includes(currentFilters.search) ||
            product.companyName.toLowerCase().includes(currentFilters.search);

        return companyMatch && typeMatch && applicationMatch && searchMatch;
    });
}

// Render products table
function renderProducts() {
    const filteredProducts = getFilteredProducts();

    if (filteredProducts.length === 0) {
        tableBody.innerHTML = '';
        noResults.style.display = 'block';
        document.querySelector('.products-table-wrapper').style.display = 'none';
        return;
    }

    noResults.style.display = 'none';
    document.querySelector('.products-table-wrapper').style.display = 'block';

    tableBody.innerHTML = filteredProducts.map(product => `
        <tr data-company="${product.company}" data-type="${product.type}" data-application="${product.application}">
            <td>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
            </td>
            <td>
                <span class="company-badge badge-${product.company}">${product.companyName}</span>
            </td>
            <td>
                <span class="product-type-badge type-${product.type}">${product.typeName}</span>
            </td>
            <td>${product.sample}</td>
            <td>${product.applicationName}</td>
            <td>
                <ul style="margin: 0; padding-left: 1rem; color: #4a5568; font-size: 0.9rem;">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </td>
        </tr>
    `).join('');
}

// Update results count
function updateResultsCount() {
    const filteredProducts = getFilteredProducts();
    resultsCount.textContent = filteredProducts.length;

    const total = productsDatabase.length;
    if (filteredProducts.length === total) {
        resultsSummary.innerHTML = `Showing <span id="resultsCount">${filteredProducts.length}</span> products`;
    } else {
        resultsSummary.innerHTML = `Showing <span id="resultsCount">${filteredProducts.length}</span> of ${total} products`;
    }
}

// Render grid view
function renderGridView() {
    const filteredProducts = getFilteredProducts();
    const gridView = document.getElementById('gridView');

    if (filteredProducts.length === 0) {
        gridView.innerHTML = '';
        return;
    }

    gridView.innerHTML = filteredProducts.map(product => `
        <div class="product-grid-card">
            <div class="product-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="margin: 0; color: #2d3748; font-size: 1.2rem;">${product.name}</h3>
                <span class="company-badge badge-${product.company}">${product.companyName}</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <span class="product-type-badge type-${product.type}">${product.typeName}</span>
                <span style="margin-left: 0.5rem; color: #4a5568; font-size: 0.9rem;">${product.sample} Sample</span>
            </div>
            <p style="color: #4a5568; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">${product.description}</p>
            <div style="margin-bottom: 1rem;">
                <strong style="color: #2d3748; font-size: 0.9rem;">Clinical Use:</strong>
                <span style="color: #4a5568; font-size: 0.9rem;">${product.applicationName}</span>
            </div>
            <div>
                <strong style="color: #2d3748; font-size: 0.9rem; display: block; margin-bottom: 0.5rem;">Key Features:</strong>
                <ul style="margin: 0; padding-left: 1rem; color: #4a5568; font-size: 0.85rem;">
                    ${product.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                    ${product.features.length > 3 ? `<li style="color: #667eea;">+${product.features.length - 3} more</li>` : ''}
                </ul>
            </div>
        </div>
    `).join('');
}

// Export functions for potential external use
window.ProductsFilter = {
    getFilteredProducts,
    currentFilters,
    renderProducts,
    renderGridView
};