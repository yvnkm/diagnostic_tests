// Company data for comparison
const companyData = {
    grail: {
        name: "Grail",
        tagline: "Early Cancer Detection",
        primaryFocus: {
            title: "Multi-Cancer Early Detection",
            description: "Focuses exclusively on early cancer screening through blood-based testing."
        },
        keyTechnology: [
            "Next-generation sequencing",
            "Methylation analysis",
            "Machine learning",
            "MCED technology"
        ],
        mainApplications: [
            "Cancer screening",
            "Early detection",
            "Prevention programs"
        ],
        targetPopulation: "Adults 50+ at elevated cancer risk",
        uniqueAdvantages: [
            "First-to-market MCED",
            "50+ cancer types",
            "Tissue of origin prediction"
        ],
        marketPosition: "Early detection pioneer"
    },
    guardant: {
        name: "Guardant Health",
        tagline: "Precision Oncology",
        primaryFocus: {
            title: "Precision Oncology",
            description: "Comprehensive liquid biopsy platform for treatment guidance and monitoring."
        },
        keyTechnology: [
            "Liquid biopsy",
            "ctDNA analysis",
            "Digital sequencing",
            "Genomic profiling"
        ],
        mainApplications: [
            "Treatment selection",
            "Disease monitoring",
            "Resistance detection",
            "Recurrence tracking"
        ],
        targetPopulation: "Advanced cancer patients",
        uniqueAdvantages: [
            "Liquid biopsy leader",
            "FDA approvals",
            "Clinical validation"
        ],
        marketPosition: "Liquid biopsy market leader"
    },
    natera: {
        name: "Natera",
        tagline: "Genetic Testing",
        primaryFocus: {
            title: "Genetic Testing",
            description: "Broad genetic testing services across multiple medical specialties."
        },
        keyTechnology: [
            "NIPT technology",
            "SNP microarrays",
            "Cell-free DNA",
            "Genetic sequencing"
        ],
        mainApplications: [
            "Prenatal screening",
            "Carrier testing",
            "Reproductive health",
            "Oncology monitoring"
        ],
        targetPopulation: "Pregnant women, couples planning family",
        uniqueAdvantages: [
            "NIPT pioneer",
            "Comprehensive genetics",
            "Reproductive focus"
        ],
        marketPosition: "Genetic testing specialist"
    },
    tempus: {
        name: "Tempus",
        tagline: "AI-Powered Medicine",
        primaryFocus: {
            title: "AI-Powered Medicine",
            description: "Data-driven precision medicine platform with AI analytics."
        },
        keyTechnology: [
            "AI/ML algorithms",
            "Clinical database",
            "Genomic sequencing",
            "Digital pathology"
        ],
        mainApplications: [
            "Treatment guidance",
            "Clinical trials",
            "Research insights",
            "Drug development"
        ],
        targetPopulation: "Cancer patients, research institutions",
        uniqueAdvantages: [
            "Largest clinical database",
            "AI integration",
            "Multi-omics platform"
        ],
        marketPosition: "AI-driven platform leader"
    },
    caris: {
        name: "Caris",
        tagline: "Molecular Profiling",
        primaryFocus: {
            title: "Molecular Profiling",
            description: "Comprehensive molecular testing for cancer treatment planning."
        },
        keyTechnology: [
            "WES/WTS sequencing",
            "Protein analysis",
            "AI predictions",
            "Molecular profiling"
        ],
        mainApplications: [
            "Treatment planning",
            "Drug selection",
            "Biomarker testing",
            "Therapy guidance"
        ],
        targetPopulation: "Cancer patients needing treatment guidance",
        uniqueAdvantages: [
            "Comprehensive profiling",
            "WES + WTS",
            "Protein analysis"
        ],
        marketPosition: "Molecular profiling expert"
    },
    personalis: {
        name: "Personalis",
        tagline: "Cancer Genomics",
        primaryFocus: {
            title: "Cancer Genomics & Precision Medicine",
            description: "Advanced tumor profiling and immune analysis for precision oncology."
        },
        keyTechnology: [
            "Enhanced exome sequencing",
            "Immune profiling",
            "ctDNA analysis",
            "Biomarker discovery"
        ],
        mainApplications: [
            "Tumor profiling",
            "Immune analysis",
            "Clinical trials",
            "Drug development"
        ],
        targetPopulation: "Cancer patients, pharmaceutical companies",
        uniqueAdvantages: [
            "ImmunoID platform",
            "Enhanced exome coverage",
            "Pharma partnerships"
        ],
        marketPosition: "Cancer genomics specialist"
    },
    veracyte: {
        name: "Veracyte",
        tagline: "Multi-Cancer Diagnostics",
        primaryFocus: {
            title: "Multi-Cancer Molecular Diagnostics",
            description: "Specialized molecular tests for multiple cancer types including thyroid, breast, lung, and bladder."
        },
        keyTechnology: [
            "RNA sequencing",
            "Machine learning",
            "Genomic classifiers",
            "Risk stratification"
        ],
        mainApplications: [
            "Cancer diagnosis",
            "Risk assessment",
            "Treatment planning",
            "Prognosis"
        ],
        targetPopulation: "Patients with cancer-related symptoms or nodules",
        uniqueAdvantages: [
            "Multi-cancer expertise",
            "Tissue-specific tests",
            "FDA approvals"
        ],
        marketPosition: "Multi-cancer diagnostic specialist"
    },
    exact: {
        name: "Exact Sciences",
        tagline: "Colorectal Cancer Screening",
        primaryFocus: {
            title: "Colorectal Cancer Screening",
            description: "Leading non-invasive stool DNA testing for colorectal cancer screening and early detection."
        },
        keyTechnology: [
            "Stool DNA testing",
            "Methylation analysis",
            "Genomic sequencing",
            "Machine learning"
        ],
        mainApplications: [
            "Colorectal cancer screening",
            "Cancer prevention",
            "Risk assessment",
            "Treatment planning"
        ],
        targetPopulation: "Adults 45+ for colorectal cancer screening",
        uniqueAdvantages: [
            "Cologuard pioneer",
            "FDA approved screening",
            "At-home collection"
        ],
        marketPosition: "Colorectal cancer screening leader"
    },
    foundation: {
        name: "Foundation Medicine",
        tagline: "Comprehensive Genomic Profiling",
        primaryFocus: {
            title: "Comprehensive Genomic Profiling",
            description: "Leading comprehensive genomic profiling for precision cancer treatment decisions."
        },
        keyTechnology: [
            "Next-generation sequencing",
            "Comprehensive genomic profiling",
            "Liquid biopsy",
            "Biomarker testing"
        ],
        mainApplications: [
            "Treatment selection",
            "Biomarker identification",
            "Drug development",
            "Clinical trials"
        ],
        targetPopulation: "Cancer patients needing treatment selection",
        uniqueAdvantages: [
            "324+ gene analysis",
            "FDA approved CDx",
            "Roche partnership"
        ],
        marketPosition: "CGP market leader"
    },
    freenome: {
        name: "Freenome",
        tagline: "AI-Powered Early Detection",
        primaryFocus: {
            title: "AI-Powered Multi-Cancer Detection",
            description: "Multiomics blood-based platform using AI for early cancer detection through immune response analysis."
        },
        keyTechnology: [
            "AI/ML algorithms",
            "Multiomics analysis",
            "Immune response profiling",
            "ctDNA detection"
        ],
        mainApplications: [
            "Early cancer detection",
            "Cancer screening",
            "Risk assessment",
            "Prevention programs"
        ],
        targetPopulation: "Average-risk individuals for cancer screening",
        uniqueAdvantages: [
            "Multiomics approach",
            "AI-powered detection",
            "Immune system analysis"
        ],
        marketPosition: "AI-powered early detection specialist"
    }
};

