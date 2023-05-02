const toggleButtons = document.querySelectorAll(".toggleButton");
const arrowClass = "arrow";
const openArrow = "&#9650;";
const closedArrow = "&#9660;";
const languageButtons = document.querySelectorAll(".language-button");



const translations = {
    en: {
        name: "Ariel Amzallag",
        job: "Student looking for an internship",
        phone: "Phone:",
        skill: "Skills",
        languages: "Languages",
        french: "French - Mother Tongue",
        english: "English - 874 (TOEIC practice Exam)",
        interests: "Interests",
        video_game_conception: "Video Game Conception",
        reading: "Reading",
        music: "Music",
        story_writing: "Story Writing",
        project_management: "Project Management",
        professional_summary: "Professional Summary",
        professional_summary_text: "As a highly motivated and ambitious first-year Bachelor's student at EFREI Paris, I am actively seeking an 8-week internship opportunity to further enhance my skills and gain practical experience in the field of computer science. With a strong foundation in programming languages such as Python, Java, and C, as well as experience in web development using HTML, CSS, and JavaScript, I am eager to contribute my knowledge and passion for technology to a dynamic team environment.",
        work_experience: "Work Experience",
        intern_ibsf: "Intern, IBSF France",
        ibsf_date: "1st June 2022 - 2nd July 2022",
        ibsf_task1: "Computer assembly",
        ibsf_task2: "Operating system installation",
        intern_streetpress: "Intern, StreetPress",
        streetpress_date: "18th - 22th December 2017",
        streetpress_task1: "Writing article summaries",
        streetpress_task2: "Video editing with Adobe Premiere",
        education: "Education",
        efrei_paris1: "EFREI Paris",
        efrei_program1: "European bachelor, Programming / computer developer, general",
        efrei_date1: "sept. 2022 - july. 2025",
        efrei_paris2: "EFREI Paris",
        efrei_program2: "Year 1 Computer science degree, preparatory cycle",
        efrei_date2: "sept. 2021 - july. 2022",
        mare_carree: "Polyvalent high school of Mare Carrée",
        mare_program: "General Baccalaureate, Computer Science",
        mare_date: "sept. 2018 - july. 2021",
        level: "Level:",
        skills: "Skills:",
        honorable_mention: "Honorable Mention"
    },
    fr: {
        name: "Ariel Amzallag",
        job: "Étudiant en recherche de stage",
        phone: "Téléphone :",
        skill: "Compétences",
        project_management: "Gestion de projet",
        languages: "Langues",
        french: "Français - Langue maternelle",
        english: "Anglais - 874 (TOEIC blanc)",
        interests: "Centres d'intérêt",
        video_game_conception: "Conception de jeux vidéo",
        reading: "Lecture",
        music: "Musique",
        story_writing: "Écriture d'histoires",
        professional_summary: "Résumé professionnel",
        professional_summary_text: "Étudiant en première année de licence à EFREI Paris, je suis à la recherche d'un stage de 8 semaines pour approfondir mes compétences et acquérir de l'expérience dans le domaine de l'informatique. Avec une solide base en langages de programmation tels que Python, Java et C, ainsi qu'une expérience en développement web avec HTML, CSS et JavaScript, je suis impatient de mettre à profit mes connaissances et ma passion pour la technologie au sein d'une équipe dynamique.",
        work_experience: "Expérience professionnelle",
        intern_ibsf: "Stagiaire, IBSF France",
        ibsf_date: "1 juin 2022 - 2 juillet 2022",
        ibsf_task1: "Assemblage d'ordinateurs",
        ibsf_task2: "Installation du système d'exploitation",
        intern_streetpress: "Stagiaire, StreetPress",
        streetpress_date: "18 - 22 décembre 2017",
        streetpress_task1: "Rédaction de résumés d'articles",
        streetpress_task2: "Montage vidéo avec Adobe Premiere",
        education: "Formation",
        efrei_paris1: "EFREI Paris",
        efrei_program1: "Baccalauréat européen, Programmation / développeur informatique, général",
        efrei_date1: "sept. 2022 - juil. 2025",
        efrei_paris2: "EFREI Paris",
        efrei_program2: "1ère année de licence en informatique, cycle préparatoire",
        efrei_date2: "sept. 2021 - juil. 2022",
        mare_carree: "Lycée polyvalent Mare Carrée",
        mare_program: "Baccalauréat général, Informatique",
        mare_date: "sept. 2018 - juil. 2021",
        level: "Niveau :",
        skills: "Compétences :",
        honorable_mention: "Mention assez bien"
    }
  };  

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const list = button.nextElementSibling;
    const arrow = button.querySelector(`.${arrowClass}`);
    const isListVisible = list.style.display === "block";

    if (isListVisible) {
      list.style.display = "none";
      arrow.innerHTML = closedArrow;
    } else {
      list.style.display = "block";
      arrow.innerHTML = openArrow;
    }
  });
});

function changeLanguage(language) {
    const translateElements = document.querySelectorAll(".translate");
  
    translateElements.forEach((element) => {
      const translateKey = element.dataset.translateKey;
      if (translations[language][translateKey]) {
        element.textContent = translations[language][translateKey];
      }
    });
  }
  
  
  // Event listeners for language buttons
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      changeLanguage(language);
    });
  });
  
  // Set default language to English
  changeLanguage("en");
