// const toggleButton = document.getElementById('toggle-Refrence') as HTMLButtonElement
// const Refrence = document.getElementById('Refrence') as HTMLElement

// toggleButton.addEventListener('click',()=>{
//     if (Refrence.style.display === 'none') {
//     Refrence.style.display = 'block'
// }   else{
//     Refrence.style.display = 'none'
// }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('toggle-Refrence') as HTMLButtonElement;
//     const Refrence = document.getElementById('Refrence') as HTMLElement;
  
//     if (toggleButton && Refrence) {
//       toggleButton.addEventListener('click', () => {
//         if (Refrence.style.display === 'none') {
//           Refrence.style.display = 'block';
//         } else {
//           Refrence.style.display = 'none';
//         }
//       });
//     } else {
//       console.error('Element not found!');
//     }
//   });

// Get the button elements using their IDs
const toggleWorkExperienceButton = document.getElementById('toggle-WorkExperience') as HTMLButtonElement;
const toggleRefrenceButton = document.getElementById('toggle-Refrence') as HTMLButtonElement;

// Get the section elements using their IDs
const workExperienceSection = document.getElementById('WorkExperience') as HTMLElement;
const refrenceSection = document.getElementById('Refrence') as HTMLElement;

// Check if elements are successfully selected
console.log('toggleWorkExperienceButton:', toggleWorkExperienceButton);
console.log('toggleRefrenceButton:', toggleRefrenceButton);
console.log('workExperienceSection:', workExperienceSection);
console.log('refrenceSection:', refrenceSection);

// Add event listeners to the buttons
toggleWorkExperienceButton.addEventListener('click', () => {
    console.log("Work Experience Button Clicked!"); // Debug log for button click
    // Toggle WorkExperience section visibility
    if (workExperienceSection.style.display === 'none') {
        console.log('Showing Work Experience Section');
        workExperienceSection.style.display = 'block';  // Show the section
    } else {
        console.log('Hiding Work Experience Section');
        workExperienceSection.style.display = 'none';  // Hide the section
    }
});

toggleRefrenceButton.addEventListener('click', () => {
    console.log("Reference Button Clicked!"); // Debug log for button click
    // Toggle Refrence section visibility
    if (refrenceSection.style.display === 'none') {
        console.log('Showing Reference Section');
        refrenceSection.style.display = 'block';  // Show the section
    } else {
        console.log('Hiding Reference Section');
        refrenceSection.style.display = 'none';  // Hide the section
    }
});

  