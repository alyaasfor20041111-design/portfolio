// ==================== SCRIPTS ==================== //

// --- كائن الترجمات المتكامل والمتقن باللغتين ---
const translations = {
    ar: {
        logoTitle: "عليا عصفور",
        logoSubtitle: "مطورة برمجيات",
        navHome: "الرئيسية",
        navProjects: "المشاريع",
        navSkills: "المهارات",
        navTimeline: "مسيرتي",
        navContact: "اتصل بي",
        langBtn: "EN",
        statusText: "متاحة للعمل البرمجي",
        heroBadge: "متاح للعمل وتطوير البرمجيات المبتكرة",
        heroTitle: 'أنا عليا عصفور <br><span class="bg-gradient-to-r from-primary via-secondary to-icon bg-clip-text text-transparent font-light text-2xl sm:text-4xl md:text-6xl mt-4 block">مطورة برمجيات</span>',
        heroDesc: "أعمل على هندسة وبناء واجهات مستخدم متفردة وتطبيقات ويب متكاملة تدمج بين الأداء البرمجي فائق السرعة والمظهر الرقمي الأنيق والحديث.",
        heroBtnPrimary: "استعرض مشاريعي",
        heroBtnSecondary: "تواصل معي الآن",
        projectsHeading: "أعمال ومشاريع مختارة",
        projectsSub: "تطبيقات وحلول رقمية فريدة تمت هندستها وتطويرها",
        skillsHeading: "القدرات والمهارات التقنية",
        skillsSub: "انقري على المهارة مباشرة لزيارة موقعها الرسمي",
        timelineHeading: "مسيرتي المهنية والتعليمية",
        timelineSub: "رحلة تطوري وخبراتي في عالم التقنية البرمجية",
        timelineDate1: "2024 - الآن",
        timelineTitle1: "مطورة برمجيات مستقلة",
        timelineDesc1: "هندسة وبناء واجهات مستخدم مخصصة ومطورة بالكامل لعملاء محليين ودوليين، وتحسين سرعة الأداء وملاءمة متطلبات محركات البحث بالاعتماد على Next.js وTailwind CSS.",
        timelineDate2: "2022 - 2024",
        timelineTitle2: "مساعد تقني ومطور نظم",
        timelineDesc2: "تطوير تطبيقات مكتبية متقدمة وحماية قواعد البيانات الكبرى بالاعتماد على C# و SQL Server، وإنجاز منصات للتنبؤ وتحليل البيانات في بيئات ذكية متجاوبة.",
        timelineDate3: "2018 - 2022",
        timelineTitle3: "بكالوريوس علوم الحاسب",
        timelineDesc3: "دراسة أكاديمية متكاملة شملت خوارزميات برمجية وهندسة النظم وحماية البيانات، مع التركيز على لغات التطوير الأساسية ومبادئ الـ Object-Oriented Programming.",
        contactHeading: "دعنا نعمل معاً",
        contactSub: "تواصل معي لمناقشة فكرة مشروعك القادم أو لبناء شراكة متميزة",
        labelName: "الاسم الكريم",
        labelEmail: "البريد الإلكتروني",
        labelMessage: "تفاصيل الرسالة أو المشروع",
        placeholderName: "مثال: أحمد مصطفى",
        placeholderMessage: "اكتب هنا تفاصيل الفكرة أو الاستفسار...",
        contactBtn: "إرسال الرسالة الآن",
        successText: "🎉 شكراً لك! تم إرسال رسالتك بنجاح وسأرد عليكِ في أقرب وقت.",
        footerText: "© 2026 عليا عصفور. جميع الحقوق محفوظة ومحمية."
    },
    en: {
        logoTitle: "Alya Asfor",
        logoSubtitle: "Software Developer",
        navHome: "Home",
        navProjects: "Projects",
        navSkills: "Skills",
        navTimeline: "Evolution",
        navContact: "Contact",
        langBtn: "العربية",
        statusText: "Available for Projects",
        heroBadge: "AVAILABLE FOR COMMISSIONS & FULL-TIME ROLES",
        heroTitle: 'I am Alya Asfor <br><span class="bg-gradient-to-r from-primary via-secondary to-icon bg-clip-text text-transparent font-light text-2xl sm:text-4xl md:text-6xl mt-4 block">Software Engineer</span>',
        heroDesc: "Engineering beautiful custom web architectures, visual-heavy layouts, and robust system APIs tailored for performance and usability.",
        heroBtnPrimary: "View Projects",
        heroBtnSecondary: "Let's Connect",
        projectsHeading: "Featured Projects",
        projectsSub: "Digital solutions and production-ready architectures built with precision",
        skillsHeading: "Technical Expertise",
        skillsSub: "Click any skill to visit its official technology website directly",
        timelineHeading: "Professional Evolution & CV",
        timelineSub: "My educational journey and professional tech expertise",
        timelineDate1: "2024 - Present",
        timelineTitle1: "Freelance Software Engineer",
        timelineDesc1: "Architecting and engineering customized web portals for global clients, focusing on SEO optimization and performance optimization with Next.js and Tailwind CSS.",
        timelineDate2: "2022 - 2024",
        timelineTitle2: "Junior Database & Systems Developer",
        timelineDesc2: "Constructed desktop application logic, maintained secure relational databases with WPF, SQL Server, and developed machine learning models.",
        timelineDate3: "2018 - 2022",
        timelineTitle3: "B.Sc. in Computer Science",
        timelineDesc3: "Rigorous academic study focusing on system architecture, database administration, algorithmic efficiency, and object-oriented paradigms.",
        contactHeading: "Let's Create Together",
        contactSub: "Reach out to discuss your upcoming project or engineering collaborations",
        labelName: "Your Name",
        labelEmail: "Email Address",
        labelMessage: "Project Details or Message",
        placeholderName: "e.g. John Doe",
        placeholderMessage: "Write details about your vision, timeline, or inquiries here...",
        contactBtn: "Send Message Now",
        successText: "🎉 Thank you! Your message has been sent successfully. I will reach back soon.",
        footerText: "© 2026 Alya Asfor. All rights reserved."
    }
};

