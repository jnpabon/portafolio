

// Define a flag to prevent multiple animations
let isAnimating = false;

// Language Toggle Functionality
const roles = {
    en: ["QA Engineer", "Mechatronics Engineer"],
    es: ["Ing. de Calidad de Software", "Ingeniera en Mecatrónica"]
};

let currentIndex = 0;
let currentLang = 'en';
let roleElement = document.getElementById("role");

function typeWriter(text, i, callback) {
    if (i < text.length) {
        roleElement.innerHTML = text.substring(0, i + 1);
        setTimeout(() => typeWriter(text, i + 1, callback), 100);
    } else if (typeof callback === 'function') {
        setTimeout(callback, 700); // Pause before starting to delete
    }
}

function deleteWriter(text, i, callback) {
    if (i >= 0) {
        roleElement.innerHTML = text.substring(0, i);
        setTimeout(() => deleteWriter(text, i - 1, callback), 50);
    } else if (typeof callback === 'function') {
        callback();
    }
}

function startTextAnimation() {
    if (isAnimating) return; // Prevent multiple animations
    isAnimating = true;

    const currentRole = roles[currentLang][currentIndex];
    typeWriter(currentRole, 0, () => {
        deleteWriter(currentRole, currentRole.length, () => {
            currentIndex = (currentIndex + 1) % roles[currentLang].length;
            isAnimating = false; // Allow new animation to start
            startTextAnimation();
        });
    });
}

// Define the static text strings for both languages
// Texto de la sección del Hero 
const staticTextEn = "Hi, my name is <span class='text-color-main'>Jenny Pabón</span><br />I'm ";
const staticTextEs = "Hola, mi nombre es <span class='text-color-main'>Jenny Pabón</span><br />Soy ";

// Texto en las secciones de About me y Proyectos
// Para añadir más proyectos con sus traducciones seguir los siguientes pasos:
// Paso 1: Añadir el proyecto con copy paste en la Projects section, copiando desde Notice each row.. hasta END Project.
// Paso 2: Cambiar el nombre del ID del proyecto, tanto para el título como para descripción (ahí mismo en el proyecto que acabas de añadir, viene como (id= project-1-title) y así con la descripción también, poner el número correspondiente.
// Paso 3: Aquí abajo en la parte de const content añadir el project#title y description en inglés y español. Verificar que no se olviden las comas (,) al final.
// Paso 4: En la function updateContent() añadir el proyecto, igual puede hacer un copy-paste de algúno otro proyecto (son 2 líneas).
// Paso 5: En el if y en el else añadir también el proyecto, title y description.

