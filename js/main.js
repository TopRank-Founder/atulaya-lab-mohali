/**
 * Atulaya Healthcare Lab Mohali - Main Application Script
 * High performance, zero dependencies vanilla JavaScript
 */

// Comprehensive Health Packages Dataset
const HEALTH_PACKAGES_DATA = {
  'basic-health': {
    id: 'basic-health',
    title: 'Atulaya Basic Health Package',
    tagline: 'Essential Routine Vital Health Screening',
    category: 'full-body',
    mrp: 2370,
    price: 1195,
    discount: '50% OFF',
    paramCount: 73,
    sampleType: 'Blood & Urine',
    fasting: '10-12 Hours Fasting Required',
    reportTAT: 'Same Day / 12-18 Hours',
    recommendedFor: 'Men & Women of all age groups as an annual base checkup',
    organSummary: [
      { name: 'Liver (LFT)', count: 11 },
      { name: 'Kidney (KFT)', count: 8 },
      { name: 'Thyroid (TFT)', count: 3 },
      { name: 'CBC Hemogram', count: 24 },
      { name: 'Sugar / Glucose', count: 1 },
      { name: 'Urine Routine', count: 26 }
    ],
    categories: [
      {
        name: 'Liver Function Tests (LFT - 11 Tests)',
        tests: [
          'Total Bilirubin', 'Direct Bilirubin', 'Indirect Bilirubin', 
          'SGOT / AST (Aspartate Aminotransferase)', 'SGPT / ALT (Alanine Aminotransferase)', 
          'Alkaline Phosphatase (ALP)', 'Total Serum Protein', 'Serum Albumin', 
          'Serum Globulin', 'Albumin / Globulin (A:G) Ratio', 'Gamma Glutamyl Transferase (GGT)'
        ]
      },
      {
        name: 'Kidney Function Tests (KFT / RFT - 8 Tests)',
        tests: [
          'Serum Creatinine', 'Blood Urea', 'Blood Urea Nitrogen (BUN)', 
          'BUN / Creatinine Ratio', 'Serum Uric Acid', 'Serum Calcium', 
          'Serum Sodium', 'Serum Potassium'
        ]
      },
      {
        name: 'Thyroid Function Profile (3 Tests)',
        tests: [
          'Total Triiodothyronine (T3)', 'Total Thyroxine (T4)', 'Thyroid Stimulating Hormone (TSH Ultrasensitive)'
        ]
      },
      {
        name: 'Complete Blood Count (CBC / Hemogram - 24 Tests)',
        tests: [
          'Hemoglobin (Hb)', 'Total Leukocyte Count (TLC / WBC)', 'RBC Count', 'Packed Cell Volume (PCV / Hematocrit)',
          'Mean Corpuscular Volume (MCV)', 'Mean Corpuscular Hemoglobin (MCH)', 'MCHC', 'RDW-CV', 'RDW-SD',
          'Platelet Count', 'Mean Platelet Volume (MPV)', 'Plateletcrit (PCT)', 'Platelet Distribution Width (PDW)',
          'Neutrophils %', 'Lymphocytes %', 'Monocytes %', 'Eosinophils %', 'Basophils %',
          'Absolute Neutrophil Count (ANC)', 'Absolute Lymphocyte Count (ALC)', 'Absolute Monocyte Count (AMC)',
          'Absolute Eosinophil Count (AEC)', 'Absolute Basophil Count (ABC)', 'Erythrocyte Sedimentation Rate (ESR)'
        ]
      },
      {
        name: 'Diabetes / Blood Glucose (1 Test)',
        tests: ['Fasting Blood Glucose (Sugar Fasting)']
      },
      {
        name: 'Complete Urine Routine & Microscopic Examination (26 Tests)',
        tests: [
          'Colour', 'Appearance', 'Specific Gravity', 'pH Reaction', 'Urinary Protein / Albumin',
          'Urinary Glucose / Sugar', 'Ketone Bodies', 'Bile Pigment', 'Bile Salts', 'Urobilinogen',
          'Pus Cells (Leukocytes)', 'RBCs (Red Blood Cells)', 'Epithelial Cells', 'Hyaline Casts',
          'Granular Casts', 'Calcium Oxalate Crystals', 'Uric Acid Crystals', 'Amorphous Phosphates',
          'Bacteria', 'Yeast Cells', 'Mucus Threads', 'Nitrite Test', 'Leukocyte Esterase',
          'Blood / Hemoglobin in Urine', 'Microscopic Sediment Analysis', 'Volume / Specific Gravity Ratio'
        ]
      }
    ]
  },

  'routine-health': {
    id: 'routine-health',
    title: 'Atulaya Routine Health Package',
    tagline: 'Extended Preventive Checkup with Iron & Bone Health',
    category: 'full-body',
    mrp: 3770,
    price: 1595,
    discount: '58% OFF',
    paramCount: 80,
    sampleType: 'Blood & Urine',
    fasting: '10-12 Hours Fasting Required',
    reportTAT: 'Same Day / 12-24 Hours',
    recommendedFor: 'Adults seeking routine health monitoring with iron & bone mineral screening',
    organSummary: [
      { name: 'Iron Profile', count: 4 },
      { name: 'Bone Health', count: 3 },
      { name: 'Liver (LFT)', count: 11 },
      { name: 'Kidney (KFT)', count: 8 },
      { name: 'Thyroid (TFT)', count: 3 },
      { name: 'CBC Hemogram', count: 24 },
      { name: 'Sugar Fasting', count: 1 },
      { name: 'Urine Routine', count: 26 }
    ],
    categories: [
      {
        name: 'Complete Iron Studies Profile (4 Tests)',
        tests: [
          'Serum Iron', 'Total Iron Binding Capacity (TIBC)', 
          'Unsaturated Iron Binding Capacity (UIBC)', 'Transferrin Saturation %'
        ]
      },
      {
        name: 'Bone & Mineral Profile (3 Tests)',
        tests: [
          'Serum Calcium Total', 'Serum Inorganic Phosphorus', 'Alkaline Phosphatase (Bone & Liver Marker)'
        ]
      },
      {
        name: 'Liver Function Tests (LFT - 11 Tests)',
        tests: [
          'Total Bilirubin', 'Direct Bilirubin', 'Indirect Bilirubin', 'SGOT / AST', 'SGPT / ALT', 
          'Alkaline Phosphatase', 'Total Protein', 'Albumin', 'Globulin', 'A:G Ratio', 'GGTP'
        ]
      },
      {
        name: 'Kidney / Renal Profile (KFT - 8 Tests)',
        tests: [
          'Serum Creatinine', 'Blood Urea', 'Blood Urea Nitrogen (BUN)', 'BUN / Creatinine Ratio',
          'Uric Acid', 'Calcium', 'Sodium', 'Potassium'
        ]
      },
      {
        name: 'Thyroid Function Profile (3 Tests)',
        tests: ['Total T3', 'Total T4', 'TSH Ultrasensitive']
      },
      {
        name: 'Complete Hemogram (CBC + ESR - 24 Tests)',
        tests: [
          'Hemoglobin', 'TLC (WBC Count)', 'RBC Count', 'PCV', 'MCV', 'MCH', 'MCHC', 'RDW-CV', 'RDW-SD',
          'Platelet Count', 'MPV', 'PCT', 'PDW', 'Differential Counts (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)',
          'Absolute Counts (ANC, ALC, AMC, AEC, ABC)', 'ESR'
        ]
      },
      {
        name: 'Blood Sugar & Urinalysis (27 Tests)',
        tests: ['Fasting Blood Glucose', 'Complete Urine Routine & Microscopic (26 parameters)']
      }
    ]
  },

  'advanced-full-body': {
    id: 'advanced-full-body',
    title: 'Atulaya Advanced Full Body Checkup',
    tagline: 'Most Comprehensive Checkup with Vitamin D3, B12, HbA1c & Lipids',
    category: 'full-body',
    mrp: 4460,
    price: 1995,
    discount: '55% OFF',
    paramCount: 76,
    sampleType: 'Blood & Urine',
    fasting: '10-12 Hours Fasting Required',
    reportTAT: '18-24 Hours via WhatsApp',
    recommendedFor: 'Working professionals, adults (25-60 yrs), and annual family health evaluation',
    organSummary: [
      { name: 'Vitamins D3 & B12', count: 2 },
      { name: 'HbA1c Sugar 3-Mo', count: 2 },
      { name: 'Lipid (Cholesterol)', count: 8 },
      { name: 'Liver (LFT)', count: 11 },
      { name: 'Kidney (KFT)', count: 8 },
      { name: 'Thyroid (TFT)', count: 3 },
      { name: 'CBC Hemogram', count: 24 },
      { name: 'Urine Routine', count: 26 }
    ],
    categories: [
      {
        name: 'Essential Vitamin Profile (2 Vital Tests)',
        tests: [
          'Vitamin D3 (25-Hydroxy Cholecalciferol) - Bone, Immunity & Energy',
          'Vitamin B12 (Cyanocobalamin) - Nerve Function, RBC Synthesis & Brain Health'
        ]
      },
      {
        name: 'Diabetes & 3-Month Glycemic Risk (2 Tests)',
        tests: [
          'HbA1c (Glycated Hemoglobin) - Gold Standard 3-Month Average Blood Sugar',
          'Estimated Average Glucose (eAG)',
          'Fasting Blood Glucose'
        ]
      },
      {
        name: 'Lipid Profile / Cardiovascular Risk (8 Tests)',
        tests: [
          'Total Cholesterol', 'Triglycerides', 'HDL Cholesterol (Good Cholesterol)',
          'LDL Cholesterol (Bad Cholesterol)', 'VLDL Cholesterol', 'Non-HDL Cholesterol',
          'Total Cholesterol / HDL Ratio', 'LDL / HDL Ratio'
        ]
      },
      {
        name: 'Liver Function Profile (LFT - 11 Tests)',
        tests: [
          'Total Bilirubin', 'Direct Bilirubin', 'Indirect Bilirubin', 'SGOT / AST', 'SGPT / ALT',
          'Alkaline Phosphatase (ALP)', 'Total Serum Protein', 'Serum Albumin', 'Serum Globulin',
          'A:G Ratio', 'Gamma GT (GGTP)'
        ]
      },
      {
        name: 'Kidney / Renal Profile (KFT - 8 Tests)',
        tests: [
          'Serum Creatinine', 'Blood Urea', 'Blood Urea Nitrogen (BUN)', 'BUN / Creatinine Ratio',
          'Serum Uric Acid', 'Serum Calcium', 'Electrolytes (Sodium & Potassium)'
        ]
      },
      {
        name: 'Thyroid Function Profile (3 Tests)',
        tests: ['Total Triiodothyronine (T3)', 'Total Thyroxine (T4)', 'Thyroid Stimulating Hormone (TSH)']
      },
      {
        name: 'Complete Blood Count (CBC - 24 Tests)',
        tests: [
          'Hemoglobin', 'TLC / WBC', 'RBC Count', 'PCV', 'MCV', 'MCH', 'MCHC', 'RDW-CV', 'RDW-SD',
          'Platelet Count', 'MPV', 'PCT', 'PDW', 'Differential & Absolute Counts (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)', 'ESR'
        ]
      },
      {
        name: 'Complete Urine Routine & Microscopic (26 Tests)',
        tests: [
          'Protein, Sugar, Pus cells, RBCs, Casts, Crystals, Epithelial cells, Bile pigments, Ketones, Urobilinogen, pH, Specific Gravity & 14 other parameters'
        ]
      }
    ]
  },

  'complete-full-body': {
    id: 'complete-full-body',
    title: 'Atulaya Complete Health Package (Ayushmant Gold)',
    tagline: 'Master Full Body Screening with Cardiac hs-CRP, Electrolytes & Pancreatic Enzymes',
    category: 'full-body',
    mrp: 5760,
    price: 2495,
    discount: '57% OFF',
    paramCount: 82,
    sampleType: 'Blood & Urine',
    fasting: '10-12 Hours Fasting Required',
    reportTAT: '18-24 Hours',
    recommendedFor: 'Complete full body screening for high-risk individuals, executive checkups, and seniors',
    organSummary: [
      { name: 'Cardiac hs-CRP', count: 1 },
      { name: 'Vitamins D3 & B12', count: 2 },
      { name: 'Pancreatic Amylase', count: 1 },
      { name: 'Electrolytes (Na/K/Cl)', count: 3 },
      { name: 'Lipid (8 Tests)', count: 8 },
      { name: 'HbA1c & Sugar', count: 2 },
      { name: 'LFT (11 Tests)', count: 11 },
      { name: 'KFT (8 Tests)', count: 8 },
      { name: 'Thyroid TFT', count: 3 },
      { name: 'CBC (24 Tests)', count: 24 }
    ],
    categories: [
      {
        name: 'Advanced Cardiac & Inflammatory Markers (9 Tests)',
        tests: [
          'High Sensitivity C-Reactive Protein (hs-CRP) - High Precision Heart Attack & Vascular Inflammation Risk',
          'Lipid Profile (8 tests): Total Cholesterol, Triglycerides, HDL, LDL, VLDL, Non-HDL, TC/HDL, LDL/HDL'
        ]
      },
      {
        name: 'Essential Vitamin & Enzyme Panel (3 Tests)',
        tests: [
          'Vitamin D3 (25-OH)', 'Vitamin B12 (Cyanocobalamin)', 'Serum Amylase (Pancreatic Health Marker)'
        ]
      },
      {
        name: 'Electrolyte & Mineral Panel (3 Tests)',
        tests: ['Serum Sodium (Na)', 'Serum Potassium (K)', 'Serum Chloride (Cl)']
      },
      {
        name: 'Diabetes Evaluation Panel (2 Tests)',
        tests: ['HbA1c (Glycated Hemoglobin)', 'Average Blood Glucose (eAG)', 'Fasting Blood Sugar']
      },
      {
        name: 'Organ Function Panels (19 Tests)',
        tests: [
          'Complete Liver Function Test (11 tests)', 'Complete Kidney Function Test (8 tests)'
        ]
      },
      {
        name: 'Thyroid Function Profile (3 Tests)',
        tests: ['Total T3', 'Total T4', 'TSH Ultrasensitive']
      },
      {
        name: 'Complete Blood Count & Urine Routine (50 Tests)',
        tests: [
          'Complete CBC Hemogram with ESR (24 parameters)', 'Complete Urine Routine & Microscopic (26 parameters)'
        ]
      }
    ]
  },

  'senior-citizen': {
    id: 'senior-citizen',
    title: 'Atulaya Senior Citizen Comprehensive Care',
    tagline: 'Specially Formulated for Age 50+ (Arthritis, Bone, Nerve & Cardiac)',
    category: 'senior',
    mrp: 6500,
    price: 2995,
    discount: '54% OFF',
    paramCount: 88,
    sampleType: 'Blood & Urine',
    fasting: '10-12 Hours Fasting Required',
    reportTAT: '24 Hours',
    recommendedFor: 'Men and Women aged 50+ with joint pains, diabetes, hypertension, or fatigue',
    organSummary: [
      { name: 'Arthritis (RF / Uric)', count: 4 },
      { name: 'Vitamins D3 & B12', count: 2 },
      { name: 'Cardiac & Lipid', count: 8 },
      { name: 'HbA1c Diabetes', count: 2 },
      { name: 'Kidney & eGFR', count: 8 },
      { name: 'Liver Profile', count: 11 },
      { name: 'Thyroid / PSA', count: 3 },
      { name: 'CBC Hemogram', count: 24 },
      { name: 'Urine Analysis', count: 26 }
    ],
    categories: [
      {
        name: 'Bone, Joint & Arthritis Profile (4 Tests)',
        tests: [
          'Rheumatoid Factor (RF Quantitative) - Rheumatoid Arthritis Indicator',
          'Serum Uric Acid - Gout & Joint Inflammation Marker',
          'Serum Calcium Total - Bone Density & Osteoporosis Risk',
          'Serum Inorganic Phosphorus'
        ]
      },
      {
        name: 'Nerve Vitality & Vitamin Profile (2 Tests)',
        tests: ['Vitamin D3 (25-Hydroxy)', 'Vitamin B12 (Cyanocobalamin)']
      },
      {
        name: 'Cardiac & Lipid Health (8 Tests)',
        tests: [
          'Total Cholesterol', 'Triglycerides', 'HDL Good Cholesterol', 'LDL Bad Cholesterol',
          'VLDL Cholesterol', 'Non-HDL', 'Cardiac Risk Ratios'
        ]
      },
      {
        name: 'Glycemic & Diabetes Evaluation (2 Tests)',
        tests: ['HbA1c Glycated Hemoglobin', 'Estimated Average Glucose', 'Fasting Blood Sugar']
      },
      {
        name: 'Comprehensive Organ Profiles (19 Tests)',
        tests: [
          'Kidney Function with eGFR filtration rate (8 tests)',
          'Complete Liver Function Test (11 tests)'
        ]
      },
      {
        name: 'Thyroid Function Profile (3 Tests)',
        tests: ['Total T3', 'Total T4', 'TSH Ultrasensitive']
      },
      {
        name: 'Complete Blood Count & Urinalysis (50 Tests)',
        tests: [
          'CBC Hemogram (24 tests including ESR for chronic inflammation)',
          'Complete Urine Routine & Microscopic (26 tests for asymptomatic UTIs & kidney health)'
        ]
      }
    ]
  },

  'diabetes-heart': {
    id: 'diabetes-heart',
    title: 'Atulaya Diabetes & Heart Care Package',
    tagline: 'Targeted Glycemic Control, Lipid Management & Renal Safeguard',
    category: 'diabetes',
    mrp: 3200,
    price: 1495,
    discount: '53% OFF',
    paramCount: 65,
    sampleType: 'Blood & Urine',
    fasting: '10-12 Hours Fasting Required',
    reportTAT: '12-18 Hours',
    recommendedFor: 'Diabetic and pre-diabetic patients, hypertension patients, and cardiac care management',
    organSummary: [
      { name: 'HbA1c & eAG', count: 2 },
      { name: 'Lipid Profile', count: 8 },
      { name: 'Renal / Creatinine', count: 8 },
      { name: 'Liver Enzymes', count: 4 },
      { name: 'CBC Hemogram', count: 24 },
      { name: 'Urine Routine', count: 26 }
    ],
    categories: [
      {
        name: 'Diabetes & Glycemic Status (3 Tests)',
        tests: [
          'HbA1c (Glycated Hemoglobin)', 'Estimated Average Glucose (eAG)', 'Fasting Blood Glucose'
        ]
      },
      {
        name: 'Complete Lipid Profile (8 Tests)',
        tests: [
          'Total Cholesterol', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol', 
          'VLDL Cholesterol', 'Non-HDL Cholesterol', 'TC/HDL Ratio', 'LDL/HDL Ratio'
        ]
      },
      {
        name: 'Kidney / Diabetic Nephropathy Screening (8 Tests)',
        tests: [
          'Serum Creatinine', 'Blood Urea Nitrogen', 'Serum Uric Acid', 'Serum Calcium',
          'Electrolytes & BUN/Creatinine Ratio'
        ]
      },
      {
        name: 'Liver Enzymes & Hematology (28 Tests)',
        tests: [
          'SGPT / ALT', 'SGOT / AST', 'Complete Blood Count (CBC - 24 tests)'
        ]
      },
      {
        name: 'Complete Urine Routine Examination (26 Tests)',
        tests: [
          'Microscopic screening for proteinuria, glycosuria, microvascular diabetic kidney indicators'
        ]
      }
    ]
  },

  'womens-wellness': {
    id: 'womens-wellness',
    title: "Atulaya Women's Comprehensive Wellness",
    tagline: 'Hormonal, Anemia, Bone, Thyroid & Vitamin Profile for Women',
    category: 'women',
    mrp: 4800,
    price: 2295,
    discount: '52% OFF',
    paramCount: 78,
    sampleType: 'Blood & Urine',
    fasting: '10-12 Hours Fasting Required',
    reportTAT: '18-24 Hours',
    recommendedFor: 'Women of all ages (PCOD, fatigue, hair fall, thyroid imbalance, bone health)',
    organSummary: [
      { name: 'Thyroid (T3/T4/TSH)', count: 3 },
      { name: 'Iron & Ferritin', count: 4 },
      { name: 'Vitamins D3 & B12', count: 2 },
      { name: 'Serum Calcium', count: 1 },
      { name: 'Lipid Profile', count: 8 },
      { name: 'Liver & Kidney', count: 19 },
      { name: 'CBC Hemogram', count: 24 },
      { name: 'Urine Routine', count: 26 }
    ],
    categories: [
      {
        name: 'Thyroid & Hormonal Wellness (3 Tests)',
        tests: ['Total T3', 'Total T4', 'Thyroid Stimulating Hormone (TSH)']
      },
      {
        name: 'Anemia & Complete Iron Studies (4 Tests)',
        tests: [
          'Serum Ferritin (Iron Storage Protein)', 'Serum Iron', 
          'Total Iron Binding Capacity (TIBC)', 'Transferrin Saturation %'
        ]
      },
      {
        name: 'Bone & Vitamin Vitality (3 Tests)',
        tests: [
          'Vitamin D3 (25-OH)', 'Vitamin B12 (Cyanocobalamin)', 'Serum Calcium Total'
        ]
      },
      {
        name: 'Lipid & Organ Profiles (27 Tests)',
        tests: [
          'Complete Lipid Profile (8 tests)', 'Complete Liver Function (11 tests)', 'Complete Kidney Function (8 tests)'
        ]
      },
      {
        name: 'Complete Blood Count & Urine Routine (50 Tests)',
        tests: [
          'CBC Hemogram + ESR (24 tests for anemia & infection)', 'Complete Urine Routine & Microscopic (26 tests)'
        ]
      }
    ]
  },

  'fever-panel': {
    id: 'fever-panel',
    title: 'Atulaya Fever & Acute Infection Profile',
    tagline: 'Rapid Screen for Dengue, Typhoid, Malaria & Platelets',
    category: 'fever',
    mrp: 2100,
    price: 990,
    discount: '53% OFF',
    paramCount: 42,
    sampleType: 'Blood & Urine',
    fasting: 'No Fasting Required (Random Sample)',
    reportTAT: 'Priority Reporting (4-6 Hours)',
    recommendedFor: 'Patients experiencing fever, chills, body aches, suspected dengue, viral, or typhoid infection',
    organSummary: [
      { name: 'Dengue NS1/Ab', count: 3 },
      { name: 'Typhoid Widal', count: 1 },
      { name: 'Malaria Antigen', count: 2 },
      { name: 'CBC & Platelets', count: 24 },
      { name: 'ESR Inflammation', count: 1 },
      { name: 'Urine Routine', count: 12 }
    ],
    categories: [
      {
        name: 'Vector-Borne & Viral Screening (6 Tests)',
        tests: [
          'Dengue NS1 Antigen (Early Dengue Detection)',
          'Dengue IgM & IgG Antibodies',
          'Typhoid Widal / Typhidot Test',
          'Malaria Antigen (Plasmodium falciparum & vivax) Rapid Card',
          'Peripheral Blood Smear for Malarial Parasites (MP)'
        ]
      },
      {
        name: 'Complete Hemogram & Platelet Assessment (24 Tests)',
        tests: [
          'Complete Platelet Count (Critical for Dengue monitoring)',
          'Total Leukocyte Count (TLC / WBC)', 'Differential Leukocyte Count',
          'Hemoglobin (Hb)', 'Packed Cell Volume (PCV)', 'RBC Indices (MCV, MCH, MCHC, RDW)',
          'Absolute Neutrophil & Lymphocyte Counts', 'Mean Platelet Volume (MPV)'
        ]
      },
      {
        name: 'Inflammatory Markers & Urinalysis (13 Tests)',
        tests: [
          'Erythrocyte Sedimentation Rate (ESR)',
          'Complete Urine Routine (Pus cells, RBCs, Albumin, Sugar, Ketones, pH, Bile Salts)'
        ]
      }
    ]
  }
};