let currentLang = 'ar';

// مراجع الـ DOM
const htmlElem = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const langToggleBtn = document.getElementById('lang-toggle');
const scrollProgress = document.getElementById('scroll-progress');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileSidebar = document.getElementById('mobile-sidebar');
const mobileSidebarBackdrop = document.getElementById('mobile-sidebar-backdrop');
const sidebarClose = document.getElementById('sidebar-close');
const mobileIcon = document.getElementById('mobile-icon');
const successBox = document.getElementById('success-box');
const timeVal = document.getElementById('time-val');

const els = {
    logoTitle: document.getElementById('logo-title'),
    logoSubtitle: document.getElementById('logo-subtitle'),
    navHome: document.getElementById('nav-home'),
    navProjects: document.getElementById('nav-projects'),
    navSkills: document.getElementById('nav-skills'),
    navTimeline: document.getElementById('nav-timeline'),
    navContact: document.getElementById('nav-contact'),
    mobNavHome: document.getElementById('mob-nav-home'),
    mobNavProjects: document.getElementById('mob-nav-projects'),
    mobNavSkills: document.getElementById('mob-nav-skills'),
    mobNavTimeline: document.getElementById('mob-nav-timeline'),
    mobNavContact: document.getElementById('mob-nav-contact'),
    statusText: document.getElementById('status-text'),
    heroBadge: document.getElementById('hero-badge'),
    heroTitle: document.getElementById('hero-title'),
    heroDesc: document.getElementById('hero-desc'),
    heroBtnPrimary: document.getElementById('hero-btn-primary'),
    heroBtnSecondary: document.getElementById('hero-btn-secondary'),
    projectsHeading: document.getElementById('projects-heading'),
    projectsSub: document.getElementById('projects-sub'),
    skillsHeading: document.getElementById('skills-heading'),
    skillsSub: document.getElementById('skills-sub'),
    timelineHeading: document.getElementById('timeline-heading'),
    timelineSub: document.getElementById('timeline-sub'),
    timelineDate1: document.getElementById('timeline-date-1'),
    timelineTitle1: document.getElementById('timeline-title-1'),
    timelineDesc1: document.getElementById('timeline-desc-1'),
    timelineDate2: document.getElementById('timeline-date-2'),
    timelineTitle2: document.getElementById('timeline-title-2'),
    timelineDesc2: document.getElementById('timeline-desc-2'),
    timelineDate3: document.getElementById('timeline-date-3'),
    timelineTitle3: document.getElementById('timeline-title-3'),
    timelineDesc3: document.getElementById('timeline-desc-3'),
    contactHeading: document.getElementById('contact-heading'),
    contactSub: document.getElementById('contact-sub'),
    labelName: document.getElementById('label-name'),
    labelEmail: document.getElementById('label-email'),
    labelMessage: document.getElementById('label-message'),
    nameInput: document.getElementById('name'),
    messageInput: document.getElementById('message'),
    contactBtn: document.getElementById('contact-btn'),
    footerText: document.getElementById('footer-text'),
    sidebarLogoTitle: document.getElementById('sidebar-logo-title'),
sidebarLogoSubtitle: document.getElementById('sidebar-logo-subtitle'),
};

