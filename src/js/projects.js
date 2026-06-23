// 1. مصفوفة بيانات المشاريع المحدثة بالفئات الصحيحة
const projectsData = [
  {
    title: "عالم البرمجة - منصة لتعلم البرمجة.",
    desc: "منصة تعليمية تفاعلية لتعلم البرمجة، تنفيذ المشاريع العملية، والتواصل مع مجتمع المطورين في مكان واحد.",
    img: "./src/img/projects/platformlearningprogramming.png",
    alt: "منصة تفاعلية لتعلم البرمجة - عالم البرمجة",
    category: "frontend",
    link: "./pages/project-details-1.html",
    tags: ["HTML5", "CSS", "JavaScript"]
  },
  {
    title: "لارانا - متجر إلكتروني ",
    desc: "متجر إلكتروني متخصص في بيع الملابس النسائية والإكسسوارات، يوفر تجربة تسوق سهلة",
    img: "./src/img/projects/larana.png",
    alt: "لارانا - متجر إلكتروني ",
    category: "frontend",
    link: "./pages/project-details-1.html",
    tags: ["HTML5", "Bootstrap", "JavaScript", "Swiper.js"]
  },
  {
    title: "النخبة الملكية - نظام إدارة الفندق",
    desc: "منصة متكاملة لإدارة العمليات الفندقية، تشمل الحجوزات والغرف والعملاء والتقارير المالية في لوحة تحكم موحدة.",
    img: "./src/img/projects/hotel.png",
    alt: "إدارة النخبة الملكية - نظام ذكي لإدارة الفنادق.",
    category: "frontend",
    link: "./pages/project-details-1.html",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Swiper.js", "chart.js"]
  },
  {
    title: "أورورا - تجربة تجارة إلكترونية مبتكرة",
    desc: "منصة تسوق رقمية ذات واجهة تفاعلية فائقة السرعة مخصصة لمنتجات آيس كريم أورورا.",
    img: "./src/img/projects/Aurora.png",
    alt: "متجر أورورا",
    category: "frontend",
    link: "./pages/project-details-1.html",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Swiper.js"]
  },
  {
    title: "جامعة المستقبل - نظام إدارة التعلم.",
    desc: "منصة تعليمية متكاملة لإدارة المساقات، وتتبع أداء الطلاب، وتقديم المحاضرات والاختبارات الرقمية بسلاسة واحترافية.",
    img: "./src/img/projects/LMS.png",
    alt: "نظام إدارة التعلم LMS - جامعة المستقبل",
    category: "frontend",
    link: "./pages/project-details-1.html",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Flowbite", "Swiper.js"]
  },
  {
    title: "فود ماركت - متجر إلكتروني",
    desc: "متجر إلكتروني يجمع الأطعمة الطازجة والوجبات والمشروبات والحلويات في منصة واحدة، مع خدمات طلب وتوصيل مريحة وسريعة.",
    img: "./src/img/projects/foodmarket.png",
    alt: " فود ماركت - متجر إلكتروني ",
    category: "frontend",
    link: "./pages/project-details-1.html",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Flowbite", "Swiper.js"]
  },
  {
    title: "CryptoSys - منصة تشفير",
    desc: "نظام تشفير متعدد الخوارزميات يتيح حماية النصوص والبيانات الرقمية، مع توفير أدوات تعليمية لفهم تقنيات التشفير والأمن السيبراني.",
    img: "./src/img/projects/crypto.png",
    alt: " CryptoSys",
    category: "flask", // تظهر عند فلترة بايثون فلاسك
    link: "./pages/project-details-1.html",
    tags: ["python", "flask", "pycryptodome"]
  },
  {
    title: "نظام ملتقى - حجز قاعات",
    desc: "نظام متكامل لإدارة القاعات والحجوزات، يوفر جدولة المواعيد، متابعة الحجوزات، وإدارة الموارد من خلال واجهة حديثة وسهلة الاستخدام.",
    img: "./src/img/projects/halls.png",
    alt: " نظام ملتقى - حجز قاعات",
    category: "desktop", // تظهر عند فلترة تطبيقات سطح المكتب
    link: "./pages/project-details-1.html",
    tags: ["WPF", "C#", "XAML", "MySQL"]
  },
  {
    title: "خطوة - منصة توظيف",
    desc: "منصة توظيف ذكية تربط الباحثين عن عمل بالشركات المناسبة، وتساعد على اكتشاف الفرص المهنية وتطوير المسار الوظيفي بسهولة.",
    img: "./src/img/projects/jop.png",
    alt: " خطوة - منصة توظيف تربط المواهب بالفرص. ",
    category: "frontend",
    link: "./pages/project-details-1.html",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Flowbite", "Swiper.js"]
  },
  {
    title: "رعاية - إدارة عيادة طبية",
    desc: "نظام ذكي لإدارة العيادات والمواعيد الطبية، يوفر تجربة سلسة للمرضى والأطباء من خلال الحجز الإلكتروني ومتابعة السجلات والمواعيد.",
    img: "./src/img/projects/doctor.png",
    alt: "رعاية - إدارة عيادة طبية",
    category: "frontend",
    link: "./pages/project-details-1.html",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Flowbite", "Swiper.js"]
  }
];