const content = {
    en: {
        aboutMe1: "👋 I'm Jenny Nataly Pabón Yañez, a QA Engineer with a Mechatronics Engineering background.",
        aboutMe2: "I discovered my affinity and talent for Quality Assurance, focusing on manual testing and specializing in black-box testing for web and mobile projects. I have significantly contributed to the creation of Testing departments, ensuring products meet the highest quality standards. <br><br> I am deeply interested in test automation, using tools like Selenium WebDriver and Postman. Additionally, I have experience in creating and executing test cases, requirements analysis, and integration testing. <br><br> My background in Mechatronics Engineering has given me exceptional analytical and technical skills to tackle complex problems efficiently. <br><br> In my profile, you'll find projects showcasing my QA skills and experience. I am committed to continuous learning and always seek to collaborate and learn from other professionals. <br><br> Let's connect! 🤝 I am interested in contributing to dynamic development teams and learning from new experiences.",
        aboutTitle: "About me",
        projectsTitle: "Projects",
        project1Title: "PROJECT #1: Urban Scooter",
        project1Description: "QA project for the scooter rental application, which included exhaustive testing on the web and Android platforms. Ensured optimal quality and functionality by performing manual and automated tests, validating API integration, and reporting bugs in Jira.",
        project2Title: "PROJECT #2: Urban Routes",
        project2Description: "This project automates the UrbanRoutes booking process using Selenium WebDriver and Python. It covers various functionalities such as setting routes, selecting taxi fares, providing phone numbers and credit card details, messaging drivers, and requesting additional services like blankets and ice cream.",
        project3Title: "PROJECT #3: Urban Grocers",
        project3Description: "QA project focused on API validation for a food delivery application. Conducted exhaustive API tests using Postman, created automated scripts with Pytest, and documented issues in Jira.",
        project4Title: "PROJECT #4: Urban Lunch",
        project4Description: "This QA project for the Urban Lunch mobile application involved exhaustive testing on the Android platform, ensuring optimal quality and functionality. Utilized Android Studio and real devices for testing, applied best practices for testing native mobile applications, and reported bugs in Jira.",
        project5Title: "PROJECT #5: CURA Healthcare Service",
        project5Description: "This project involves the automation of login, scheduling appointments, and verifying medical appointment information using Python, PyCharm, Pytest, and Selenium WebDriver. The tests were conducted on the web application available at CURA Healthcare Service. The objective was to ensure the functionality and reliability of the user authentication, appointment scheduling, and information verification processes.",
        projectFolder: "Project Folder",
        sourceCode: "Source Code",
        contactTitle: "Contact",
        contactText: "Don't hesitate to reach out to me!",
        contactBtn: "Get in Touch"
    },
    es: {
        aboutMe1: "👋 Soy Jenny Nataly Pabón Yañez, una QA Engineer con formación en Ingeniería en Mecatrónica.",
        aboutMe2: "Descubrí mi afinidad y talento para el Quality Assurance, enfocándome en pruebas manuales y especializándome en pruebas de caja negra para proyectos web y móviles. He contribuido significativamente a la creación de departamentos de Testing, asegurando que los productos cumplan con los más altos estándares de calidad. <br><br> Me interesa profundamente la automatización de pruebas, usando herramientas como Selenium WebDriver y Postman. Además, tengo experiencia en la creación y ejecución de casos de prueba, análisis de requisitos y pruebas de integración. <br><br> Mi formación en Ingeniería en Mecatrónica me ha dotado de habilidades analíticas y técnicas excepcionales para abordar problemas complejos de manera eficiente. <br><br> En mi perfil encontrarás proyectos que muestran mis habilidades y experiencia en QA. Estoy comprometida con el aprendizaje continuo y siempre busco colaborar y aprender de otros profesionales. <br><br> ¡Conectemos! 🤝 Estoy interesada en contribuir a equipos de desarrollo dinámicos y aprender de nuevas experiencias.",
        aboutTitle: "Acerca de mí",
        projectsTitle: "Proyectos",
        project1Title: "PROYECTO #1: Urban Scooter",
        project1Description: "Proyecto de QA para la aplicación de alquiler de scooters, que incluyó pruebas exhaustivas en la plataforma web y Android. Garantizó la calidad y funcionalidad óptima, realizando pruebas manuales y automatizadas, validando la integración con la API y reportando bugs en Jira.",
        project2Title: "PROYECTO #2: Urban Routes",
        project2Description: "Este proyecto automatiza el proceso de reserva de UrbanRoutes utilizando Selenium WebDriver y Python. Cubrí varias funcionalidades como establecer rutas, seleccionar tarifas de taxi, proporcionar números de teléfono y detalles de tarjetas de crédito, enviar mensajes a los conductores y solicitar servicios adicionales como mantas y helados.",
        project3Title: "PROYECTO #3: Urban Grocers",
        project3Description: "Proyecto de QA enfocado en la validación de APIs para una aplicación de pedidos de alimentos con entrega a domicilio. Realicé pruebas exhaustivas de API utilizando Postman, creando scripts automatizados con Pytest, y documentando problemas en Jira.",
        project4Title: "PROYECTO #4: Urban Lunch",
        project4Description: "Este proyecto de QA para la aplicación móvil Urban Lunch involucró pruebas exhaustivas en la plataforma Android, garantizando la calidad y funcionalidad óptima. Utilicé Android Studio y dispositivos reales para realizar pruebas, aplicando buenas prácticas de testing sobre aplicaciones móviles nativas, y reportando bugs en Jira.",
        project5Title: "PROYECTO #5: CURA Healthcare Service",
        project5Description: "Este proyecto involucra la automatización del inicio de sesión, agendar citas y verificar la información de citas médicas utilizando Python, PyCharm, Pytest y Selenium WebDriver. Las pruebas se realizaron en la aplicación web disponible en CURA Healthcare Service. El objetivo era asegurar la funcionalidad y confiabilidad de los procesos de autenticación de usuario, programación de citas y verificación de información.",
        projectFolder: "Carpeta del proyecto",
        sourceCode: "Código Fuente",
        contactTitle: "Contacto",
        contactText: "¡No dudes en ponerte en contacto conmigo!",
        contactBtn: "Contactar"
    }
};