// State management
let selectedCompanies = ['grail', 'guardant', 'natera']; // Default selection
let currentCategory = 'all';
let currentView = 'table';

// DOM elements
let companyCheckboxes;
let selectedCount;
let comparisonTable;
let cardView;
let noCompaniesMessage;

// Initialize the comparison page
document.addEventListener('DOMContentLoaded', function() {
    companyCheckboxes = document.querySelectorAll('.company-checkbox');
    selectedCount = document.getElementById('selectedCount');
    comparisonTable = document.getElementById('comparisonTable');
    cardView = document.getElementById('cardView');
    noCompaniesMessage = document.getElementById('noCompaniesMessage');

    setupEventListeners();
    updateSelectedCount();
    generateComparison();
});

// Set up all event listeners
function setupEventListeners() {
    // Company selection checkboxes
    companyCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCompanySelection);
    });

    // Control buttons
    document.getElementById('selectAll').addEventListener('click', selectAllCompanies);
    document.getElementById('clearAll').addEventListener('click', clearAllCompanies);
    document.getElementById('compareSelected').addEventListener('click', scrollToComparison);

    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });

    // View toggles
    document.querySelectorAll('.view-toggle').forEach(btn => {
        btn.addEventListener('click', handleViewToggle);
    });
}

// Handle company selection
function handleCompanySelection() {
    selectedCompanies = Array.from(companyCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    updateSelectedCount();
    generateComparison();
}

// Select all companies
function selectAllCompanies() {
    companyCheckboxes.forEach(cb => cb.checked = true);
    handleCompanySelection();
}

// Clear all companies
function clearAllCompanies() {
    companyCheckboxes.forEach(cb => cb.checked = false);
    handleCompanySelection();
}

// Update selected count display
function updateSelectedCount() {
    selectedCount.textContent = selectedCompanies.length;

    // Enable/disable compare button
    const compareBtn = document.getElementById('compareSelected');
    if (selectedCompanies.length < 2) {
        compareBtn.disabled = true;
        compareBtn.style.opacity = '0.6';
    } else {
        compareBtn.disabled = false;
        compareBtn.style.opacity = '1';
    }
}

// Scroll to comparison section
function scrollToComparison() {
    document.querySelector('.detailed-comparison').scrollIntoView({
        behavior: 'smooth'
    });
}

// Handle category filtering
function handleCategoryFilter(e) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentCategory = e.target.dataset.category;
    generateComparison();
}

