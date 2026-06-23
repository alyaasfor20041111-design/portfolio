// 1. مصفوفة البيانات: تحتوي على كل تفاصيل مسيرتك المهنية والتعليمية
const timelineData = [
  {
    id: 1,
    date: "2026 - الآن",
    title: "مبرمجة واجهات أمامية (Frontend Developer)",
    desc: "أبحث حالياً عن فرصة عمل مناسبة لتوظيف شغفي ومهاراتي في بناء واجهات مستخدم تفاعلية، متجاوبة، وجذابة بصرياً باستخدام أحدث تقنيات الويب.",
    color: "primary" // اللون الأساسي للـ Node والـ Badge
  },
  {
    id: 2,
    date: "2025 - الآن",
    title: "متدربة في أكاديمية كلاود سوفت",
    desc: "تطوير وصقل مهاراتي البرمجية من خلال دراسة مكثفة ومشاريع عملية في أكاديمية كلاود سوفت (Cloud Soft Academy)، مما عزز قدرتي على كتابة كود نظيف وقابل للتطوير.",
    color: "secondary" // اللون الثانوي للتنويع البصري
  },
  {
    id: 3,
    date: "2022 - الآن",
    title: "طالبة هندسة برمجيات بجامعة باشاك شهير (سنة خامسة)",
    desc: "دراسة أكاديمية متعمقة في جامعة باشاك شهير تشمل الخوارزميات، هندسة النظم، هياكل البيانات، ومبادئ البرمجة كائنية التوجه (OOP)، مع التركيز على دورة حياة تطوير البرمجيات الشاملة.",
    color: "primary"
  },
  {
    id: 4,
    date: "2022 - 2024",
    title: "تدريبات تقنية وحاسوبية",
    desc: "حضور عدة دورات وتدريبات عملية متخصصة في مجال الحاسوب وتكنولوجيا المعلومات لتعزيز الجانب العملي ومواكبة أحدث التقنيات في سوق العمل.",
    color: "secondary"
  },
  {
    id: 5,
    date: "2021",
    title: "شهادة البكالوريا",
    desc: "إتمام المرحلة الثانوية بنجاح والحصول على شهادة البكالوريا، والتي شكلت نقطة الانطلاق وبداية الشغف للدخول في التخصصات التقنية والهندسية.",
    color: "primary"
  }
];

// 2. دالة بناء وحقن المخطط الزمني داخل الـ HTML
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return; // تأمين الكود في حال عدم وجود العنصر

  // توليد الكود لكل عنصر بناءً على مصفوفة البيانات واختيار كلاسات الألوان الذكية
  const timelineHTML = timelineData.map(item => {
    const isPrimary = item.color === 'primary';
    
    // إعداد الكلاسات الديناميكية بناءً على نوع اللون المختار في المصفوفة
    const nodeBgClass = isPrimary ? 'bg-primary dark:bg-icon' : 'bg-secondary dark:bg-icon';
    const badgeClass = isPrimary ? 'bg-primary/10 text-primary dark:bg-icon/10 dark:text-icon' : 'bg-secondary/10 text-secondary dark:bg-icon/10 dark:text-icon';
    const hoverBorderClass = isPrimary ? 'hover:border-primary/50 dark:hover:border-icon/50' : 'hover:border-secondary/50 dark:hover:border-icon/50';

    return `
      <div class="relative ps-8 md:ps-12 group">
        <div class="absolute start-0 -translate-x-1/2 top-2 w-5 h-5 rounded-full border-4 border-background dark:border-bg-dark ${nodeBgClass} shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-125"></div>

        <div class="bg-card/5 dark:bg-card-dark/30 border border-border/20 dark:border-border-dark/20 rounded-3xl p-6 ${hoverBorderClass} transition-all duration-300 shadow-sm">
          <span class="inline-block px-3 py-1 rounded-xl ${badgeClass} text-[11px] font-bold mb-3" id="timeline-date-${item.id}">
            ${item.date}
          </span>
          <h3 class="text-lg md:text-xl font-bold mb-2 text-primary dark:text-icon" id="timeline-title-${item.id}">
            ${item.title}
          </h3>
          <p class="text-sm opacity-80 leading-relaxed" id="timeline-desc-${item.id}">
            ${item.desc}
          </p>
        </div>
      </div>
    `;
  }).join(''); // تحويل المصفوفة إلى نص واحد متصل

  // حقن الكود بالكامل دفعة واحدة لضمان أفضل أداء للـ DOM
  container.innerHTML = timelineHTML;
}

// 3. تشغيل الدالة فور تحميل مستند الـ HTML بالكامل
document.addEventListener('DOMContentLoaded', renderTimeline);