// --- منطق تبديل الوضع الداكن المطور ---
themeToggleBtn.addEventListener('click', () => {
    htmlElem.classList.toggle('dark');
    if (htmlElem.classList.contains('dark')) {
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    } else {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }
});

// --- منطق تبديل اللغات السلس والمحكم ---
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';

    htmlElem.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    htmlElem.lang = currentLang;

    const data = translations[currentLang];

    els.logoTitle.textContent = data.logoTitle;
    els.logoSubtitle.textContent = data.logoSubtitle;

    // روابط التنقل
    els.navHome.textContent = data.navHome;
    els.navProjects.textContent = data.navProjects;
    els.navSkills.textContent = data.navSkills;
    els.navTimeline.textContent = data.navTimeline;
    els.navContact.textContent = data.navContact;
    els.mobNavHome.textContent = data.navHome;
    els.mobNavProjects.textContent = data.navProjects;
    els.mobNavSkills.textContent = data.navSkills;
    els.mobNavTimeline.textContent = data.navTimeline;
    els.mobNavContact.textContent = data.navContact;

    // حالة العمل
    els.statusText.textContent = data.statusText;

    // قسم الـ Hero
    els.heroBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span> ${data.heroBadge}`;
    els.heroTitle.innerHTML = data.heroTitle;
    els.heroDesc.textContent = data.heroDesc;
    els.heroBtnPrimary.textContent = data.heroBtnPrimary;
    els.heroBtnSecondary.textContent = data.heroBtnSecondary;

    // قسم المشاريع والمهارات والتايم لاين
    els.projectsHeading.textContent = data.projectsHeading;
    els.projectsSub.textContent = data.projectsSub;
    els.skillsHeading.textContent = data.skillsHeading;
    els.skillsSub.textContent = data.skillsSub;
    els.timelineHeading.textContent = data.timelineHeading;
    els.timelineSub.textContent = data.timelineSub;

    els.timelineDate1.textContent = data.timelineDate1;
    els.timelineTitle1.textContent = data.timelineTitle1;
    els.timelineDesc1.textContent = data.timelineDesc1;
    els.timelineDate2.textContent = data.timelineDate2;
    els.timelineTitle2.textContent = data.timelineTitle2;
    els.timelineDesc2.textContent = data.timelineDesc2;
    els.timelineDate3.textContent = data.timelineDate3;
    els.timelineTitle3.textContent = data.timelineTitle3;
    els.timelineDesc3.textContent = data.timelineDesc3;

    // قسم التواصل والفورم
    els.contactHeading.textContent = data.contactHeading;
    els.contactSub.textContent = data.contactSub;
    els.labelName.textContent = data.labelName;
    els.labelEmail.textContent = data.labelEmail;
    els.labelMessage.textContent = data.labelMessage;
    els.nameInput.placeholder = data.placeholderName;
    els.messageInput.placeholder = data.placeholderMessage;
    els.contactBtn.textContent = data.contactBtn;
    els.footerText.textContent = data.footerText;

    // الإضافة هنا لتحديث لوغو السايد بار أيضاً 🌟
    els.sidebarLogoTitle.textContent = data.logoTitle;
    els.sidebarLogoSubtitle.textContent = data.logoSubtitle;

    langToggleBtn.textContent = data.langBtn;
});

// --- تشغيل حركة شريط التقدم وقفل القائمة في الهيدر ---
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
});

// --- فتح وإغلاق القائمة الجانبية المنزلقة المتطورة (Sidebar) ---
function openSidebar() {
    mobileSidebarBackdrop.classList.remove('hidden');
    setTimeout(() => {
        mobileSidebarBackdrop.classList.remove('opacity-0');
        mobileSidebarBackdrop.classList.add('opacity-100');
    }, 50);

    // سحب دائماً من اليمين بشكل متناسق ومستقر
    mobileSidebar.classList.remove('translate-x-full');
    mobileSidebar.classList.add('translate-x-0');

    // حركة العناصر المتدرجة داخل السايد بار
    const navLinks = mobileSidebar.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.classList.remove('opacity-0', 'translate-x-4');
        link.classList.add('opacity-100', 'translate-x-0');
    });
}

function closeSidebar() {
    mobileSidebarBackdrop.classList.remove('opacity-100');
    mobileSidebarBackdrop.classList.add('opacity-0');
    setTimeout(() => {
        mobileSidebarBackdrop.classList.add('hidden');
    }, 500);

    mobileSidebar.classList.remove('translate-x-0');
    mobileSidebar.classList.add('translate-x-full');

    const navLinks = mobileSidebar.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.classList.add('opacity-0', 'translate-x-4');
        link.classList.remove('opacity-100', 'translate-x-0');
    });
}

mobileMenuToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
mobileSidebarBackdrop.addEventListener('click', closeSidebar);

// إغلاق قائمة الجوال بمجرد النقر على الرابط لتجربة تصفح رائعة
document.querySelectorAll('#mobile-sidebar nav a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// --- تحديث ساعة السايد بار المحلية حية بدقة ---
function updateClock() {
    const now = new Date();
    timeVal.textContent = now.toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
}
setInterval(updateClock, 1000);
updateClock();

// ==========================================
// --- برمجة الخلفية النجمية التفاعلية المتطورة ---
// ==========================================
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
const heroSection = document.getElementById('home');

let particlesArray = [];
let numberOfParticles = 80;

// تمثيل الماوس لتوفير استجابة تفاعلية عند الاقتراب
const mouse = {
    x: null,
    y: null,
    radius: 120
};

// تتبع حركة الفأرة داخل قسم الهيرو حصراً لعدم التأثير على بقية الصفحة
heroSection.addEventListener('mousemove', (event) => {
    const rect = heroSection.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
});

heroSection.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

// تتبع أحداث اللمس للهواتف والأجهزة اللوحية بشكل استباقي لمنع أخطاء حركة الكانفاس
heroSection.addEventListener('touchmove', (event) => {
    if (event.touches.length > 0) {
        const rect = heroSection.getBoundingClientRect();
        mouse.x = event.touches[0].clientX - rect.left;
        mouse.y = event.touches[0].clientY - rect.top;
    }
});

heroSection.addEventListener('touchend', () => {
    mouse.x = null;
    mouse.y = null;
});

// ملاءمة حجم الكانفاس لتغير حجم الشاشة بشكل متجاوب وسلس
function resizeCanvas() {
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;

    // تقليل عدد الجسيمات على الهواتف لضمان أداء سلس و60 إطاراً بالثانية
    numberOfParticles = canvas.width < 768 ? 40 : 80;
    initParticles();
}

// فئة جزيئات جافا سكريبت التفاعلية
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // رسم الجزيء الفردي بدقة عالية
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // تحديث حركة وموضع الجزيء وتفاعله مع الفأرة والحدود
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // تفاعل الجاذبية والابتعاد الخفيف عند اقتراب مؤشر الفأرة
        if (mouse.x != null && mouse.y != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 2;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 2;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 2;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 2;
                }
            }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

// جلب اللون المتناسق ديناميكياً بناءً على تفعيل الوضع المظلم
function getThemeColor() {
    const isDark = htmlElem.classList.contains('dark');
    return isDark ? 'rgba(187, 130, 255, 0.25)' : 'rgba(121, 71, 205, 0.18)';
}

function initParticles() {
    particlesArray = [];
    const color = getThemeColor();
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1.2;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// رسم الخطوط الشبكية المترابطة بين جزيئات الكانفاس القريبة
function connectParticles() {
    let opacityValue = 1;
    const isDark = htmlElem.classList.contains('dark');
    const maxDistance = 120;

    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                opacityValue = 1 - (distance / maxDistance);
                ctx.strokeStyle = isDark
                    ? `rgba(187, 130, 255, ${opacityValue * 0.15})`
                    : `rgba(121, 71, 205, ${opacityValue * 0.12})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// متغيرات مخصصة لرسم الأورورا الهولوغرافية المتحركة في الخلفية