// Search Database with 40+ Individual Tests and Packages
const TESTS_SEARCH_DB = [
  { name: 'Atulaya Advanced Full Body Checkup (76 Params)', type: 'Package', price: '₹1,995', params: '76 Tests', id: 'advanced-full-body' },
  { name: 'Atulaya Basic Health Package (73 Params)', type: 'Package', price: '₹1,195', params: '73 Tests', id: 'basic-health' },
  { name: 'Atulaya Routine Health Package (80 Params)', type: 'Package', price: '₹1,595', params: '80 Tests', id: 'routine-health' },
  { name: 'Atulaya Complete Health Package / Ayushmant Gold (82 Params)', type: 'Package', price: '₹2,495', params: '82 Tests', id: 'complete-full-body' },
  { name: 'Atulaya Senior Citizen Comprehensive (88 Params)', type: 'Package', price: '₹2,995', params: '88 Tests', id: 'senior-citizen' },
  { name: 'Atulaya Diabetes & Heart Care Package (65 Params)', type: 'Package', price: '₹1,495', params: '65 Tests', id: 'diabetes-heart' },
  { name: "Atulaya Women's Comprehensive Wellness (78 Params)", type: 'Package', price: '₹2,295', params: '78 Tests', id: 'womens-wellness' },
  { name: 'Atulaya Fever & Acute Infection Profile (42 Params)', type: 'Package', price: '₹990', params: '42 Tests', id: 'fever-panel' },
  
  // Individual Tests
  { name: 'Complete Blood Count (CBC with Platelet & ESR)', type: 'Individual Test', price: '₹350', params: '24 Params', tag: 'Blood Test' },
  { name: 'HbA1c (Glycated Hemoglobin 3-Month Sugar)', type: 'Individual Test', price: '₹490', params: '2 Params', tag: 'Diabetes' },
  { name: 'Vitamin D3 (25-Hydroxy Cholecalciferol)', type: 'Individual Test', price: '₹850', params: '1 Param', tag: 'Vitamins' },
  { name: 'Vitamin B12 (Cyanocobalamin)', type: 'Individual Test', price: '₹750', params: '1 Param', tag: 'Vitamins' },
  { name: 'Thyroid Profile (Total T3, Total T4, TSH)', type: 'Individual Test', price: '₹450', params: '3 Params', tag: 'Hormones' },
  { name: 'Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)', type: 'Individual Test', price: '₹550', params: '8 Params', tag: 'Heart' },
  { name: 'Liver Function Test (LFT Complete)', type: 'Individual Test', price: '₹600', params: '11 Params', tag: 'Liver' },
  { name: 'Kidney Function Test (KFT / RFT with Creatinine & Urea)', type: 'Individual Test', price: '₹600', params: '8 Params', tag: 'Kidney' },
  { name: 'Fasting Blood Glucose (Blood Sugar Fasting)', type: 'Individual Test', price: '₹90', params: '1 Param', tag: 'Diabetes' },
  { name: 'Post Prandial Blood Glucose (PP Sugar)', type: 'Individual Test', price: '₹90', params: '1 Param', tag: 'Diabetes' },
  { name: 'Complete Urine Routine & Microscopic Examination', type: 'Individual Test', price: '₹180', params: '26 Params', tag: 'Routine' },
  { name: 'Serum Calcium Total', type: 'Individual Test', price: '₹220', params: '1 Param', tag: 'Bone' },
  { name: 'Serum Ferritin (Iron Storage)', type: 'Individual Test', price: '₹550', params: '1 Param', tag: 'Iron' },
  { name: 'Serum Uric Acid (Gout Screening)', type: 'Individual Test', price: '₹200', params: '1 Param', tag: 'Joints' },
  { name: 'Dengue NS1 Antigen & IgM/IgG Antibody Combo', type: 'Individual Test', price: '₹850', params: '3 Params', tag: 'Fever' },
  { name: 'Typhoid Widal / Typhidot Antibody Test', type: 'Individual Test', price: '₹350', params: '2 Params', tag: 'Fever' },
  { name: 'hs-CRP (High Sensitivity C-Reactive Protein)', type: 'Individual Test', price: '₹650', params: '1 Param', tag: 'Heart' },
  { name: 'Serum Electrolytes (Sodium, Potassium, Chloride)', type: 'Individual Test', price: '₹450', params: '3 Params', tag: 'Kidney' },
  { name: 'PSA (Prostate Specific Antigen for Men)', type: 'Individual Test', price: '₹750', params: '1 Param', tag: 'Men' },
  { name: 'Beta HCG (Pregnancy Blood Test)', type: 'Individual Test', price: '₹600', params: '1 Param', tag: 'Women' },
  { name: 'Serum Creatinine with eGFR', type: 'Individual Test', price: '₹220', params: '1 Param', tag: 'Kidney' },
  { name: 'Iron Deficiency Profile (Iron, TIBC, UIBC, Saturation)', type: 'Individual Test', price: '₹650', params: '4 Params', tag: 'Iron' },
  { name: 'Rheumatoid Factor (RF Quantitative)', type: 'Individual Test', price: '₹550', params: '1 Param', tag: 'Joints' }
];

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initFaqAccordions();
  initPackageFilters();
  initHeroTabs();
  initHeroSearch();
  initHeroWhatsAppForm();
  initPrescriptionUpload();
  initParameterModalSystem();
  initWhatsAppConcierge();
  initModalSystem();
  initForms();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation Drawer & Backdrop System
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  let backdrop = document.querySelector('.mobile-nav-backdrop');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    backdrop.id = 'mobileNavBackdrop';
    document.body.appendChild(backdrop);
  }

  if (!toggle || !nav) return;

  const openDrawer = () => {
    nav.classList.add('active');
    toggle.classList.add('active');
    backdrop.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    nav.classList.remove('active');
    toggle.classList.remove('active');
    backdrop.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  backdrop.addEventListener('click', closeDrawer);

  const closeBtns = nav.querySelectorAll('.drawer-close-btn');
  closeBtns.forEach(btn => btn.addEventListener('click', closeDrawer));

  const navLinks = nav.querySelectorAll('.nav-link, .header-cta a, .header-cta button, .drawer-wa-banner, .drawer-helpline-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeDrawer();
    }
  });

  window.openMobileNav = openDrawer;
  window.closeMobileNav = closeDrawer;
}

