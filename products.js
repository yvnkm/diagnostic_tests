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
        name: "Guardant360 Tissue NeXT™",
        company: "guardant",
        companyName: "Guardant Health",
        type: "tissue",
        typeName: "Tissue CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Treatment Planning",
        description: "Comprehensive tissue-based genomic profiling analyzing 500+ genes for precision oncology",
        features: ["500+ genes", "Tissue analysis", "Comprehensive profiling", "Treatment matching"],
        clinicalUse: "Tissue-based comprehensive genomic profiling for treatment selection"
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
    },

    // Personalis Products
    {
        name: "NeXT Platform®",
        company: "personalis",
        companyName: "Personalis",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Tumor Profiling",
        description: "Comprehensive tumor profiling platform for precision oncology with enhanced exome coverage",
        features: ["Enhanced exome", "Tumor profiling", "Biomarker discovery", "Clinical trials"],
        clinicalUse: "Comprehensive genomic analysis for cancer treatment and research"
    },
    {
        name: "ImmunoID NeXT®",
        company: "personalis",
        companyName: "Personalis",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Immune Profiling",
        description: "Advanced immune profiling platform for tumor microenvironment analysis",
        features: ["Immune profiling", "TME analysis", "T-cell repertoire", "Neoantigen prediction"],
        clinicalUse: "Tumor immune microenvironment characterization for immunotherapy"
    },
    {
        name: "ACE Platform®",
        company: "personalis",
        companyName: "Personalis",
        type: "liquid",
        typeName: "Liquid Biopsy",
        sample: "Blood",
        application: "monitoring",
        applicationName: "ctDNA Analysis",
        description: "Circulating tumor DNA analysis platform for monitoring disease progression",
        features: ["ctDNA detection", "Disease monitoring", "Treatment response", "Personalized tracking"],
        clinicalUse: "Liquid biopsy monitoring for treatment response and disease progression"
    },

    // Veracyte Products
    {
        name: "Afirma® GSC",
        company: "veracyte",
        companyName: "Veracyte",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "screening",
        applicationName: "Thyroid Cancer",
        description: "Genomic sequencing classifier for thyroid cancer diagnosis and risk assessment",
        features: ["RNA sequencing", "Machine learning", "Thyroid focused", "Diagnostic clarity"],
        clinicalUse: "Thyroid nodule assessment and cancer diagnosis"
    },
    {
        name: "Prosigna®",
        company: "veracyte",
        companyName: "Veracyte",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Breast Cancer",
        description: "PAM50-based breast cancer prognostic assay for treatment decision support",
        features: ["PAM50 genes", "Risk stratification", "Prognosis", "Treatment guidance"],
        clinicalUse: "Breast cancer prognosis and treatment planning for HR+/HER2- patients"
    },
    {
        name: "Decipher® Bladder",
        company: "veracyte",
        companyName: "Veracyte",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Bladder Cancer",
        description: "Genomic subtyping tool for personalized bladder cancer treatment decisions",
        features: ["Molecular subtyping", "Treatment selection", "Personalized medicine", "Risk assessment"],
        clinicalUse: "Bladder cancer molecular subtyping for treatment personalization"
    },
    {
        name: "Percepta® Nasal Swab",
        company: "veracyte",
        companyName: "Veracyte",
        type: "screening",
        typeName: "Risk Assessment",
        sample: "Nasal Swab",
        application: "screening",
        applicationName: "Lung Cancer Risk",
        description: "Non-invasive lung cancer risk assessment for patients with lung nodules",
        features: ["Non-invasive", "Nasal swab", "Risk assessment", "Lung nodules"],
        clinicalUse: "Lung cancer risk evaluation for patients with suspicious nodules"
    },
    {
        name: "Decipher® Prostate",
        company: "veracyte",
        companyName: "Veracyte",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Prostate Cancer",
        description: "Genomic classifier for prostate cancer prognosis and treatment decisions",
        features: ["Gene expression", "Risk stratification", "Treatment guidance", "NCCN guidelines"],
        clinicalUse: "Prostate cancer risk assessment and treatment decision support"
    },

    // Exact Sciences Products
    {
        name: "Cologuard®",
        company: "exact",
        companyName: "Exact Sciences",
        type: "mced",
        typeName: "MCED",
        sample: "Stool",
        application: "screening",
        applicationName: "CRC Screening",
        description: "Non-invasive stool DNA test for colorectal cancer screening detecting DNA markers and hemoglobin",
        features: ["10 DNA markers", "Hemoglobin detection", "FDA approved", "At-home collection"],
        clinicalUse: "Colorectal cancer screening for average-risk individuals 45+"
    },
    {
        name: "Cologuard Plus™",
        company: "exact",
        companyName: "Exact Sciences",
        type: "mced",
        typeName: "MCED",
        sample: "Stool",
        application: "screening",
        applicationName: "CRC Screening",
        description: "Next-generation stool DNA test with 95% sensitivity and 40% fewer false positives than original Cologuard",
        features: ["Novel biomarkers", "95% sensitivity", "94% specificity", "Reduced false positives"],
        clinicalUse: "Enhanced colorectal cancer screening with improved accuracy"
    },
    {
        name: "Oncotype DX®",
        company: "exact",
        companyName: "Exact Sciences",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Treatment Planning",
        description: "Multi-cancer genomic test providing recurrence scores and treatment recommendations",
        features: ["21-gene assay", "Recurrence score", "Treatment guidance", "Multiple cancer types"],
        clinicalUse: "Breast, colon, and prostate cancer treatment decision support"
    },
    {
        name: "PreTect® HPV-Proofer",
        company: "exact",
        companyName: "Exact Sciences",
        type: "screening",
        typeName: "HPV Screening",
        sample: "Cervical",
        application: "screening",
        applicationName: "Cervical Screening",
        description: "HPV mRNA test for cervical cancer screening with high specificity",
        features: ["mRNA detection", "High specificity", "Reduced false positives", "Cervical screening"],
        clinicalUse: "Human papillomavirus screening for cervical cancer prevention"
    },
    {
        name: "Cancerguard®",
        company: "exact",
        companyName: "Exact Sciences",
        type: "mced",
        typeName: "MCED",
        sample: "Blood",
        application: "screening",
        applicationName: "Multi-Cancer Screening",
        description: "Multi-cancer early detection blood test in development for multiple cancer types",
        features: ["Multi-cancer detection", "Blood-based", "Early detection", "In development"],
        clinicalUse: "Multi-cancer early detection and screening (pipeline)"
    },

    // Foundation Medicine Products
    {
        name: "FoundationOne® CDx",
        company: "foundation",
        companyName: "Foundation Medicine",
        type: "cgp",
        typeName: "CGP",
        sample: "Tissue",
        application: "treatment",
        applicationName: "Treatment Selection",
        description: "Comprehensive genomic profiling test analyzing 324 genes for solid tumor treatment decisions",
        features: ["324 genes", "FDA approved CDx", "Biomarker testing", "Treatment matching"],
        clinicalUse: "Comprehensive genomic profiling for precision oncology treatment selection"
    },
    {
        name: "FoundationOne® Liquid CDx",
        company: "foundation",
        companyName: "Foundation Medicine",
        type: "liquid",
        typeName: "Liquid Biopsy",
        sample: "Blood",
        application: "treatment",
        applicationName: "Treatment Selection",
        description: "Blood-based comprehensive genomic profiling analyzing 324 genes from circulating tumor DNA",
        features: ["324 genes", "ctDNA analysis", "Non-invasive", "FDA approved"],
        clinicalUse: "Liquid biopsy for cancer treatment selection when tissue unavailable"
    },
    {
        name: "FoundationOne® Heme",
        company: "foundation",
        companyName: "Foundation Medicine",
        type: "cgp",
        typeName: "CGP",
        sample: "Blood/Bone Marrow",
        application: "treatment",
        applicationName: "Hematologic Cancers",
        description: "Comprehensive genomic profiling for hematologic malignancies and sarcomas",
        features: ["406+ genes", "Hematologic focus", "Rearrangements", "Treatment guidance"],
        clinicalUse: "Genomic profiling for blood cancers and sarcomas treatment planning"
    },
    {
        name: "FoundationACT®",
        company: "foundation",
        companyName: "Foundation Medicine",
        type: "liquid",
        typeName: "Liquid Biopsy",
        sample: "Blood",
        application: "monitoring",
        applicationName: "Treatment Monitoring",
        description: "Circulating tumor DNA monitoring for treatment response and disease progression",
        features: ["ctDNA tracking", "Treatment monitoring", "Disease progression", "Personalized assay"],
        clinicalUse: "Circulating tumor DNA monitoring for treatment response assessment"
    },

    // Freenome Products
    {
        name: "SimpleScreen®",
        company: "freenome",
        companyName: "Freenome",
        type: "mced",
        typeName: "MCED",
        sample: "Blood",
        application: "screening",
        applicationName: "CRC Screening",
        description: "AI-powered multiomics blood test for colorectal cancer screening using immune response patterns",
        features: ["Multiomics analysis", "AI/ML algorithms", "Immune response", "Non-invasive"],
        clinicalUse: "Colorectal cancer screening through blood-based multiomics analysis"
    },
    {
        name: "Multi-Cancer Platform",
        company: "freenome",
        companyName: "Freenome",
        type: "mced",
        typeName: "MCED",
        sample: "Blood",
        application: "screening",
        applicationName: "Multi-Cancer Screening",
        description: "Multiomics platform detecting 10+ cancer types through tumor DNA and immune response analysis",
        features: ["10+ cancer types", "Tumor DNA + immune signals", "Multiomics approach", "Machine learning"],
        clinicalUse: "Multi-cancer early detection using AI-powered blood analysis"
    },
    {
        name: "Lung Cancer Test",
        company: "freenome",
        companyName: "Freenome",
        type: "screening",
        typeName: "Risk Assessment",
        sample: "Blood",
        application: "screening",
        applicationName: "Lung Cancer Screening",
        description: "Blood-based lung cancer screening test for high-risk populations using multiomics analysis",
        features: ["Lung cancer focus", "High-risk populations", "Blood-based", "Multiomics platform"],
        clinicalUse: "Lung cancer screening for current and former smokers"
    }
];

