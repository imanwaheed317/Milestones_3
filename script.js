var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Collect input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('contact').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Generate the resume content dynamically
        var resumeHTML = "\n      <h2><b>Resume</b></h2>\n\n      <h3>Personal Information</h3>\n      <p><b>Name:</b> ".concat(name, " </p>\n      <p><b>Email:</b> ").concat(email, "</p>\n      <p><b>Contact:</b> ").concat(contact, "</p>\n\n      <h3>Education</h3>\n      <p> ").concat(education, "</p>\n\n      <h3>Experience</h3>\n      <p> ").concat(experience, "</p>\n\n      <h3>Skills</h3>\n      <p> ").concat(skills, "</p>\n    ");
        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
    });
}