function updateContent() {
    const aboutMeText1 = document.getElementById('about-me-text-1');
    const aboutMeText2 = document.getElementById('about-me-text-2');
    const aboutTitle = document.querySelector('.section-title');
    const projectsTitle = document.getElementById('projects-title');
    const project1Title = document.getElementById('project-1-title');
    const project1Description = document.getElementById('project-1-description');
    const project2Title = document.getElementById('project-2-title');
    const project2Description = document.getElementById('project-2-description');
    const project3Title = document.getElementById('project-3-title');
    const project3Description = document.getElementById('project-3-description');
    const project4Title = document.getElementById('project-4-title');
    const project4Description = document.getElementById('project-4-description');
    const project5Title = document.getElementById('project-5-title');
    const project5Description = document.getElementById('project-5-description');

    // Selecciona todos los botones "See Live" y "Source Code" de los proyectos
    const projectLiveBtns = document.querySelectorAll('.project-live-btn');
    const projectCodeBtns = document.querySelectorAll('.project-code-btn');

    // Sección de Contacto
    const contactTitle = document.querySelector('#contact .section-title');
    const contactText = document.querySelector('.contact-wrapper__text');
    const contactBtn = document.querySelector('.cta-btn--contact');

    if (currentLang === 'en') {
        aboutMeText1.innerHTML = content.en.aboutMe1;
        aboutMeText2.innerHTML = content.en.aboutMe2;
        aboutTitle.textContent = content.en.aboutTitle;
        projectsTitle.textContent = content.en.projectsTitle;
        project1Title.textContent = content.en.project1Title;
        project1Description.textContent = content.en.project1Description;
        project2Title.textContent = content.en.project2Title;
        project2Description.textContent = content.en.project2Description;
        project3Title.textContent = content.en.project3Title;
        project3Description.textContent = content.en.project3Description;
        project4Title.textContent = content.en.project4Title;
        project4Description.textContent = content.en.project4Description;
        project5Title.textContent = content.en.project5Title;
        project5Description.textContent = content.en.project5Description;

        projectLiveBtns.forEach(btn => btn.textContent = content.en.projectFolder);
        projectCodeBtns.forEach(btn => btn.textContent = content.en.sourceCode);

        contactTitle.textContent = content.en.contactTitle;
        contactText.textContent = content.en.contactText;
        contactBtn.textContent = content.en.contactBtn;
    } else {
        aboutMeText1.innerHTML = content.es.aboutMe1;
        aboutMeText2.innerHTML = content.es.aboutMe2;
        aboutTitle.textContent = content.es.aboutTitle;
        projectsTitle.textContent = content.es.projectsTitle;
        project1Title.textContent = content.es.project1Title;
        project1Description.textContent = content.es.project1Description;
        project2Title.textContent = content.es.project2Title;
        project2Description.textContent = content.es.project2Description;
        project3Title.textContent = content.es.project3Title;
        project3Description.textContent = content.es.project3Description;
        project4Title.textContent = content.es.project4Title;
        project4Description.textContent = content.es.project4Description;
        project5Title.textContent = content.es.project5Title;
        project5Description.textContent = content.es.project5Description;

        projectLiveBtns.forEach(btn => btn.textContent = content.es.projectFolder);
        projectCodeBtns.forEach(btn => btn.textContent = content.es.sourceCode);

        contactTitle.textContent = content.es.contactTitle;
        contactText.textContent = content.es.contactText;
        contactBtn.textContent = content.es.contactBtn;
    }
}


function toggleLanguage() {
    const isChecked = document.getElementById('language-toggle').checked;
    currentLang = isChecked ? 'es' : 'en'; // Update current language flag 

    const heroTitle = document.getElementById('hero-title');
    const knowMoreBtn = document.getElementById('know-more-btn');
    const resumeLink = document.getElementById("resume-link");

    // Update the hero title, "Know more" button, "View Resume" button and the resume.pdf text based on the current language
    if (currentLang === 'en') {
        heroTitle.innerHTML = `${staticTextEn}<span id="role"></span>`;
        knowMoreBtn.textContent = 'Know more';
        resumeLink.textContent = 'View Resume';
        resumeLink.href = pdfEnglish;
    } else {
        heroTitle.innerHTML = `${staticTextEs}<span id="role"></span>`;
        knowMoreBtn.textContent = 'Saber más';
        resumeLink.textContent = 'Ver Currículum';
        resumeLink.href = pdfSpanish;
    }

    // Re-select the role element after updating the innerHTML
    roleElement = document.getElementById("role");

    // Update the content of "About Me" section
    updateContent();

    // Restart text animation with the new language
    currentIndex = 0;
    startTextAnimation();
}

document.getElementById('language-toggle').addEventListener('change', toggleLanguage);

// Start the initial text animation and update the content
document.addEventListener('DOMContentLoaded', () => {
    startTextAnimation();
    updateContent();
});
