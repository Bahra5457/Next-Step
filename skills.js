/* =========================
   EXPLORE BUTTON
========================= */

const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
  exploreBtn.addEventListener("click", function () {
    document.querySelector(".categories").scrollIntoView({
      behavior: "smooth",
    });
  });
}

/* =========================
   SKILL CATEGORY DATA
========================= */

const categories = {
  /* =========================
     TECHNICAL SKILLS
  ========================= */

  technical: {
    label: "TECHNICAL SKILLS",

    title: "Technical Skills",

    description:
      "Build practical digital skills that are useful across many modern jobs.",

    skills: [
      {
        name: "HTML",

        description: "Learn the structure of modern websites.",

        link: "https://www.freecodecamp.org/learn/responsive-web-design-v9/",
      },

      {
        name: "CSS",

        description:
          "Learn how to style websites and create responsive interfaces.",

        link: "https://www.freecodecamp.org/learn/responsive-web-design-v9/",
      },

      {
        name: "JavaScript",

        description: "Learn programming and create interactive websites.",

        link: "https://www.freecodecamp.org/learn/javascript-v9/",
      },

      {
        name: "Git & GitHub",

        description: "Learn version control and manage your projects.",

        link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
      },

      {
        name: "Python",

        description:
          "Learn a popular programming language used in many fields.",

        link: "https://www.freecodecamp.org/learn/python-v9/",
      },

      {
        name: "SQL",

        description: "Learn how to work with databases and data.",

        link: "https://www.freecodecamp.org/learn/relational-database/",
      },
    ],
  },

  /* =========================
     SOFT SKILLS
  ========================= */

  soft: {
    label: "SOFT SKILLS",

    title: "Soft Skills",

    description:
      "Develop workplace skills that help you communicate, collaborate and solve problems effectively.",

    skills: [
      {
        name: "Communication",

        description: "Learn how to communicate clearly and professionally.",

        link: "https://www.linkedin.com/learning/communication-foundations-23064093",
      },

      {
        name: "Teamwork",

        description: "Learn how to collaborate effectively with a team.",

        link: "https://www.linkedin.com/learning/topics/leadership-and-management",
      },

      {
        name: "Leadership",

        description: "Develop practical leadership and decision-making skills.",

        link: "https://www.linkedin.com/learning/leadership-foundations-22307442",
      },

      {
        name: "Time Management",

        description:
          "Learn how to prioritize tasks and manage your time effectively.",

        link: "https://www.linkedin.com/learning/topics/time-management",
      },

      {
        name: "Problem Solving",

        description:
          "Develop critical thinking and practical problem-solving skills.",

        link: "https://www.linkedin.com/learning/problem-solving-techniques",
      },

      {
        name: "Presentation Skills",

        description: "Learn how to present ideas clearly and confidently.",

        link: "https://www.linkedin.com/learning/topics/communication",
      },
    ],
  },

  /* =========================
     CAREER SKILLS
  ========================= */

  career: {
    label: "CAREER SKILLS",

    title: "Career Skills",

    description:
      "Prepare yourself for job applications, interviews and your first professional experience.",

    skills: [
      {
        name: "CV / Resume Writing",

        description: "Learn how to create a clear and professional resume.",

        link: "https://www.linkedin.com/learning/writing-a-resume",
      },

      {
        name: "Interview Skills",

        description:
          "Learn how to prepare for interviews and answer questions confidently.",

        link: "https://www.linkedin.com/learning/topics/job-searching",
      },

      {
        name: "LinkedIn",

        description:
          "Learn how to build a professional LinkedIn profile and presence.",

        link: "https://www.linkedin.com/learning/topics/linkedin",
      },

      {
        name: "Job Search",

        description:
          "Learn practical strategies for finding and applying for jobs.",

        link: "https://www.linkedin.com/learning/topics/job-searching",
      },

      {
        name: "Workplace Communication",

        description:
          "Improve your communication skills for professional environments.",

        link: "https://www.linkedin.com/learning/topics/communication",
      },

      {
        name: "Professional Networking",

        description: "Learn how to build meaningful professional connections.",

        link: "https://www.linkedin.com/learning/professional-networking",
      },
    ],
  },
};

/* =========================
   CATEGORY BUTTONS
========================= */

const categoryButtons = document.querySelectorAll(".category-btn");

const categoryResult = document.getElementById("categoryResult");

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const categoryName = button.dataset.category;

    const category = categories[categoryName];

    if (!category) {
      return;
    }

    /* Remove active state */

    categoryButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    /* Create skills */

    let skillsHTML = "";

    category.skills.forEach(function (skill) {
      skillsHTML += `

        <div class="category-skill">

          <div class="category-skill-info">

            <h4>
              ${skill.name}
            </h4>

            <p>
              ${skill.description}
            </p>

          </div>


          <a
            href="${skill.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="category-learn-btn"
          >
            Start Learning →
          </a>

        </div>

      `;
    });

    /* Display category */

    categoryResult.innerHTML = `

      <div class="category-result-header">

        <span>
          ${category.label}
        </span>

        <h3>
          ${category.title}
        </h3>

        <p>
          ${category.description}
        </p>

      </div>


      <div class="category-skills">

        ${skillsHTML}

      </div>


      <button
        class="close-category"
        id="closeCategory"
      >
        Close
      </button>

    `;

    /* Scroll to result */

    categoryResult.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    /* Close button */

    document
      .getElementById("closeCategory")
      .addEventListener("click", function () {
        categoryResult.innerHTML = `

          <p>
            Select a category to explore the skills you can learn.
          </p>

        `;

        categoryButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });
      });
  });
});

