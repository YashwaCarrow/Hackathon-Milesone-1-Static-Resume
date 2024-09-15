// Getting the buttons and sections
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var toggleHobbiesBtn = document.getElementById('toggle-hobbies-btn');
var toggleLanguagesBtn = document.getElementById('toggle-languages-btn');
var skillsSection = document.getElementById('skills');
var hobbiesSection = document.getElementById('hobbies');
var languagesSection = document.getElementById('languages');
// Function to toggle visibility of sections with animation
function toggleSection(section, button, sectionName) {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        button.textContent = "Hide ".concat(sectionName);
        section.style.animation = 'fadeIn 1s ease-in-out';
    }
    else {
        section.classList.add('hidden');
        button.textContent = "Show ".concat(sectionName);
    }
}
// Add event listeners for each button
toggleSkillsBtn.addEventListener('click', function () { return toggleSection(skillsSection, toggleSkillsBtn, 'Skills'); });
toggleHobbiesBtn.addEventListener('click', function () { return toggleSection(hobbiesSection, toggleHobbiesBtn, 'Hobbies'); });
toggleLanguagesBtn.addEventListener('click', function () { return toggleSection(languagesSection, toggleLanguagesBtn, 'Languages'); });