// Platforms and Services Database
const platformsDatabase = [
    // Guardant Health Platforms
    {
        name: "GuardantINFORM™",
        company: "guardant",
        companyName: "Guardant Health",
        type: "data_platform",
        typeName: "Data Platform",
        category: "Real-World Evidence",
        description: "Comprehensive real-world data platform providing insights from liquid biopsy testing to support clinical research and drug development",
        features: ["Real-world data", "Clinical insights", "Research support", "Drug development"],
        applications: ["Clinical research", "Pharmaceutical partnerships", "Biomarker discovery", "Treatment outcomes"],
        clinicalUse: "Real-world evidence generation for precision oncology research"
    },

    // Tempus Platforms
    {
        name: "Tempus Lens",
        company: "tempus",
        companyName: "Tempus",
        type: "ai_platform",
        typeName: "AI Platform",
        category: "Clinical Decision Support",
        description: "AI-powered clinical decision support platform providing treatment recommendations and clinical insights",
        features: ["AI algorithms", "Treatment recommendations", "Clinical insights", "Decision support"],
        applications: ["Treatment selection", "Clinical decision making", "Outcome prediction", "Patient stratification"],
        clinicalUse: "AI-driven clinical decision support for oncology treatment planning"
    },
    {
        name: "Tempus ONE",
        company: "tempus",
        companyName: "Tempus",
        type: "matching_platform",
        typeName: "Trial Matching",
        category: "Clinical Trial Matching",
        description: "Clinical trial matching platform connecting patients with relevant clinical trials based on molecular and clinical data",
        features: ["Trial matching", "Patient enrollment", "Clinical data integration", "Eligibility screening"],
        applications: ["Clinical trial enrollment", "Patient recruitment", "Trial optimization", "Drug development"],
        clinicalUse: "Clinical trial matching and patient enrollment optimization"
    },

    // Caris Platforms
    {
        name: "Caris CodeAI",
        company: "caris",
        companyName: "Caris",
        type: "ai_platform",
        typeName: "AI Platform",
        category: "Treatment Insights",
        description: "AI-powered platform providing personalized treatment insights and clinical recommendations based on molecular profiling",
        features: ["AI-powered insights", "Treatment recommendations", "Molecular integration", "Personalized medicine"],
        applications: ["Treatment selection", "Prognosis prediction", "Clinical decision support", "Personalized therapy"],
        clinicalUse: "AI-driven treatment insights for personalized cancer care"
    },

    // Foundation Medicine Platforms
    {
        name: "FoundationCore™",
        company: "foundation",
        companyName: "Foundation Medicine",
        type: "data_platform",
        typeName: "Data Platform",
        category: "Genomic Database",
        description: "Comprehensive genomic database and analytics platform supporting research and drug development",
        features: ["Genomic database", "Clinical annotations", "Research tools", "Data analytics"],
        applications: ["Drug development", "Biomarker research", "Clinical insights", "Pharmaceutical partnerships"],
        clinicalUse: "Genomic data platform for precision medicine research and development"
    },

    // Grail Platforms
    {
        name: "GRAIL Data Platform",
        company: "grail",
        companyName: "Grail",
        type: "data_platform",
        typeName: "Data Platform",
        category: "Early Detection Data",
        description: "Multi-cancer early detection data platform supporting research and clinical insights",
        features: ["Multi-cancer data", "Early detection insights", "Research support", "Clinical outcomes"],
        applications: ["Early detection research", "Biomarker discovery", "Clinical validation", "Population health"],
        clinicalUse: "Early detection data platform for multi-cancer screening research"
    },

    // Veracyte Platforms
    {
        name: "Veracyte Atlas™",
        company: "veracyte",
        companyName: "Veracyte",
        type: "data_platform",
        typeName: "Data Platform",
        category: "Genomic Atlas",
        description: "Comprehensive genomic atlas platform providing insights across cancer types for research and development",
        features: ["Genomic atlas", "Multi-cancer insights", "Research tools", "Clinical correlations"],
        applications: ["Cancer research", "Biomarker validation", "Drug development", "Clinical insights"],
        clinicalUse: "Genomic atlas platform for multi-cancer research and biomarker development"
    }
];

