// Getting the buttons and sections
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const toggleHobbiesBtn = document.getElementById('toggle-hobbies-btn') as HTMLButtonElement;
const toggleLanguagesBtn = document.getElementById('toggle-languages-btn') as HTMLButtonElement;

const skillsSection = document.getElementById('skills') as HTMLElement;
const hobbiesSection = document.getElementById('hobbies') as HTMLElement;
const languagesSection = document.getElementById('languages') as HTMLElement;

// Function to toggle visibility of sections with animation
function toggleSection(section: HTMLElement, button: HTMLButtonElement, sectionName: string): void {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        button.textContent = `Hide ${sectionName}`;
        section.style.animation = 'fadeIn 1s ease-in-out';
    } else {
        section.classList.add('hidden');
        button.textContent = `Show ${sectionName}`;
    }
}

// Add event listeners for each button
toggleSkillsBtn.addEventListener('click', () => toggleSection(skillsSection, toggleSkillsBtn, 'Skills'));
toggleHobbiesBtn.addEventListener('click', () => toggleSection(hobbiesSection, toggleHobbiesBtn, 'Hobbies'));
toggleLanguagesBtn.addEventListener('click', () => toggleSection(languagesSection, toggleLanguagesBtn, 'Languages'));