// Handle view toggle
function handleViewToggle(e) {
    document.querySelectorAll('.view-toggle').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentView = e.target.dataset.view;

    if (currentView === 'table') {
        document.getElementById('tableView').style.display = 'block';
        document.getElementById('cardView').style.display = 'none';
    } else {
        document.getElementById('tableView').style.display = 'none';
        document.getElementById('cardView').style.display = 'block';
        generateCardView();
    }
}

// Generate comparison table
function generateComparison() {
    if (selectedCompanies.length === 0) {
        showNoCompaniesMessage();
        return;
    }

    hideNoCompaniesMessage();

    if (currentView === 'table') {
        generateTableView();
    } else {
        generateCardView();
    }
}

// Generate table view
function generateTableView() {
    const categories = getCategoriesToShow();

    // Create table header
    const headerRow = `
        <thead>
            <tr>
                <th>Category</th>
                ${selectedCompanies.map(company => `<th>${companyData[company].name}</th>`).join('')}
            </tr>
        </thead>
    `;

    // Create table body
    const bodyRows = categories.map(category => {
        const categoryData = getCategoryData(category);

        return `
            <tr>
                <td><strong>${categoryData.title}</strong></td>
                ${selectedCompanies.map(company => `
                    <td>
                        ${categoryData.render(companyData[company], company)}
                    </td>
                `).join('')}
            </tr>
        `;
    }).join('');

    comparisonTable.innerHTML = headerRow + '<tbody>' + bodyRows + '</tbody>';
}

// Generate card view
function generateCardView() {
    const categories = getCategoriesToShow();

    const cardsHTML = categories.map(category => {
        const categoryData = getCategoryData(category);

        return `
            <div class="comparison-category-card">
                <h3>${categoryData.title}</h3>
                <div class="company-comparison-row" style="grid-template-columns: repeat(${selectedCompanies.length}, 1fr);">
                    ${selectedCompanies.map(company => `
                        <div class="company-comparison-item">
                            <h4>${companyData[company].name}</h4>
                            ${categoryData.render(companyData[company], company)}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    cardView.innerHTML = cardsHTML;
}

// Get categories to show based on current filter
function getCategoriesToShow() {
    const allCategories = ['focus', 'technology', 'applications', 'target', 'advantages', 'market'];

    if (currentCategory === 'all') {
        return allCategories;
    }

    const categoryMap = {
        'focus': ['focus'],
        'technology': ['technology'],
        'applications': ['applications'],
        'market': ['target', 'advantages', 'market']
    };

    return categoryMap[currentCategory] || allCategories;
}

// Get category data structure
function getCategoryData(category) {
    const categories = {
        focus: {
            title: 'Primary Focus',
            render: (company, companyKey) => `
                <span class="${companyKey}-highlight">${company.primaryFocus.title}</span>
                <p>${company.primaryFocus.description}</p>
            `
        },
        technology: {
            title: 'Key Technology',
            render: (company) => `
                <ul class="feature-list">
                    ${company.keyTechnology.map(tech => `<li><i class="fas fa-check"></i>${tech}</li>`).join('')}
                </ul>
            `
        },
        applications: {
            title: 'Main Applications',
            render: (company) => `
                <ul class="feature-list">
                    ${company.mainApplications.map(app => `<li><i class="fas fa-check"></i>${app}</li>`).join('')}
                </ul>
            `
        },
        target: {
            title: 'Target Population',
            render: (company) => company.targetPopulation
        },
        advantages: {
            title: 'Unique Advantages',
            render: (company) => `
                <ul class="feature-list">
                    ${company.uniqueAdvantages.map(adv => `<li><i class="fas fa-star"></i>${adv}</li>`).join('')}
                </ul>
            `
        },
        market: {
            title: 'Market Position',
            render: (company) => company.marketPosition
        }
    };

    return categories[category];
}

// Show/hide no companies message
function showNoCompaniesMessage() {
    noCompaniesMessage.style.display = 'block';
    document.getElementById('tableView').style.display = 'none';
    document.getElementById('cardView').style.display = 'none';
}

function hideNoCompaniesMessage() {
    noCompaniesMessage.style.display = 'none';
    if (currentView === 'table') {
        document.getElementById('tableView').style.display = 'block';
    } else {
        document.getElementById('cardView').style.display = 'block';
    }
}

// Export for external use
window.ComparisonTool = {
    selectedCompanies,
    companyData,
    generateComparison
};