/* =========================
   CAREER PATH DATA
========================= */

const careerPaths = {
  web: {
    title: "Web Development",

    description: "Learn how to build modern websites and web applications.",

    steps: [
      "HTML & Web Structure",
      "CSS & Responsive Design",
      "JavaScript",
      "Git & GitHub",
      "Projects & Portfolio",
    ],
  },

  mobile: {
    title: "Mobile Development",

    description: "Learn how to create applications for mobile devices.",

    steps: [
      "Programming Fundamentals",
      "Mobile UI Basics",
      "Flutter or React Native",
      "APIs & Data",
      "Build Mobile Projects",
    ],
  },

  network: {
    title: "Networking",

    description: "Build the foundation needed to work with computer networks.",

    steps: [
      "Networking Fundamentals",
      "OSI & TCP/IP",
      "IP Addressing & Subnetting",
      "Switching & VLANs",
      "Routing & Network Security",
    ],
  },

  cyber: {
    title: "Cybersecurity",

    description:
      "Learn the fundamentals of protecting systems, networks and data.",

    steps: [
      "Networking Fundamentals",
      "Linux Basics",
      "Security Fundamentals",
      "Threats & Vulnerabilities",
      "Security Tools & Practice",
    ],
  },

  data: {
    title: "Data & AI",

    description:
      "Learn how to work with data and explore modern AI technologies.",

    steps: [
      "Python Fundamentals",
      "Statistics Basics",
      "Data Analysis",
      "Machine Learning Fundamentals",
      "AI Projects",
    ],
  },

  uiux: {
    title: "UI/UX Design",

    description:
      "Learn how to design useful, accessible and user-friendly digital products.",

    steps: [
      "Design Fundamentals",
      "User Research",
      "Wireframes",
      "UI Design",
      "Prototypes & Portfolio",
    ],
  },

  business: {
    title: "Business & Marketing",

    description:
      "Build skills for business, marketing and customer-focused roles.",

    steps: [
      "Business Fundamentals",
      "Marketing Basics",
      "Customer Understanding",
      "Digital Marketing",
      "Business Projects",
    ],
  },

  project: {
    title: "Project Management",

    description: "Learn how to organize projects, teams, tasks and deadlines.",

    steps: [
      "Project Fundamentals",
      "Planning & Scheduling",
      "Team Management",
      "Risk Management",
      "Project Delivery",
    ],
  },
};

/* =========================
   CAREER PATH BUTTONS
========================= */

const pathButtons = document.querySelectorAll(".path-btn");

const pathResult = document.getElementById("pathResult");

pathButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const pathName = button.dataset.path;

    const path = careerPaths[pathName];

    if (!path) {
      return;
    }

    /* Remove active state */

    pathButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    /* Create roadmap */

    let roadmapHTML = "";

    path.steps.forEach(function (step, index) {
      roadmapHTML += `

        <div class="roadmap-step">

          <span class="step-number">
            ${index + 1}
          </span>

          <span>
            ${step}
          </span>

        </div>

      `;
    });

    /* Display roadmap */

    pathResult.innerHTML = `

      <h3 class="path-result-title">
        ${path.title}
      </h3>

      <p class="path-result-description">
        ${path.description}
      </p>

      <div class="roadmap">

        ${roadmapHTML}

      </div>

    `;

    pathResult.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});

/* =========================
   START LEARNING BUTTON
========================= */

const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", function () {
    document.querySelector(".categories").scrollIntoView({
      behavior: "smooth",
    });
  });
}

/* =========================
   NAVIGATION
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const text = link.textContent.trim();

    /* Home */

    if (text === "Home") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    /* Learn Skills */

    if (text === "Learn Skills") {
      event.preventDefault();

      document.querySelector(".categories").scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    /* Other pages */

    event.preventDefault();

    showComingSoon(text);
  });
});

/* =========================
   COMING SOON
========================= */

function showComingSoon(pageName) {
  const existing = document.querySelector(".coming-overlay");

  if (existing) {
    existing.remove();
  }

  const overlay = document.createElement("div");

  overlay.className = "coming-overlay";

  overlay.innerHTML = `

    <div class="coming-overlay-bg">

      <div class="coming-box">

        <h3>
          ${pageName}
        </h3>

        <p>
          This section is coming soon.
        </p>

        <button id="closeComing">
          Close
        </button>

      </div>

    </div>

  `;

  document.body.appendChild(overlay);

  document.getElementById("closeComing").addEventListener("click", function () {
    overlay.remove();
  });
}
