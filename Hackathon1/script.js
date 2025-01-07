document.getElementById("toggle-Work Experience").addEventListener("click", function() {
    const workExperienceSection = document.getElementById("Work Experience");
    if (workExperienceSection.style.display === "none") {
        workExperienceSection.style.display = "block";
    } else {
        workExperienceSection.style.display = "none";
    }
});

document.getElementById("toggle-Refrence").addEventListener("click", function() {
    const referenceSection = document.getElementById("Refrence");
    if (referenceSection.style.display === "none") {
        referenceSection.style.display = "block";
    } else {
        referenceSection.style.display = "none";
    }
});