// Filter state management
let currentFilters = {
    company: 'all',
    productTypes: [],
    applications: [],
    search: '',
    viewType: 'tests' // 'tests' or 'platforms'
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
let toggleButtons;
let testsHeader;
let platformsHeader;

// Initialize the products page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Products page DOMContentLoaded event fired');
    console.log('Products database length:', productsDatabase.length);

    tableBody = document.getElementById('productsTableBody');
    searchInput = document.getElementById('productSearch');
    resultsSummary = document.getElementById('resultsSummary');
    resultsCount = document.getElementById('resultsCount');
    noResults = document.getElementById('noResults');
    companySelect = document.getElementById('companySelect');
    typeCheckboxes = document.querySelectorAll('.type-checkbox');
    applicationCheckboxes = document.querySelectorAll('.application-checkbox');
    toggleButtons = document.querySelectorAll('.toggle-btn');
    testsHeader = document.getElementById('testsHeader');
    platformsHeader = document.getElementById('platformsHeader');

    console.log('DOM elements found:', {
        tableBody: !!tableBody,
        searchInput: !!searchInput,
        resultsSummary: !!resultsSummary,
        companySelect: !!companySelect,
        typeCheckboxesCount: typeCheckboxes.length,
        applicationCheckboxesCount: applicationCheckboxes.length
    });

    // Set up event listeners
    setupFilterListeners();
    setupSearchListener();
    setupMobileToggle();
    setupViewToggle();
    setupClearFilters();
    setupTypeToggle();

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

function setupTypeToggle() {
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;

            // Update active button
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update view type
            currentFilters.viewType = type;

            // Toggle table headers
            if (type === 'tests') {
                testsHeader.style.display = '';
                platformsHeader.style.display = 'none';
            } else {
                testsHeader.style.display = 'none';
                platformsHeader.style.display = '';
            }

            // Re-render
            renderProducts();
            updateResultsCount();
        });
    });
}

