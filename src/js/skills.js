// مصفوفة البيانات محتفظة بجميع الأكواد اللونية الأصلية الخاصة بكِ
const skillsData = [
  {
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    iconClass: "fa-brands fa-html5",
    color: "text-[#E34F26]",
    subtitle: "W3C Standard"
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    iconClass: "fa-solid fa-wind",
    color: "text-[#38BDF8]",
    subtitle: "Utility-First"
  },
  {
    name: "Bootstrap",
    url: "https://getbootstrap.com",
    iconClass: "fa-brands fa-bootstrap",
    color: "text-[#7952B3]",
    subtitle: "UI Component"
  },
  {
    name: "Sass",
    url: "https://sass-lang.com",
    iconClass: "fa-brands fa-sass",
    color: "text-[#CC6699]",
    subtitle: "Pre-processor"
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    iconClass: "fa-brands fa-js",
    color: "text-[#F7DF1E]",
    subtitle: "ES6 Core",
    extraClass: "rounded bg-black/10"
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    iconClass: "fa-solid fa-circle-nodes",
    color: "text-[#3178C6]",
    subtitle: "Type Safety"
  },
  {
    name: "React.js",
    url: "https://react.dev",
    iconClass: "fa-brands fa-react",
    color: "text-[#61DAFB]",
    subtitle: "Component UI"
  },
  {
    name: "Flutter",
    url: "https://flutter.dev",
    iconClass: "fa-solid fa-feather-pointed",
    color: "text-[#02569B]",
    subtitle: "Mobile SDK"
  },
  {
    name: "Python",
    url: "https://www.python.org",
    iconClass: "fa-brands fa-python",
    color: "text-[#3776AB]",
    subtitle: "AI & Logic"
  },
  {
    name: "C++",
    url: "https://isocpp.org",
    iconClass: "fa-solid fa-cubes",
    color: "text-[#00599C]",
    subtitle: "System Programming"
  },
  {
    name: "C# / WPF",
    url: "https://dotnet.microsoft.com",
    iconClass: "fa-solid fa-code",
    color: "text-[#239120]",
    subtitle: "Desktop Apps"
  },
  {
    name: "SQL Server",
    url: "https://www.microsoft.com/en-us/sql-server",
    iconClass: "fa-solid fa-database",
    color: "text-[#CC292B]",
    subtitle: "Enterprise DB"
  },
  {
    name: "MySQL",
    url: "https://www.mysql.com",
    iconClass: "fa-solid fa-server",
    color: "text-[#00758F]",
    subtitle: "Open-Source DB"
  },
  {
    name: "Git",
    url: "https://git-scm.com",
    iconClass: "fa-brands fa-git-alt",
    color: "text-[#F05032]",
    subtitle: "Version Control"
  },
  {
    name: "GitHub",
    url: "https://github.com",
    iconClass: "fa-brands fa-github",
    color: "text-primary dark:text-icon",
    subtitle: "Repository Hosting"
  }
];

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const skillsHTML = skillsData.map(skill => {
    const extraClasses = skill.extraClass ? skill.extraClass : "";

    return `
      <a href="${skill.url}" target="_blank" rel="noopener noreferrer"
        class="flex flex-col items-center p-6 rounded-3xl border border-border/20 dark:border-border-dark/20 bg-background dark:bg-bg-dark/80 text-center hover:border-primary dark:hover:border-icon hover:scale-105 active:scale-98 transition-all duration-300 shadow-sm">
        <i class="${skill.iconClass} text-4xl md:text-5xl ${skill.color} ${extraClasses} mb-4"></i>
        <span class="font-bold text-xs md:text-sm">${skill.name}</span>
        <span class="text-[9px] md:text-[10px] text-secondary mt-1 tracking-wider uppercase opacity-70">${skill.subtitle}</span>
      </a>
    `;
  }).join('');

  container.innerHTML = skillsHTML;
}

document.addEventListener('DOMContentLoaded', renderSkills);