/* --------------------------------------------------------------------------
   2. Sticky Header Elevation
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 12px rgba(15, 23, 42, 0.06)';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   3. Hero Multi-Tab Switcher
   -------------------------------------------------------------------------- */
function initHeroTabs() {
  const tabBtns = document.querySelectorAll('.hero-tab-btn');
  const tabPanes = document.querySelectorAll('.hero-tab-pane');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* --------------------------------------------------------------------------
   4. Hero Live Search Engine
   -------------------------------------------------------------------------- */
function initHeroSearch() {
  const searchInput = document.getElementById('heroTestSearch');
  const searchDropdown = document.getElementById('heroSearchDropdown');
  const searchWrapper = document.querySelector('.hero-search-box');
  const quickPills = document.querySelectorAll('.quick-search-pill');

  if (!searchInput || !searchDropdown) return;

  const renderResults = (query) => {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) {
      searchDropdown.classList.remove('active');
      searchDropdown.innerHTML = '';
      return;
    }

    const matches = TESTS_SEARCH_DB.filter(item => 
      item.name.toLowerCase().includes(cleanQuery) || 
      (item.tag && item.tag.toLowerCase().includes(cleanQuery)) ||
      (item.type && item.type.toLowerCase().includes(cleanQuery))
    );

    if (!matches.length) {
      searchDropdown.innerHTML = `
        <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 13px;">
          No direct test matched "<strong>${escapeHtml(query)}</strong>".<br>
          <a href="javascript:void(0)" onclick="openWhatsAppInquiry('${escapeHtml(query)}')" style="color: #128C7E; font-weight: 700; text-decoration: underline; margin-top: 6px; display: inline-block;">
            Ask on WhatsApp (+91 75288 88060) →
          </a>
        </div>
      `;
      searchDropdown.classList.add('active');
      return;
    }

    let html = `
      <div class="search-dropdown-header">
        <span>Available Tests & Packages (${matches.length})</span>
        <span>Tap to Book on WhatsApp</span>
      </div>
    `;

    matches.slice(0, 7).forEach(item => {
      html += `
        <div class="search-result-item" onclick="handleSearchResultClick('${escapeHtml(item.name)}', '${item.price}', '${item.id || ''}')">
          <div class="search-item-info">
            <span class="search-item-name">${item.name}</span>
            <span class="search-item-meta">${item.type} • ${item.params}</span>
          </div>
          <div class="search-item-right">
            <span class="search-item-price">${item.price}</span>
            <span class="search-item-action">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
              Book
            </span>
          </div>
        </div>
      `;
    });

    searchDropdown.innerHTML = html;
    searchDropdown.classList.add('active');
  };

  searchInput.addEventListener('input', (e) => {
    renderResults(e.target.value);
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) {
      renderResults(searchInput.value);
    }
  });

  // Handle Quick search pills
  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const term = pill.getAttribute('data-search') || pill.textContent.trim();
      searchInput.value = term;
      renderResults(term);
      searchInput.focus();
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (searchWrapper && !searchWrapper.contains(e.target)) {
      searchDropdown.classList.remove('active');
    }
  });
}