// Filter products based on current filters
function getFilteredProducts() {
    const database = currentFilters.viewType === 'tests' ? productsDatabase : platformsDatabase;

    return database.filter(item => {
        // Company filter
        const companyMatch = currentFilters.company === 'all' || item.company === currentFilters.company;

        // Product type filter (checkbox array) - for platforms, we can filter by type too
        const typeMatch = currentFilters.productTypes.length === 0 ||
                         currentFilters.productTypes.includes(item.type);

        // Application filter (checkbox array)
        // For platforms, check both applications array and single application field
        let applicationMatch;
        if (currentFilters.viewType === 'platforms') {
            applicationMatch = currentFilters.applications.length === 0 ||
                             (item.applications && item.applications.some(app => currentFilters.applications.includes(app)));
        } else {
            applicationMatch = currentFilters.applications.length === 0 ||
                             currentFilters.applications.includes(item.application);
        }

        // Search filter
        const searchFields = [
            item.name?.toLowerCase() || '',
            item.description?.toLowerCase() || '',
            item.clinicalUse?.toLowerCase() || '',
            item.companyName?.toLowerCase() || ''
        ];

        // Add features to search
        if (item.features) {
            searchFields.push(...item.features.map(f => f.toLowerCase()));
        }

        // Add applications to search for platforms
        if (item.applications) {
            searchFields.push(...item.applications.map(app => app.toLowerCase()));
        }

        // Add category to search for platforms
        if (item.category) {
            searchFields.push(item.category.toLowerCase());
        }

        const searchMatch = currentFilters.search === '' ||
            searchFields.some(field => field.includes(currentFilters.search));

        return companyMatch && typeMatch && applicationMatch && searchMatch;
    });
}