let auraAngle = 0;

function drawAuroraOverlay() {
    const isDark = htmlElem.classList.contains('dark');
    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    auraAngle += 0.002;
    const cx1 = canvas.width * 0.3 + Math.sin(auraAngle) * 100;
    const cy1 = canvas.height * 0.4 + Math.cos(auraAngle) * 100;
    const cx2 = canvas.width * 0.7 + Math.cos(auraAngle * 0.8) * 120;
    const cy2 = canvas.height * 0.6 + Math.sin(auraAngle * 0.8) * 120;

    const gradient1 = ctx.createRadialGradient(cx1, cy1, 10, cx1, cy1, Math.min(canvas.width, canvas.height) * 0.6);
    if (isDark) {
        gradient1.addColorStop(0, 'rgba(121, 71, 205, 0.12)');
        gradient1.addColorStop(0.5, 'rgba(154, 100, 238, 0.05)');
        gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');
    } else {
        gradient1.addColorStop(0, 'rgba(121, 71, 205, 0.07)');
        gradient1.addColorStop(0.5, 'rgba(243, 190, 255, 0.03)');
        gradient1.addColorStop(1, 'rgba(255, 255, 255, 0)');
    }

    const gradient2 = ctx.createRadialGradient(cx2, cy2, 10, cx2, cy2, Math.min(canvas.width, canvas.height) * 0.7);
    if (isDark) {
        gradient2.addColorStop(0, 'rgba(187, 130, 255, 0.10)');
        gradient2.addColorStop(0.5, 'rgba(30, 21, 56, 0.02)');
        gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');
    } else {
        gradient2.addColorStop(0, 'rgba(154, 100, 238, 0.05)');
        gradient2.addColorStop(0.5, 'rgba(243, 190, 255, 0.03)');
        gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');
    }

    ctx.fillStyle = gradient1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}