// 2. دالة رندرة وعرض المشاريع بناءً على التصنيف المحدد
function renderProjects(filterCategory = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  // فلترة مصفوفة المشاريع
  const filteredProjects = filterCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filterCategory);

  // بناء الكروت وحقنها ديناميكياً
  container.innerHTML = filteredProjects.map((project, index) => {
    const tagsHTML = project.tags.map(tag => `
      <span class="text-[10px] px-3 py-1 rounded-full border border-border/20 dark:border-border-dark/20 bg-input/10 dark:bg-input-dark/20 text-primary dark:text-icon font-bold uppercase tracking-wider">
        ${tag}
      </span>
    `).join('');

    return `
      <div onclick="window.location.href='${project.link}';"
        class="project-card group rounded-3xl p-6 bg-card/5 dark:bg-card-dark/30 border border-border/20 dark:border-border-dark/20 hover:border-primary/50 dark:hover:border-icon/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative flex flex-col justify-between"
        data-category="${project.category}">

        <div>
          <div class="h-48 md:h-56 w-full rounded-2xl mb-6 overflow-hidden border border-border/10 dark:border-border-dark/10 relative bg-slate-100 dark:bg-slate-900/50">
            <img src="${project.img}" alt="${project.alt}"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <h3 id="proj-title-${index}"
            class="text-xl md:text-2xl font-bold mb-3 text-primary dark:text-icon group-hover:text-primary dark:group-hover:text-icon transition-colors duration-300">
            ${project.title}
          </h3>

          <p id="proj-desc-${index}" class="text-sm opacity-75 dark:text-slate-300 mb-6 leading-relaxed">
            ${project.desc}
          </p>

          <div class="flex flex-wrap items-center gap-1.5 mb-6">
            ${tagsHTML}
          </div>
        </div>

        <div class="w-full">
          <div class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border/20 dark:border-border-dark/20 bg-button text-button-title font-bold text-xs md:text-secondary-size tracking-wider transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-icon dark:group-hover:text-bg-dark shadow-sm">
            <span id="proj-card-title-${index}">عرض تفاصيل المشروع</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-[-4px] transition-transform duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// 3. دالة الفلترة الأساسية المصلحة للتحكم في الأزرار الأربعة
function filterProjects(category) {
  renderProjects(category);

  // جلب العناصر الأربعة بالـ IDs الصحيحة المطابقة للـ HTML المعدل
  const buttons = {
    all: document.getElementById('filter-btn-all'),
    frontend: document.getElementById('filter-btn-frontend'),
    flask: document.getElementById('filter-btn-flask'),
    desktop: document.getElementById('filter-btn-desktop')
  };

  // إرجاع كلاسات الأزرار غير النشطة لوضعها الافتراضي
  Object.values(buttons).forEach(btn => {
    if (!btn) return;
    btn.className = "px-5 py-2.5 rounded-full text-xs md:text-secondary-size font-bold cursor-pointer border border-border/20 dark:border-border-dark/20 bg-card/10 dark:bg-card-dark/20 text-button hover:bg-button/10 dark:text-icon transition-all duration-300";
  });

  // إضافة الكلاس النشط للزر المختار حالياً
  if (buttons[category]) {
    buttons[category].className = "filter-active px-5 py-2.5 rounded-full text-xs md:text-secondary-size font-bold cursor-pointer border border-border/20 dark:border-border-dark/20 bg-button text-button-title transition-all duration-300";
  }
}

// 4. تشغيل رندرة جميع المشاريع فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
});