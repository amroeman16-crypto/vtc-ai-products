import { useMemo, useState } from "react";
import {
  ArrowUpLeft,
  BrainCircuit,
  Check,
  ChevronLeft,
  CirclePlay,
  Clock3,
  Code2,
  Download,
  Layers3,
  Menu,
  Mic2,
  Orbit,
  Palette,
  Play,
  Search,
  Sparkles,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

type Product = {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  icon: typeof BrainCircuit;
  accent: string;
  tag: string;
  meta: string;
  featured?: boolean;
};

const products: Product[] = [
  { id: 1, title: "مسار الذكاء المهني", category: "مسارات", categoryLabel: "مسار تعليمي", description: "رحلة تعلم تكيفية تبني مهارات المستقبل خطوة بخطوة، من الأساسيات إلى التطبيق العملي.", icon: Orbit, accent: "cyan", tag: "الأكثر طلباً", meta: "12 وحدة · 4 أسابيع", featured: true },
  { id: 2, title: "استوديو فكرة", category: "أدوات", categoryLabel: "أداة إبداعية", description: "حوّل الفكرة إلى خطة مشروع متكاملة مع مساعد ذكي يفهم سوق العمل المحلي.", icon: WandSparkles, accent: "gold", tag: "جديد", meta: "مجاني · متاح الآن" },
  { id: 3, title: "المحاكاة المهنية", category: "محاكاة", categoryLabel: "تجربة تفاعلية", description: "تدرّب على مواقف العمل الحقيقية في بيئة آمنة، واحصل على ملاحظات ذكية وفورية.", icon: Layers3, accent: "violet", tag: "تجريبي", meta: "8 تجارب · تفاعلي" },
  { id: 4, title: "صانع المحتوى التقني", category: "أدوات", categoryLabel: "أداة إنتاجية", description: "أنشئ محتوى تدريبي واضحاً، منظماً، وجاهزاً للمشاركة في دقائق معدودة.", icon: Palette, accent: "coral", tag: "محبوب", meta: "18 قالب · يدعم العربية" },
  { id: 5, title: "مرشد المسار الوظيفي", category: "إرشاد", categoryLabel: "مساعد ذكي", description: "حلّل مهاراتك واكتشف الفرص الأقرب إليك مع توصيات عملية قابلة للتنفيذ.", icon: Users, accent: "cyan", tag: "للجميع", meta: "تقييم 360° · شخصي" },
  { id: 6, title: "مختبر الكود المرئي", category: "محاكاة", categoryLabel: "مختبر عملي", description: "تعلم البرمجة عبر تحديات بصرية قصيرة ومشاريع صغيرة ترفع ثقتك بنفسك.", icon: Code2, accent: "gold", tag: "للمبتدئين", meta: "24 تحدياً · 6 مستويات" },
];

const categories = ["الكل", "مسارات", "أدوات", "محاكاة", "إرشاد"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === "الكل" || product.category === activeCategory;
    const query = search.trim().toLowerCase();
    return matchesCategory && (!query || `${product.title} ${product.description}`.toLowerCase().includes(query));
  }), [activeCategory, search]);

  const scrollToProducts = () => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main dir="rtl" className="site-shell">
      <div className="noise" />
      <nav className="topbar container">
        <a className="brand" href="#top" aria-label="مؤسسة التدريب المهني">
          <span className="brand-mark"><Sparkles size={18} strokeWidth={2.4} /></span>
          <span><b>التدريب</b><small>المهني · VTC</small></span>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#products" onClick={() => setMenuOpen(false)}>المنتجات</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>لماذا الذكاء؟</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>رحلتك</a>
        </div>
        <div className="nav-actions">
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          <button className="text-button">تسجيل الدخول</button>
          <button className="nav-cta" onClick={scrollToProducts}>اكتشف المنتجات <ArrowUpLeft size={16} /></button>
        </div>
      </nav>

      <section id="top" className="hero container">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="live-dot" /> مستقبل التدريب يبدأ هنا <span className="eyebrow-line" /></div>
          <h1>مهاراتك،<br /><em>بذكاء</em> أكبر.</h1>
          <p className="hero-lead">منتجات رقمية صُممت لتفتح لك أبواب التعلم، الإبداع، والفرص — بقوة الذكاء الاصطناعي.</p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={scrollToProducts}>استكشف المنتجات <ChevronLeft size={18} /></button>
            <button className="play-button" onClick={() => setSelected(products[0])}><span><Play size={15} fill="currentColor" /></span> شاهد كيف تعمل</button>
          </div>
          <div className="trust-row"><div className="avatars"><span>ن</span><span>م</span><span>س</span><span>+</span></div><span><b>+12,000</b> متعلم بدأ رحلته</span></div>
        </div>
        <div className="hero-art" aria-label="تصور بصري للذكاء الاصطناعي">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="glow glow-one" /><div className="glow glow-two" />
          <div className="core"><div className="core-inner"><BrainCircuit size={72} strokeWidth={1.2} /><span>AI</span></div></div>
          <div className="float-card card-top"><span className="mini-icon cyan-bg"><Zap size={15} /></span><span><b>تعلم أسرع</b><small>مسار يتكيف معك</small></span><span className="signal">↗ 24%</span></div>
          <div className="float-card card-bottom"><span className="mini-icon gold-bg"><Sparkles size={15} /></span><span><b>فكرة جديدة</b><small>اقتراح ذكي جاهز</small></span></div>
          <div className="art-caption"><span className="caption-line" /> <span>ذكاء يصنع الفرق</span></div>
        </div>
      </section>

      <section className="stats-strip container" id="about">
        <div><strong>01</strong><span>تعلم شخصي<br /><small>مصمم لك</small></span></div>
        <div><strong>∞</strong><span>إمكانيات<br /><small>بلا حدود</small></span></div>
        <div><strong>24/7</strong><span>معك في<br /><small>كل خطوة</small></span></div>
        <div className="stats-note"><span className="sparkle-mini">✦</span> نبني اليوم<br /><b>مهارات الغد</b></div>
      </section>

      <section className="catalog container" id="products">
        <div className="section-heading"><div><span className="section-kicker">مختاراتنا الرقمية</span><h2>أدوات تغيّر<br /><span>طريقة تعلّمك.</span></h2></div><p>كل منتج هنا صُمم بعناية<br />ليقرّبك خطوة من أهدافك.</p></div>
        <div className="catalog-toolbar"><div className="filters">{categories.map((category) => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><label className="search-box"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="ابحث عن منتج..." /></label></div>
        <div className="product-grid">{filtered.map((product, index) => <ProductCard key={product.id} product={product} index={index} onSelect={setSelected} />)}</div>
        {!filtered.length && <div className="empty-state">لم نجد منتجاً بهذا الاسم. جرّب كلمة أخرى.</div>}
      </section>

      <section className="journey container" id="journey"><div className="journey-content"><span className="section-kicker">مصمم حولك</span><h2>لا تتعلم فقط.<br /><span>تقدّم.</span></h2><p>من أول فكرة إلى أول إنجاز، رفيقك الذكي موجود ليجعل كل خطوة أوضح، أسهل، وأكثر إلهاماً.</p><button className="outline-button" onClick={scrollToProducts}>ابدأ رحلتك <ArrowUpLeft size={16} /></button></div><div className="journey-visual"><div className="path-line" /><div className="journey-node node-1"><span>01</span><b>اكتشف</b><small>فضولك يقودك</small></div><div className="journey-node node-2"><span>02</span><b>جرّب</b><small>الخطوة تصنع الفرق</small></div><div className="journey-node node-3"><span>03</span><b>أنجز</b><small>نتيجة تفتخر بها</small></div><div className="journey-orb"><Orbit size={42} /></div></div></section>

      <footer className="footer container"><div className="brand"><span className="brand-mark"><Sparkles size={18} /></span><span><b>التدريب</b><small>المهني · VTC</small></span></div><span>منتجات رقمية من مؤسسة التدريب المهني</span><span>© 2026 VTC</span></footer>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="product-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="إغلاق"><X size={19} /></button><div className={`modal-icon ${selected.accent}`}><selected.icon size={30} /></div><span className="section-kicker">{selected.categoryLabel}</span><h3>{selected.title}</h3><p>{selected.description}</p><div className="modal-meta"><span><Clock3 size={16} /> {selected.meta}</span><span><Download size={16} /> متاح لكل المتعلمين</span></div><button className="primary-button wide" onClick={() => setSelected(null)}>ابدأ الآن <ChevronLeft size={18} /></button></div></div>}
    </main>
  );
}

function ProductCard({ product, index, onSelect }: { product: Product; index: number; onSelect: (product: Product) => void }) {
  const Icon = product.icon;
  return <article className={`product-card ${product.featured ? "featured" : ""} accent-${product.accent}`} style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} onClick={() => onSelect(product)}><div className="card-header"><span className="product-icon"><Icon size={22} strokeWidth={1.7} /></span><span className="product-tag">{product.tag}</span></div><div className="card-art"><div className="art-grid" /><Icon size={86} strokeWidth={0.7} /><span className="art-code">{product.id.toString().padStart(2, "0")} / AI</span></div><span className="card-category">{product.categoryLabel}</span><h3>{product.title}</h3><p>{product.description}</p><div className="card-footer"><span>{product.meta}</span><button aria-label={`فتح ${product.title}`}><ArrowUpLeft size={17} /></button></div></article>;
}

void CirclePlay;
void Mic2;
void Check;