// حلقة الأنيميشن المستمرة للكانفاس لضمان أداء فائق النعومة 60fps
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAuroraOverlay();

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connectParticles();
    requestAnimationFrame(animateParticles);
}

// الاستماع لأحداث النوافذ لتشغيل وإعادة رسم الكانفاس بدقة
window.addEventListener('resize', resizeCanvas);

// ربط إعادة بناء الألوان بمفتاح تبديل الوضع الداكن
themeToggleBtn.addEventListener('click', () => {
    setTimeout(() => {
        initParticles();
    }, 50);
});

// بدء تشغيل الأنيميشن فور اكتمال تحميل الصفحة
window.onload = function () {
    resizeCanvas();
    animateParticles();
};

// --- منطق تصفية وفرز المشاريع ---
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // تعديل حالة النشاط لأزرار التصفية
    const buttons = ['all', 'web', 'system'];
    buttons.forEach(btn => {
        const el = document.getElementById(`filter-btn-${btn}`);
        if (btn === category) {
            el.classList.add('bg-button', 'text-button-title');
        } else {
            el.classList.remove('bg-button', 'text-button-title');
        }
    });
}

// تعيين التصفية الافتراضية للكل عند تحميل الصفحة
filterProjects('all');

// --- إدارة الإرسال الآمن للمعلومات واستعراض رسالة النجاح ---
function handleFormSubmit(event) {
    event.preventDefault();
    successBox.classList.remove('hidden');
    successBox.textContent = translations[currentLang].successText;
    document.getElementById('contact-form').reset();

    setTimeout(() => {
        successBox.classList.add('hidden');
    }, 5000);
}
