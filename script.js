// script.js

// 1. Initialize Data
let resumeData = {};

// 2. Load Config on Startup
window.addEventListener('DOMContentLoaded', () => {
    // Load from config.js
    resumeData = JSON.parse(JSON.stringify(defaultConfig)); 
    
    // Populate Form Inputs
    populateForm();
    
    // Render Initial Preview
    updatePreview();
});

// 3. Populate Form Helper
function populateForm() {
    document.getElementById('fullName').value = resumeData.personal.fullName;
    document.getElementById('jobTitle').value = resumeData.personal.jobTitle;
    document.getElementById('email').value = resumeData.personal.email;
    document.getElementById('phone').value = resumeData.personal.phone;
    document.getElementById('linkedin').value = resumeData.personal.linkedin;
    document.getElementById('summary').value = resumeData.summary;
    document.getElementById('skills').value = resumeData.skills;
    
    // Convert Arrays to JSON strings for the textareas
    document.getElementById('experience').value = JSON.stringify(resumeData.experience, null, 2);
    document.getElementById('education').value = JSON.stringify(resumeData.education, null, 2);

    // Add Event Listeners for Live Updates
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', handleInput);
    });
}

// 4. Handle Input Changes
function handleInput(e) {
    const id = e.target.id;
    const value = e.target.value;

    // Map form IDs to Data Object
    if(id === 'fullName') resumeData.personal.fullName = value;
    if(id === 'jobTitle') resumeData.personal.jobTitle = value;
    if(id === 'email') resumeData.personal.email = value;
    if(id === 'phone') resumeData.personal.phone = value;
    if(id === 'linkedin') resumeData.personal.linkedin = value;
    if(id === 'summary') resumeData.summary = value;
    if(id === 'skills') resumeData.skills = value;
    
    // Handle JSON parsing for arrays
    if(id === 'experience') {
        try { resumeData.experience = JSON.parse(value); } catch(err) { /* Ignore invalid JSON while typing */ }
    }
    if(id === 'education') {
        try { resumeData.education = JSON.parse(value); } catch(err) { /* Ignore invalid JSON while typing */ }
    }

    updatePreview();
}

// 5. Render Preview
function updatePreview() {
    // Personal Info
    document.getElementById('res-name').innerText = resumeData.personal.fullName || "Your Name";
    document.getElementById('res-title').innerText = resumeData.personal.jobTitle || "Job Title";
    document.getElementById('res-email').innerText = resumeData.personal.email || "email@example.com";
    document.getElementById('res-phone').innerText = resumeData.personal.phone || "Phone";
    document.getElementById('res-link').innerText = resumeData.personal.linkedin || "Link";

    // Sections
    document.getElementById('res-summary').innerText = resumeData.summary || "Summary...";
    document.getElementById('res-skills').innerText = resumeData.skills || "Skills...";

    // Experience Loop
    const expContainer = document.getElementById('res-experience-container');
    expContainer.innerHTML = '';
    resumeData.experience.forEach(job => {
        const div = document.createElement('div');
        div.className = 'job-item';
        div.innerHTML = `
            <div class="job-header">
                <span>${job.role}</span>
                <span>${job.date}</span>
            </div>
            <div class="job-company">${job.company}</div>
            <p>${job.details}</p>
        `;
        expContainer.appendChild(div);
    });

    // Education Loop
    const eduContainer = document.getElementById('res-education-container');
    eduContainer.innerHTML = '';
    resumeData.education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'job-item';
        div.innerHTML = `
            <div class="job-header">
                <span>${edu.degree}</span>
                <span>${edu.year}</span>
            </div>
            <div class="job-company">${edu.school}</div>
        `;
        eduContainer.appendChild(div);
    });
}

// 6. Download PDF Function
function downloadResume() {
    const element = document.getElementById('resume-document');
    
    // Configuration for html2pdf
    const opt = {
        margin:       0,
        filename:     `${resumeData.personal.fullName.replace(/\s+/g, '_')}_Resume.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate
    html2pdf().set(opt).from(element).save();
}