// Render products table
function renderProducts() {
    console.log('renderProducts() called');
    const filteredItems = getFilteredProducts();
    console.log('Filtered items count:', filteredItems.length);

    if (filteredItems.length === 0) {
        tableBody.innerHTML = '';
        noResults.style.display = 'block';
        document.querySelector('.products-table-wrapper').style.display = 'none';
        return;
    }

    noResults.style.display = 'none';
    document.querySelector('.products-table-wrapper').style.display = 'block';

    if (currentFilters.viewType === 'tests') {
        tableBody.innerHTML = filteredItems.map(product => `
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
    } else {
        tableBody.innerHTML = filteredItems.map(platform => `
            <tr data-company="${platform.company}" data-type="${platform.type}">
                <td>
                    <div class="product-name">${platform.name}</div>
                    <div class="product-description">${platform.description}</div>
                </td>
                <td>
                    <span class="company-badge badge-${platform.company}">${platform.companyName}</span>
                </td>
                <td>
                    <span class="product-type-badge type-${platform.type}">${platform.typeName}</span>
                </td>
                <td>${platform.category}</td>
                <td>
                    <div style="color: #4a5568; font-size: 0.9rem;">
                        ${platform.applications.join(', ')}
                    </div>
                </td>
                <td>
                    <ul style="margin: 0; padding-left: 1rem; color: #4a5568; font-size: 0.9rem;">
                        ${platform.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </td>
            </tr>
        `).join('');
    }
}

// Update results count
function updateResultsCount() {
    const filteredItems = getFilteredProducts();
    resultsCount.textContent = filteredItems.length;

    const database = currentFilters.viewType === 'tests' ? productsDatabase : platformsDatabase;
    const total = database.length;
    const itemType = currentFilters.viewType === 'tests' ? 'products' : 'platforms';

    if (filteredItems.length === total) {
        resultsSummary.innerHTML = `Showing <span id="resultsCount">${filteredItems.length}</span> ${itemType}`;
    } else {
        resultsSummary.innerHTML = `Showing <span id="resultsCount">${filteredItems.length}</span> of ${total} ${itemType}`;
    }
}

// Render grid view
function renderGridView() {
    const filteredItems = getFilteredProducts();
    const gridView = document.getElementById('gridView');

    if (filteredItems.length === 0) {
        gridView.innerHTML = '';
        return;
    }

    if (currentFilters.viewType === 'tests') {
        gridView.innerHTML = filteredItems.map(product => `
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
    } else {
        gridView.innerHTML = filteredItems.map(platform => `
            <div class="product-grid-card">
                <div class="product-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3 style="margin: 0; color: #2d3748; font-size: 1.2rem;">${platform.name}</h3>
                    <span class="company-badge badge-${platform.company}">${platform.companyName}</span>
                </div>
                <div style="margin-bottom: 1rem;">
                    <span class="product-type-badge type-${platform.type}">${platform.typeName}</span>
                    <span style="margin-left: 0.5rem; color: #4a5568; font-size: 0.9rem;">${platform.category}</span>
                </div>
                <p style="color: #4a5568; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">${platform.description}</p>
                <div style="margin-bottom: 1rem;">
                    <strong style="color: #2d3748; font-size: 0.9rem;">Applications:</strong>
                    <span style="color: #4a5568; font-size: 0.9rem;">${platform.applications.slice(0, 2).join(', ')}${platform.applications.length > 2 ? `, +${platform.applications.length - 2} more` : ''}</span>
                </div>
                <div>
                    <strong style="color: #2d3748; font-size: 0.9rem; display: block; margin-bottom: 0.5rem;">Key Features:</strong>
                    <ul style="margin: 0; padding-left: 1rem; color: #4a5568; font-size: 0.85rem;">
                        ${platform.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                        ${platform.features.length > 3 ? `<li style="color: #667eea;">+${platform.features.length - 3} more</li>` : ''}
                    </ul>
                </div>
            </div>
        `).join('');
    }
}

// Export functions for potential external use
window.ProductsFilter = {
    getFilteredProducts,
    currentFilters,
    renderProducts,
    renderGridView
};