function getPackageUrl(pkgId) {
  const loc = window.location.pathname;
  if (loc.includes('/packages/')) {
    const parts = loc.replace(/\/+$/, '').split('/');
    const currentFolder = parts[parts.length - 1];
    if (currentFolder === 'packages') {
      return `${pkgId}/`;
    } else {
      return `../${pkgId}/`;
    }
  } else if (loc.includes('/about-us/') || loc.includes('/contact-us/') || loc.includes('/home-collection/')) {
    return `../packages/${pkgId}/`;
  } else {
    return `packages/${pkgId}/`;
  }
}

function handleSearchResultClick(name, price, id) {
  if (id && HEALTH_PACKAGES_DATA[id]) {
    window.location.href = getPackageUrl(id);
  } else {
    openWhatsAppBooking(name, price);
  }
  const searchDropdown = document.getElementById('heroSearchDropdown');
  if (searchDropdown) searchDropdown.classList.remove('active');
}

/* --------------------------------------------------------------------------
   5. WhatsApp Direct Message & Booking Generator
   -------------------------------------------------------------------------- */
const ATULAYA_WHATSAPP_NUMBER = '917528888060';

function sendWhatsAppMessage(message) {
  const encodedUrl = `https://wa.me/${ATULAYA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

function openWhatsAppBooking(pkgName = 'Full Body Health Package', price = '', patientName = '', locality = '', timeSlot = '') {
  let message = `🏥 *ATULAYA HEALTHCARE LAB MOHALI*\n`;
  message += `📋 *Test / Health Package Booking*\n`;
  message += `─────────────────────────\n`;
  message += `• *Test / Package:* ${pkgName}`;
  if (price) message += ` (${price})`;
  message += `\n`;
  
  if (patientName) message += `• *Patient Name:* ${patientName}\n`;
  if (locality) message += `• *Mohali Locality / Sector:* ${locality}\n`;
  if (timeSlot) message += `• *Preferred Time Slot:* ${timeSlot}\n`;

  message += `─────────────────────────\n`;
  message += `Please confirm phlebotomist availability and booking details. Thank you!`;

  sendWhatsAppMessage(message);
}

function openWhatsAppInquiry(testName = '') {
  let message = `🏥 *ATULAYA HEALTHCARE LAB MOHALI*\n`;
  message += `💬 *Blood Test & Package Inquiry*\n`;
  message += `─────────────────────────\n`;
  message += `• *Inquiry For:* ${testName || 'Diagnostic Blood Test'}\n`;
  message += `─────────────────────────\n`;
  message += `Could you please share the price quotation, sample collection timings, and home visit availability in Mohali? Thank you!`;
  
  sendWhatsAppMessage(message);
}

function initHeroWhatsAppForm() {
  const form = document.getElementById('heroWhatsAppForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pkgSelect = form.querySelector('#heroWaPackage');
    const nameInput = form.querySelector('#heroWaName');
    const locInput = form.querySelector('#heroWaLocality');
    const slotSelect = form.querySelector('#heroWaSlot');

    const pkgName = pkgSelect ? pkgSelect.options[pkgSelect.selectedIndex].text : 'Health Package';
    const name = nameInput ? nameInput.value.trim() : '';
    const loc = locInput ? locInput.value.trim() : '';
    const slot = slotSelect ? slotSelect.value : '';

    openWhatsAppBooking(pkgName, '', name, loc, slot);
    showToast('Redirecting to WhatsApp for booking confirmation...', 'success');
  });
}

function initPrescriptionUpload() {
  const uploadForms = document.querySelectorAll('.prescription-wa-form');
  uploadForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('input[name="patient_name"]');
      const locInput = form.querySelector('input[name="patient_locality"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const loc = locInput ? locInput.value.trim() : '';

      let message = `🏥 *ATULAYA HEALTHCARE LAB MOHALI*\n`;
      message += `📄 *Doctor Prescription Upload Request*\n`;
      message += `─────────────────────────\n`;
      if (name) message += `• *Patient Name:* ${name}\n`;
      if (loc) message += `• *Mohali Locality / Sector:* ${loc}\n`;
      message += `─────────────────────────\n`;
      message += `I am attaching my prescription photo here. Please review and suggest tests with price quotation and home visit slot.`;

      sendWhatsAppMessage(message);
      showToast('Opening WhatsApp to send prescription photo...', 'success');
    });
  });
}

/* --------------------------------------------------------------------------
   6. Parameter Details Modal System
   -------------------------------------------------------------------------- */
function initParameterModalSystem() {
  const modalOverlay = document.getElementById('packageDetailModal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.param-modal-close-btn');
  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });

  // Attach global triggers
  document.querySelectorAll('[data-view-package]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkgId = btn.getAttribute('data-view-package');
      openPackageModal(pkgId);
    });
  });

  window.openPackageModal = (pkgId) => {
    const pkg = HEALTH_PACKAGES_DATA[pkgId];
    if (!pkg) return;

    const titleEl = modalOverlay.querySelector('#modalPackageTitle');
    const paramCountEl = modalOverlay.querySelector('#modalParamCount');
    const metaRowEl = modalOverlay.querySelector('#modalMetaRow');
    const bodyEl = modalOverlay.querySelector('#modalParamsBody');
    const priceEl = modalOverlay.querySelector('#modalPriceDisplay');
    const waBtn = modalOverlay.querySelector('#modalWaBookBtn');

    if (titleEl) titleEl.textContent = pkg.title;
    if (paramCountEl) paramCountEl.textContent = `${pkg.paramCount} Parameters Included`;

    if (metaRowEl) {
      metaRowEl.innerHTML = `
        <span class="param-modal-meta-badge">🧪 Sample: ${pkg.sampleType}</span>
        <span class="param-modal-meta-badge">🕒 Fasting: ${pkg.fasting}</span>
        <span class="param-modal-meta-badge">📄 TAT: ${pkg.reportTAT}</span>
      `;
    }

    if (priceEl) {
      priceEl.innerHTML = `
        <span style="font-size: 13px; color: var(--text-light); text-decoration: line-through;">MRP ₹${pkg.mrp}</span>
        <span style="font-size: 24px; font-weight: 800; color: var(--navy-950);">₹${pkg.price}</span>
        <span style="font-size: 11px; font-weight: 800; color: #15803d; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">${pkg.discount}</span>
      `;
    }

    if (bodyEl) {
      let categoriesHtml = `
        <div class="param-prep-banner">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span><strong>Patient Preparation:</strong> ${pkg.fasting}. Plain drinking water is allowed before sample collection.</span>
        </div>
      `;

      pkg.categories.forEach(cat => {
        categoriesHtml += `
          <div class="param-category-block">
            <div class="param-category-title">
              <span>${cat.name}</span>
              <span class="count-tag">${cat.tests.length} tests</span>
            </div>
            <div class="param-chips-grid">
              ${cat.tests.map(test => `
                <div class="param-chip-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${test}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      });

      bodyEl.innerHTML = categoriesHtml;
    }

    if (waBtn) {
      waBtn.onclick = () => {
        openWhatsAppBooking(pkg.title, `₹${pkg.price}`);
      };
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
}

/* --------------------------------------------------------------------------
   7. Floating WhatsApp Concierge Drawer
   -------------------------------------------------------------------------- */
function initWhatsAppConcierge() {
  const toggle = document.querySelector('.whatsapp-concierge-toggle');
  const drawer = document.querySelector('.whatsapp-popup-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    drawer.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('active') && !drawer.contains(e.target) && !toggle.contains(e.target)) {
      drawer.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   8. Package Filters
   -------------------------------------------------------------------------- */
function initPackageFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const packageCards = document.querySelectorAll('.package-card[data-category]');
  if (!filterBtns.length || !packageCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      packageCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   9. Booking Modal System
   -------------------------------------------------------------------------- */
function initModalSystem() {
  const modalOverlay = document.getElementById('bookingModal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');

  const openModal = (defaultService = '') => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (defaultService) {
      const select = modalOverlay.querySelector('#modalService');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.toLowerCase().includes(defaultService.toLowerCase()) || 
              select.options[i].value.toLowerCase().includes(defaultService.toLowerCase())) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    }
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const service = trigger.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });

  window.openBookingModal = openModal;
  window.closeBookingModal = closeModal;
}

/* --------------------------------------------------------------------------
   10. FAQ Accordions
   -------------------------------------------------------------------------- */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   11. WhatsApp Integrated Forms & Toast Feedback
   -------------------------------------------------------------------------- */
function generateWhatsAppMessageFromForm(form) {
  // 1. Home Collection Page Dedicated Form
  if (form.querySelector('#colName') || form.querySelector('#colAddress')) {
    const name = form.querySelector('#colName, [name="patient_name"]')?.value.trim() || '';
    const phone = form.querySelector('#colPhone, [name="phone"]')?.value.trim() || '';
    const ageGender = form.querySelector('#colAge, [name="age_gender"]')?.value.trim() || '';
    const test = form.querySelector('#colTest, [name="test_type"]')?.value || 'Home Sample Collection';
    const address = form.querySelector('#colAddress, [name="full_address"]')?.value.trim() || '';
    const date = form.querySelector('#colDate, [name="preferred_date"]')?.value.trim() || 'Tomorrow Morning';
    const time = form.querySelector('#colTime, [name="preferred_time"]')?.value || 'Morning Fasting Slot';

    let msg = `🏥 *ATULAYA HEALTHCARE LAB MOHALI*\n`;
    msg += `🩸 *Home Sample Collection Booking Request*\n`;
    msg += `─────────────────────────\n`;
    if (name) msg += `• *Patient Name:* ${name}\n`;
    if (phone) msg += `• *Mobile Number:* ${phone}\n`;
    if (ageGender) msg += `• *Age / Gender:* ${ageGender}\n`;
    msg += `• *Test / Package:* ${test}\n`;
    if (address) msg += `• *Full Address / Sector:* ${address}\n`;
    if (date) msg += `• *Preferred Date:* ${date}\n`;
    if (time) msg += `• *Preferred Time Slot:* ${time}\n`;
    msg += `─────────────────────────\n`;
    msg += `Please confirm phlebotomist visit for home collection. Thank you!`;
    return msg;
  }

  // 2. Contact Us Inquiry / Message Form
  if (form.querySelector('#contactName') || form.querySelector('#contactMessage')) {
    const name = form.querySelector('#contactName, [name="name"]')?.value.trim() || '';
    const phone = form.querySelector('#contactPhone, [name="phone"]')?.value.trim() || '';
    const subject = form.querySelector('#contactSubject, [name="subject"]')?.value || 'General Inquiry';
    const message = form.querySelector('#contactMessage, [name="message"]')?.value.trim() || '';

    let msg = `🏥 *ATULAYA HEALTHCARE LAB MOHALI*\n`;
    msg += `📩 *Website Enquiry / Message*\n`;
    msg += `─────────────────────────\n`;
    if (name) msg += `• *Name:* ${name}\n`;
    if (phone) msg += `• *Phone Number:* ${phone}\n`;
    msg += `• *Subject:* ${subject}\n`;
    if (message) msg += `• *Details / Message:* ${message}\n`;
    msg += `─────────────────────────\n`;
    msg += `Please reply with test details and assistance. Thank you!`;
    return msg;
  }

  // 3. Hero Tab 2 (Schedule Test / Home Visit) Form
  if (form.closest('#tab-form-book') || form.querySelector('#heroFormName')) {
    const name = form.querySelector('#heroFormName, [name="patient_name"]')?.value.trim() || '';
    const phone = form.querySelector('#heroFormPhone, [name="mobile_number"]')?.value.trim() || '';
    const service = form.querySelector('#heroFormService, [name="service_type"]')?.value || 'Home Sample Collection';
    const address = form.querySelector('#heroFormAddress, [name="patient_address"]')?.value.trim() || '';

    let msg = `🏥 *ATULAYA HEALTHCARE LAB MOHALI*\n`;
    msg += `📋 *Schedule Test / Home Visit Booking*\n`;
    msg += `─────────────────────────\n`;
    if (name) msg += `• *Patient Name:* ${name}\n`;
    if (phone) msg += `• *Mobile Number:* ${phone}\n`;
    msg += `• *Service / Package:* ${service}\n`;
    if (address) msg += `• *Locality / Sector:* ${address}\n`;
    msg += `─────────────────────────\n`;
    msg += `Please confirm my booking and schedule home sample collection. Thank you!`;
    return msg;
  }

  // 4. Global Booking Modal Form (Used across all pages)
  if (form.closest('#bookingModal') || form.querySelector('#modalName') || form.querySelector('#modalService')) {
    const name = form.querySelector('#modalName, [name="patient_name"]')?.value.trim() || '';
    const phone = form.querySelector('#modalPhone, [name="phone_number"]')?.value.trim() || '';
    const service = form.querySelector('#modalService, [name="selected_service"]')?.value || 'Diagnostic Test';
    const address = form.querySelector('#modalAddress, [name="address"]')?.value.trim() || '';
    const slot = form.querySelector('#modalDate, [name="preferred_slot"]')?.value.trim() || '';

    let msg = `🏥 *ATULAYA HEALTHCARE LAB MOHALI*\n`;
    msg += `📋 *Diagnostic Test / Package Booking*\n`;
    msg += `─────────────────────────\n`;
    if (name) msg += `• *Patient Name:* ${name}\n`;
    if (phone) msg += `• *Mobile Number:* ${phone}\n`;
    msg += `• *Selected Test / Package:* ${service}\n`;
    if (address) msg += `• *Mohali Address / Sector:* ${address}\n`;
    if (slot) msg += `• *Preferred Slot / Date:* ${slot}\n`;
    msg += `─────────────────────────\n`;
    msg += `Please confirm my test booking and phlebotomist availability. Thank you!`;
    return msg;
  }

  // 5. Generic Form Dynamic Fallback (Ensures 100% form coverage anywhere)
  let msg = `🏥 *ATULAYA HEALTHCARE LAB MOHALI*\n`;
  msg += `📋 *Test Booking / Inquiry Request*\n`;
  msg += `─────────────────────────\n`;

  const fields = form.querySelectorAll('input, select, textarea');
  let hasContent = false;

  fields.forEach(field => {
    if (field.type === 'submit' || field.type === 'button' || field.type === 'hidden') return;
    const val = field.value?.trim();
    if (!val) return;

    let labelName = '';
    if (field.id) {
      const lbl = form.querySelector(`label[for="${field.id}"]`);
      if (lbl) labelName = lbl.textContent.replace('*', '').trim();
    }
    if (!labelName && field.name) {
      labelName = field.name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }
    if (!labelName) labelName = field.placeholder || 'Detail';

    msg += `• *${labelName}:* ${val}\n`;
    hasContent = true;
  });

  if (!hasContent) {
    msg += `• I would like to book a blood test / health package.\n`;
  }

  msg += `─────────────────────────\n`;
  msg += `Please confirm details with me. Thank you!`;
  return msg;
}

function initForms() {
  const forms = document.querySelectorAll('form[data-ajax-form]');
  if (!forms.length) return;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const phoneInput = form.querySelector('input[type="tel"], input[name*="phone"], input[name*="mobile"]');
      if (phoneInput && phoneInput.value.trim().length < 10) {
        showToast('Please enter a valid 10-digit mobile number.', 'warning');
        phoneInput.focus();
        return;
      }

      // Generate formatted message for WhatsApp
      const whatsappMessage = generateWhatsAppMessageFromForm(form);

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submitting...';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10"></path>
          </svg> Opening WhatsApp...
        `;
      }

      showToast('Opening WhatsApp to send your booking details...', 'success');

      // Send to WhatsApp
      sendWhatsAppMessage(whatsappMessage);

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        form.reset();
        if (window.closeBookingModal) window.closeBookingModal();
      }, 700);
    });
  });
}

function showToast(message, type = 'success') {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  const iconSvg = type === 'success' ? `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ` : `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  `;

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    }[s];
  });
}
