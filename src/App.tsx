import {
  type LucideIcon,
  Activity,
  Apple,
  Brain,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Leaf,
  MessageCircle,
  Package,
  Play,
  Rabbit,
  Shield,
  ShoppingCart,
  Sparkles,
  Truck,
  User,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const MSRP = 79.99;
const SUB_PRICE = 40.8;
const ONE_PRICE = 54.4;
const PER_DAY = (SUB_PRICE / 28).toFixed(2);

function cn(...p: (string | false | undefined)[]) {
  return p.filter(Boolean).join(" ");
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setOn(true);
      },
      { threshold: 0.07, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "translateY(0)" : "translateY(1.25rem)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ——— 1. Announcement (image_1: soft pink, scrolling) ——— */
function AnnouncementBar() {
  const line =
    "🍓 NEW! DEXY Citrus Bloom 🍓 Grab this bright, juicy daily pack before it's gone.";
  return (
    <div className="relative z-[70] bg-[#fcdce4] py-2 text-black">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee pause-on-hover whitespace-nowrap">
          {[line, line, line].map((t, i) => (
            <span
              key={i}
              className="mx-12 inline-block font-sans text-sm font-semibold sm:text-[15px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ——— 2. Sticky nav — image_1: always forest green ——— */
function StickyNav() {
  return (
    <header className="sticky top-0 z-[60] border-b border-black/10 bg-primary shadow-md">
      <nav className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#finder"
            className="hidden rounded-full border-2 border-accent px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-wide text-white sm:inline sm:px-4 sm:text-xs"
          >
            Shop Daily
          </a>
          <a
            href="#checkout"
            className="hidden rounded-full border-2 border-accent px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-wide text-white md:inline sm:px-4 sm:text-xs"
          >
            Shop Bundle
          </a>
        </div>
        <a
          href="#top"
          className="text-center font-display text-2xl font-black tracking-tighter text-white sm:text-3xl"
        >
          DEXY
        </a>
        <div className="flex items-center justify-end gap-3 sm:gap-5">
          <a
            href="#"
            className="hidden items-center gap-1 font-sans text-sm font-semibold text-white/90 hover:text-white lg:flex"
          >
            <User className="h-4 w-4" />
            Account
          </a>
          <button
            type="button"
            className="hidden text-white lg:block"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          <a
            href="#checkout"
            className="rounded-full bg-accent px-4 py-2.5 font-display text-[10px] font-black uppercase tracking-widest text-black shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition hover:brightness-95 active:translate-y-0.5 active:shadow-none sm:px-6 sm:text-xs"
          >
            Shop now
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ——— Gummy / sachet placeholder ——— */
function SachetPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-end rounded-2xl bg-primary p-6 shadow-inner",
        className
      )}
    >
      <span className="absolute top-3 left-1/2 -translate-x-1/2 font-display text-lg font-black tracking-tighter text-accent">
        dexy
      </span>
      <Package className="mb-2 h-24 w-24 text-accent/40" strokeWidth={1} />
      <span className="text-center font-sans text-[10px] font-bold uppercase tracking-widest text-white/70">
        Daily pack
      </span>
    </div>
  );
}

/* ——— 3. Hero — image_1 ——— */
function HeroSection() {
  return (
    <section
      id="top"
      className="bg-background px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-primary">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-lg text-primary" aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <span className="font-sans text-sm font-bold sm:text-base">
              4.8 stars from 85,000 reviews | 1,000,000+ members
            </span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,6.5vw,4rem)] font-black leading-[1.02] tracking-tighter text-black">
            You have nutrition gaps,
            <br />
            DEXY fills them.
          </h1>
          <p className="mt-6 max-w-lg font-sans text-lg font-medium leading-relaxed text-neutral-700">
            60 ingredients, 21 vitamins &amp; minerals, and 6g prebiotic fiber in
            one delicious daily pack of gummies.
          </p>
          <a
            href="#checkout"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-display text-sm font-black uppercase tracking-wide text-white shadow-[0_6px_0_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none sm:text-base"
          >
            Save 52% + Free Shipping
          </a>
          <div className="mt-5 flex items-center gap-2 font-sans text-sm font-semibold text-neutral-600">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              <Check className="h-3.5 w-3.5 stroke-[3]" />
            </span>
            30-Day Guarantee
            <span className="text-neutral-400" aria-hidden>
              ⓘ
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-2 top-6 z-10 sm:left-4">
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-conversion p-2 text-center text-[9px] font-black uppercase leading-tight text-white shadow-lg ring-4 ring-white">
              <span>Online</span>
              <span>Exclusive</span>
            </div>
          </div>
          <div className="rounded-3xl bg-mint-panel p-6 shadow-inner sm:p-10">
            <div className="grid grid-cols-[1fr_1fr] gap-4 sm:gap-6">
              <SachetPlaceholder className="aspect-[3/4] min-h-[200px]" />
              <div className="flex flex-col gap-3">
                <div className="flex-1 rounded-2xl border-2 border-dashed border-primary/20 bg-white/60 p-4">
                  <Package className="mx-auto h-16 w-16 text-primary/25" />
                  <p className="mt-2 text-center font-sans text-xs font-semibold text-neutral-500">
                    Sachets
                  </p>
                </div>
                <div className="flex flex-1 flex-wrap content-center justify-center gap-2 rounded-2xl bg-white/40 p-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-lg bg-primary/80 shadow-sm"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 4. Media carousel — image_1 / image_2 ——— */
const MEDIA_SLIDES = [
  {
    quote: "A multivitamin that doesn't taste bad? Count us in.",
    logo: "theSkimm",
  },
  {
    quote: "The daily habit we actually stick to.",
    logo: "GLAMOUR",
  },
  {
    quote: "Premium fuel without the shaker bottle.",
    logo: "GQ",
  },
];

function MediaMarqueeSection() {
  const [i, setI] = useState(0);
  const prev = () =>
    setI((x) => (x - 1 + MEDIA_SLIDES.length) % MEDIA_SLIDES.length);
  const next = () => setI((x) => (x + 1) % MEDIA_SLIDES.length);

  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white shadow-sm transition hover:bg-neutral-50 sm:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="min-h-[120px] flex-1 text-center">
            <p className="mx-auto max-w-md font-quote text-sm italic leading-snug text-neutral-700 sm:text-base">
              “{MEDIA_SLIDES[i].quote}”
            </p>
            <p className="mt-6 font-display text-2xl font-black tracking-tighter text-neutral-400 grayscale sm:text-3xl">
              {MEDIA_SLIDES[i].logo}
            </p>
          </div>
          <button
            type="button"
            onClick={next}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white shadow-sm transition hover:bg-neutral-50 sm:flex"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {MEDIA_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                idx === i ? "bg-primary scale-125" : "bg-neutral-300"
              )}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— 5. Product grid — image_2 ——— */
const FINDER = [
  {
    title: "Adults Original",
    gradient: "from-[#f5e85c] via-[#c8e6a0] to-[#7fd99a]",
    isNew: false,
  },
  {
    title: "Kids Original",
    gradient: "from-[#f8a8c8] via-[#fde68a] to-[#fcd34d]",
    isNew: false,
  },
  {
    title: "Adults + Energy",
    gradient: "from-[#5eead4] via-[#fcd34d] to-[#fb923c]",
    isNew: true,
  },
  {
    title: "Kids + Berry",
    gradient: "from-[#fbcfe8] via-[#fda4af] to-[#fdba74]",
    isNew: true,
  },
] as const;

function ProductFinderGrid() {
  return (
    <section id="finder" className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-[clamp(1.75rem,4.5vw,3rem)] font-black tracking-tighter text-primary">
          Find Your Favorite
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FINDER.map((item) => (
            <button
              key={item.title}
              type="button"
              className="group relative overflow-hidden rounded-3xl border-2 border-black/10 shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
            >
              {item.isNew ? (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 font-display text-[10px] font-black uppercase tracking-widest text-white">
                  New!
                </span>
              ) : null}
              <div
                className={cn(
                  "flex aspect-[4/5] flex-col bg-gradient-to-b p-6",
                  item.gradient
                )}
              >
                <div className="flex flex-1 items-center justify-center rounded-2xl bg-white/50 shadow-inner">
                  <Package className="h-20 w-20 text-black/20" strokeWidth={1} />
                </div>
                <p className="mt-4 text-center font-display text-lg font-black tracking-tighter text-black">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— 6. Transform — image_3 ——— */
const HEALTH: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Gut Health",
    body: "Prebiotics feed good bacteria to boost nutrient absorption and digestion.",
    icon: Sparkles,
  },
  {
    title: "Energy & Body",
    body: "Support recovery, strength, weight management, and metabolism.",
    icon: Activity,
  },
  {
    title: "Immunity",
    body: "Immune support and occasional stress support from Vitamin C, D, Zinc, antioxidants, and adaptogens.",
    icon: Shield,
  },
  {
    title: "Brain Health",
    body: "B-Vitamins, Vitamin C, and Vitamin D support brain health.",
    icon: Brain,
  },
];

function TransformSection() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-[clamp(1.85rem,5vw,3.25rem)] font-black tracking-tighter text-black">
          Transform Your Health
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-base font-medium text-neutral-600 sm:text-lg">
          Over 35,000 research publications support the ingredients in DEXY.
        </p>
        <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
          <div className="flex flex-col gap-10 lg:gap-16">
            <FeatureBlock {...HEALTH[0]} />
            <FeatureBlock {...HEALTH[1]} />
          </div>
          <div className="order-first flex justify-center lg:order-none">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-mint-panel shadow-[0_20px_60px_-15px_rgba(0,88,45,0.35)] ring-8 ring-white sm:h-64 sm:w-64">
              <Rabbit
                className="h-28 w-28 text-primary sm:h-32 sm:w-32"
                strokeWidth={1.25}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:gap-16">
            <FeatureBlock {...HEALTH[2]} />
            <FeatureBlock {...HEALTH[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: LucideIcon;
}) {
  return (
    <article className="text-center lg:text-left">
      <div className="mx-auto mb-4 inline-flex rounded-full border-2 border-primary p-4 text-primary lg:mx-0">
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl font-black tracking-tighter text-primary sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-neutral-700 sm:text-base">
        {body}
      </p>
    </article>
  );
}

/* ——— 7. Modern living — image_4 (conversion block) ——— */
function ModernLivingSection() {
  return (
    <section className="bg-mint-page px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border-2 border-black/5 bg-white shadow-xl">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14">
            <h2 className="font-display text-[clamp(1.65rem,4vw,2.75rem)] font-black leading-tight tracking-tighter text-primary">
              Modern Living Leaves Our Bodies Deficient
            </h2>
            <p className="mt-4 font-sans text-lg font-medium text-neutral-600">
              DEXY is the first smart gummy that fills the gaps.
            </p>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <p className="font-display text-5xl font-black tracking-tighter text-primary sm:text-6xl">
                  90%
                </p>
                <p className="mt-3 font-sans text-sm font-semibold leading-relaxed text-neutral-600">
                  of U.S. adults don&apos;t meet recommended daily nutrient
                  intake—including vitamins and minerals found in DEXY.¹
                </p>
              </div>
              <div>
                <p className="font-display text-5xl font-black tracking-tighter text-primary sm:text-6xl">
                  61%
                </p>
                <p className="mt-3 font-sans text-sm font-semibold leading-relaxed text-neutral-600">
                  of Americans experience weekly digestive issues like bloating,
                  abdominal pain, or irregularity.²
                </p>
              </div>
            </div>
            <a
              href="#checkout"
              className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 font-display text-sm font-black uppercase tracking-wide text-white shadow-[0_6px_0_0_rgba(0,0,0,0.18)] transition hover:brightness-110 active:translate-y-1 active:shadow-none"
            >
              Save 52% + Free Shipping
            </a>
            <p className="mt-6 text-center font-sans text-xs text-neutral-400 sm:text-left">
              <span className="underline">1 Source</span>
              {" · "}
              <span className="underline">2 Source</span>
            </p>
          </div>
          <div className="relative min-h-[280px] bg-mint-panel lg:min-h-0">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="max-w-xs rounded-2xl bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm">
                <Package className="mx-auto h-20 w-20 text-primary/30" />
                <p className="mt-4 font-sans text-sm font-semibold text-neutral-600">
                  Lifestyle: hands opening a DEXY sachet — add{" "}
                  <code className="rounded bg-black/5 px-1 text-xs">
                    public/dexy-lifestyle.jpg
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 8. Us vs them ——— */
const VS = [
  "Third-party tested",
  "No proprietary blends",
  "Transparent label",
  "Ships in 24 hours",
  "30-day guarantee",
] as const;

function UsVsThemSection() {
  return (
    <section id="compare" className="scroll-mt-28 bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black tracking-tighter text-black">
          Us vs. Them
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-lg font-medium text-neutral-600">
          Not overhyped or overpriced. Just comprehensive nutrition made
          enjoyable.
        </p>
        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-black/10 shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-black/10 bg-neutral-200/60 p-8 md:border-b-0 md:border-r">
              <p className="font-display text-sm font-black uppercase tracking-widest text-neutral-500">
                Generic gummies
              </p>
              <ul className="mt-8 space-y-5">
                {VS.map((row) => (
                  <li
                    key={row}
                    className="flex items-center gap-3 font-sans font-semibold text-neutral-500"
                  >
                    <X className="h-5 w-5 shrink-0 text-neutral-400" />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary p-8 text-white md:p-10">
              <p className="font-display text-sm font-black uppercase tracking-widest text-accent">
                DEXY
              </p>
              <ul className="mt-8 space-y-5">
                {VS.map((row) => (
                  <li
                    key={row}
                    className="flex items-center gap-3 font-sans font-semibold text-white"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check className="h-5 w-5 stroke-[3]" />
                    </span>
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 9. Stats + trust — image_4/5 ——— */
const STATS = [
  {
    n: "95%",
    t: "of users take DEXY at least 4-6x per week with 80% taking DEXY daily.*",
  },
  {
    n: "67%",
    t: "say their overall health and well-being have improved.*",
  },
  {
    n: "67%",
    t: "experienced better, more regular digestion.*",
  },
  {
    n: "52%",
    t: "feel more energized throughout the day.*",
  },
];

const CONTAM = [
  "70 Different pesticides",
  "4 types of heavy metals",
  "16 different contaminants",
  "9 Microbial contaminants",
];

function StatsTrustSection() {
  return (
    <section className="bg-mint-page px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border-2 border-black/5 bg-background px-6 py-14 shadow-lg sm:px-10 sm:py-16">
        <h2 className="text-center font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-black tracking-tighter text-primary">
          Snackable, Packable, Tested
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center font-sans text-sm font-medium text-neutral-600 sm:text-base">
          Here&apos;s what thousands of customers reported after 3 months of
          DEXY.*
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.n} className="text-center">
              <p className="font-display text-5xl font-black tracking-tighter text-primary sm:text-6xl">
                {s.n}
              </p>
              <p className="mt-4 font-sans text-sm font-semibold leading-relaxed text-neutral-700">
                {s.t}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-sans text-xs text-neutral-400">
          *In a post-purchase survey of 3k+ customers who&apos;ve been using
          DEXY daily.
        </p>
        <hr className="my-14 border-black/10" />
        <h3 className="text-center font-display text-2xl font-black tracking-tighter text-primary sm:text-3xl">
          Quality You Can Trust
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-sm font-medium text-neutral-600">
          Our gummies are regularly tested for all 21 vitamins &amp; minerals to
          ensure label claims are accurate and clear of contaminants including:
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {CONTAM.map((c) => (
            <div
              key={c}
              className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4"
            >
              <XCircle className="h-6 w-6 shrink-0 fill-conversion text-conversion" />
              <span className="font-sans text-sm font-bold text-neutral-800">
                {c}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-display text-lg font-black text-primary">
          4.8 stars
        </p>
      </div>
    </section>
  );
}

/* ——— 10. Product deep-dive — image_6 / 7 ——— */
const THUMB_KEYS = ["Front", "Facts", "Lifestyle", "Stats", "Gummies", "Pack"] as const;
const PDP_BENEFITS: { icon: LucideIcon; label: string }[] = [
  { icon: Heart, label: "Full-body health benefits" },
  { icon: Truck, label: "On-the-go convenience" },
  { icon: Apple, label: "Supports gut health" },
  { icon: Zap, label: "Crash-free energy" },
  { icon: Leaf, label: "Great taste, no compromises" },
];

function ProductDeepDiveSection() {
  const [thumb, setThumb] = useState(0);
  const [flavor, setFlavor] = useState<"orig" | "newf">("orig");
  const [sugar, setSugar] = useState<"low" | "free">("low");
  const [qty, setQty] = useState<1 | 2>(1);
  const [plan, setPlan] = useState<"sub" | "once">("sub");

  const unit =
    plan === "sub"
      ? SUB_PRICE * (qty === 2 ? 0.95 : 1)
      : ONE_PRICE * (qty === 2 ? 0.95 : 1);
  const crossed = MSRP * qty;

  return (
    <section
      id="checkout"
      className="scroll-mt-28 bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[#fef08a] px-4 py-1.5 font-display text-xs font-black text-black">
            New Citrus Bloom Flavor!
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.35rem,3.5vw,2.25rem)] font-black tracking-tighter text-primary">
            Limited Time Offer! Save Up To 52% on Your First Order!
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          {/* Gallery */}
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {THUMB_KEYS.map((k, idx) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setThumb(idx)}
                  className={cn(
                    "h-16 w-16 shrink-0 rounded-xl border-2 bg-mint-panel text-[9px] font-bold text-primary/50 sm:h-[4.5rem] sm:w-[4.5rem]",
                    thumb === idx
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-black/10"
                  )}
                >
                  {k}
                </button>
              ))}
            </div>
            <div className="min-w-0 flex-1">
              <div className="overflow-hidden rounded-3xl border-4 border-black shadow-xl">
                <div className="bg-primary py-2.5 text-center font-display text-xs font-black uppercase tracking-wide text-white sm:text-sm">
                  🔥 LIMITED TIME OFFER: SAVE UP TO 52% 🔥
                </div>
                <div className="grid bg-mint-panel md:grid-cols-[1fr_auto]">
                  <div className="flex items-center justify-center p-8">
                    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
                      <SachetPlaceholder className="aspect-[3/4]" />
                      <div className="flex flex-col justify-center gap-3">
                        <div className="rounded-xl border-2 border-dashed border-primary/30 bg-white/70 p-4 text-center">
                          <Package className="mx-auto h-12 w-12 text-primary/30" />
                          <p className="mt-2 text-xs font-semibold text-neutral-500">
                            Sachet
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="h-6 w-6 rounded-md bg-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center border-t border-black/10 bg-[#fffbeb] p-4 md:border-l md:border-t-0 md:p-5">
                    <ul className="space-y-4">
                      {PDP_BENEFITS.map(({ icon: Icon, label }) => (
                        <li
                          key={label}
                          className="flex items-center gap-3 font-sans text-xs font-bold text-neutral-800 sm:text-sm"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white">
                            <Icon className="h-4 w-4 text-primary" />
                          </span>
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="mt-5 w-full rounded-full border-4 border-black bg-white py-3.5 font-display text-sm font-black text-black shadow-sm transition hover:bg-neutral-50"
              >
                View Nutrition Label
              </button>
              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600">
                  ✓
                </div>
                <p className="font-sans text-sm font-semibold text-neutral-700">
                  Tested by independent labs in 2024. 35 substances tested for
                  quality →
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2 text-primary">
              <span className="text-lg">★★★★★</span>
              <span className="font-sans text-sm font-bold">
                4.8/5.0 (85,000), 1M+ Customers
              </span>
            </div>
            <h3 className="font-display text-3xl font-black tracking-tighter text-primary sm:text-4xl">
              DEXY Superfood Gummies
            </h3>
            <p className="mt-4 font-sans text-base font-medium text-neutral-600">
              60+ potent ingredients to revive whole body vitality in great
              tasting gummies.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Promotes mental clarity + energy",
                "Supports immunity + stress relief",
                "Supports digestion and gut health",
                "Clinically tested for nutrient absorption",
              ].map((t) => (
                <li key={t} className="flex gap-2 font-sans text-sm font-semibold">
                  <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display text-sm font-black text-black">
              <span className="text-neutral-500">Select Flavor:</span>{" "}
              {flavor === "orig" ? "Original" : "Citrus Bloom"}
            </p>
            <p className="mt-1 font-sans text-sm italic text-neutral-500">
              *Where fresh citrus meets clean greens.*
            </p>
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                onClick={() => setFlavor("orig")}
                className={cn(
                  "relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 transition",
                  flavor === "orig"
                    ? "border-primary bg-mint-panel"
                    : "border-black/10 bg-white"
                )}
              >
                <Package className="h-10 w-10 text-primary/40" />
                <span className="mt-1 text-[10px] font-bold">Original</span>
              </button>
              <button
                type="button"
                onClick={() => setFlavor("newf")}
                className={cn(
                  "relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 transition",
                  flavor === "newf"
                    ? "border-primary bg-mint-panel"
                    : "border-black/10 bg-white"
                )}
              >
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full bg-[#fef08a] px-2 py-0.5 text-[8px] font-black">
                  NEW
                </span>
                <Sparkles className="h-10 w-10 text-primary/40" />
                <span className="mt-1 text-[10px] font-bold">Citrus</span>
              </button>
            </div>

            <p className="mt-8 font-display text-sm font-black text-black">
              Select Sugar Level
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSugar("low")}
                className={cn(
                  "rounded-full border-2 px-6 py-3 font-sans text-sm font-bold transition",
                  sugar === "low"
                    ? "border-black bg-mint-panel"
                    : "border-black/15 bg-white"
                )}
              >
                Low Sugar
              </button>
              <button
                type="button"
                onClick={() => setSugar("free")}
                className={cn(
                  "rounded-full border-2 px-6 py-3 font-sans text-sm font-bold transition",
                  sugar === "free"
                    ? "border-black bg-mint-panel"
                    : "border-black/15 bg-white"
                )}
              >
                Sugar-Free
              </button>
            </div>

            <div className="mt-8">
              <span className="mb-2 inline-block rounded-full bg-mint-panel px-3 py-1 font-sans text-xs font-black text-primary">
                Buy 2 Save 5%
              </span>
              <p className="font-display text-sm font-black text-black">
                Select Quantity
              </p>
              <div className="mt-3 inline-flex rounded-full border-2 border-black p-1">
                {([1, 2] as const).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setQty(n)}
                    className={cn(
                      "min-w-[3rem] rounded-full px-5 py-2 font-display text-lg font-black transition",
                      qty === n ? "bg-mint-panel" : "bg-transparent"
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <button
                type="button"
                onClick={() => setPlan("sub")}
                className={cn(
                  "w-full overflow-hidden rounded-3xl border-2 border-black text-left shadow-lg transition",
                  plan === "sub" ? "ring-4 ring-primary/25" : ""
                )}
              >
                <div className="bg-primary py-2 text-center font-display text-[11px] font-black uppercase tracking-wide text-white sm:text-xs">
                  MOST POPULAR: GET 49% OFF
                </div>
                <div className="space-y-4 bg-white p-6">
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 rounded-full border-2",
                        plan === "sub"
                          ? "border-primary bg-primary"
                          : "border-neutral-300"
                      )}
                    />
                    <div>
                      <p className="font-display text-xl font-black">
                        <span className="text-primary">
                          ${unit.toFixed(2)}
                        </span>{" "}
                        <span className="text-neutral-400 line-through">
                          ${crossed.toFixed(2)}
                        </span>
                      </p>
                      <p className="font-sans text-sm font-semibold text-neutral-500">
                        ${PER_DAY}/day
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 font-sans text-sm font-semibold text-neutral-700">
                    {[
                      "30-Day Guarantee",
                      "FAST & FREE Shipping",
                      "Pause Or Cancel Any Time",
                      "Online Exclusive",
                    ].map((x) => (
                      <li key={x} className="flex gap-2">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPlan("once")}
                className={cn(
                  "w-full rounded-3xl border-2 border-black/15 bg-white p-6 text-left shadow transition",
                  plan === "once" ? "ring-4 ring-primary/15" : ""
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "mt-1 h-5 w-5 shrink-0 rounded-full border-2",
                      plan === "once"
                        ? "border-primary bg-primary"
                        : "border-neutral-300"
                    )}
                  />
                  <div>
                    <p className="font-display font-black text-neutral-800">
                      One Time Purchase
                    </p>
                    <p className="mt-1 font-display text-lg font-black">
                      <span className="text-primary">
                        ${(ONE_PRICE * qty * (qty === 2 ? 0.95 : 1)).toFixed(2)}
                      </span>{" "}
                      <span className="text-neutral-400 line-through">
                        ${crossed.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-primary py-4 font-display text-base font-black uppercase tracking-wide text-white shadow-[0_6px_0_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none"
            >
              Start Now
            </button>
            <div className="mt-4 rounded-2xl bg-[#fef9c3] py-3 text-center font-sans text-sm font-bold text-neutral-800">
              Limited Time Discount Auto-Applied ✅
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-black/10 pt-8">
              <TrustMini icon={Shield} label="30-day guarantee" />
              <TrustMini icon={Check} label="3rd party tested" />
              <TrustMini icon={Heart} label="HSA/FSA eligible*" />
            </div>
          </div>
        </div>

        {/* Accordions row — image_7 */}
        <div className="mt-16 border-t-2 border-black/10 pt-12">
          <h3 className="mb-6 font-display text-xl font-black tracking-tighter text-black">
            Product details
          </h3>
          <div className="divide-y-2 divide-black border-y-2 border-black">
            {[
              "Why DEXY?",
              "Ingredients & Allergies",
              "Low Sugar vs. Sugar-Free",
              "Science & Certifications",
              "Directions",
              "Benefits",
            ].map((title) => (
              <FAQRow key={title} title={title} />
            ))}
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h4 className="text-center font-display text-lg font-black tracking-tighter text-black">
                Tastes Like
              </h4>
              <div className="mt-6 flex justify-center gap-6">
                <TasteOrb label="Fresh & Light" bg="bg-green-100" emoji="🌿" />
                <TasteOrb label="Citrus" bg="bg-pink-100" emoji="🍊" />
                <TasteOrb label="Sweet Greens" bg="bg-lime-100" emoji="🥬" />
              </div>
            </div>
            <div>
              <h4 className="text-center font-display text-lg font-black tracking-tighter text-black">
                Packed With
              </h4>
              <ul className="mx-auto mt-6 max-w-sm space-y-3">
                {[
                  ["🥬", "Whole Veggies"],
                  ["🍇", "Whole Fruits"],
                  ["💊", "Vitamins and Minerals"],
                  ["🧠", "Adaptogens"],
                  ["🌿", "Herbs"],
                  ["🛡️", "Antioxidants"],
                  ["🔬", "Prebiotics"],
                  ["🍄", "Super Mushrooms"],
                ].map(([e, l]) => (
                  <li key={l} className="flex items-center gap-3 font-sans text-sm font-bold">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5">
                      {e}
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQRow({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left font-display font-black tracking-tighter text-black"
      >
        {title}
        <span className="text-2xl font-light text-neutral-400">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <p className="pb-4 font-sans text-sm font-medium text-neutral-600">
          Placeholder answer for {title}. Replace with your PDP copy.
        </p>
      ) : null}
    </div>
  );
}

function TasteOrb({
  label,
  bg,
  emoji,
}: {
  label: string;
  bg: string;
  emoji: string;
}) {
  return (
    <div className="text-center">
      <div
        className={cn(
          "mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-inner",
          bg
        )}
      >
        {emoji}
      </div>
      <p className="mt-2 font-sans text-xs font-bold">{label}</p>
    </div>
  );
}

function TrustMini({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="flex max-w-[100px] flex-col items-center text-center">
      <Icon className="h-6 w-6 text-primary" />
      <span className="mt-2 font-sans text-[10px] font-bold leading-tight text-neutral-600">
        {label}
      </span>
    </div>
  );
}

/* ——— 11. FAQ grid (sitewide) ——— */
const FAQ_PAGE = [
  {
    q: "Why DEXY?",
    a: "One pack replaces a cabinet of supplements—with taste you’ll crave and testing you can trust.",
  },
  {
    q: "Ingredients & allergies",
    a: "Full label transparency. Made in a facility that also processes common allergens—see packaging for details.",
  },
  {
    q: "Shipping & returns",
    a: "Most orders ship within 24 hours. 30-day guarantee on your first order.",
  },
  {
    q: "Subscription",
    a: "Pause, skip, or cancel anytime. Member pricing stays locked while you’re active.",
  },
];

function FAQGridSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-mint-page px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-[clamp(1.75rem,4vw,2.75rem)] font-black tracking-tighter text-black">
          Any last questions?
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {FAQ_PAGE.map((item, i) => (
            <div
              key={item.q}
              className="overflow-hidden rounded-3xl border-2 border-black/10 bg-white shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg font-black tracking-tighter">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-6 w-6 shrink-0 text-primary transition",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300",
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 font-sans text-sm font-medium text-neutral-600">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— 12. Testimonials — image_10 ——— */
const FILTERS = [
  "Taste",
  "Value",
  "Vs Powders",
  "Benefits",
  "Ingredients",
  "Convenience",
] as const;

const REVIEWS = [
  {
    head: "10/10 would recommend. The convenience and taste are huge!",
    body: "Like mixed berries—plus no shaker bottle or extra dishes.",
    who: "Dustin O.",
  },
  {
    head: "Shockingly delicious, like strawberries.",
    body: "We canceled before it arrived, then resubscribed the same week. Whole family is hooked.",
    who: "Kate S.",
  },
  {
    head: "DEXY replaced three separate supplements for me.",
    body: "Way less than I was paying before. Best switch I’ve made.",
    who: "Rebecca D.",
  },
];

const VIDEOS = [
  { badge: "VS GREEN POWDERS", cap: "Before DEXY my energy was gone" },
  { badge: "VALUE", cap: "Half what I paid for powders" },
  { badge: "BENEFITS", cap: "Gut health actually improved" },
  { badge: "INGREDIENTS", cap: "I read every line on the label" },
  { badge: "CONVENIENCE", cap: "Toss a pack and go" },
];

function TestimonialSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Taste");
  return (
    <section className="bg-mint-page px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-xl">
              ★
            </span>
          ))}
        </div>
        <p className="mt-2 text-center font-sans text-sm font-bold text-primary">
          4.8 stars
        </p>
        <h2 className="mt-6 text-center font-display text-[clamp(1.5rem,4vw,2.75rem)] font-black leading-tight tracking-tighter text-primary">
          Join 1,000,000+ Others Filling Nutrition Gaps
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border-2 border-black px-5 py-2.5 font-display text-xs font-black uppercase tracking-wide transition sm:text-sm",
                filter === f
                  ? "bg-primary text-white"
                  : "bg-transparent text-black hover:bg-white/50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.who}
              className="rounded-3xl border-2 border-black/10 bg-white p-6 shadow-md"
            >
              <div className="text-primary">★★★★★</div>
              <h3 className="mt-3 font-display text-lg font-black tracking-tight text-black">
                {r.head}
              </h3>
              <p className="mt-3 font-sans text-sm font-medium text-neutral-600">
                {r.body}
              </p>
              <p className="mt-4 font-sans text-sm font-black text-black">
                {r.who}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {VIDEOS.map((v) => (
            <div key={v.badge} className="flex flex-col">
              <span className="mb-2 self-center rounded-md bg-mint-panel px-2 py-1 text-center font-display text-[8px] font-black leading-tight text-primary ring-1 ring-primary/20 sm:text-[9px]">
                {v.badge}
              </span>
              <button
                type="button"
                className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border-2 border-black/10 bg-neutral-300 shadow-lg transition hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg">
                    <Play className="ml-0.5 h-6 w-6 fill-primary text-primary" />
                  </span>
                </div>
                <span className="absolute bottom-2 left-2 right-2 font-sans text-[10px] font-bold leading-tight text-white">
                  {v.cap}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Floating promo + chat ——— */
function FloatingPromo({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-6 left-4 z-[80] hidden md:block">
      <div className="flex items-center gap-1 rounded-full bg-conversion py-2 pl-2 pr-4 font-display text-sm font-black uppercase tracking-wide text-white shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10"
          aria-label="Dismiss offer"
        >
          <X className="h-4 w-4" />
        </button>
        Get 52% Off!
      </div>
    </div>
  );
}

function ChatFab() {
  return (
    <button
      type="button"
      className="fixed bottom-6 right-4 z-[80] hidden h-12 w-12 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition hover:brightness-110 md:flex"
      aria-label="Chat"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}

function MobileConversionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] border-t border-black/10 bg-conversion p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] md:hidden">
      <a
        href="#checkout"
        className="flex w-full items-center justify-center rounded-full bg-white py-3.5 font-display text-sm font-black uppercase tracking-[0.15em] text-conversion shadow-md"
      >
        Get 52% Off!
      </a>
    </div>
  );
}

export default function App() {
  const [showFloat, setShowFloat] = useState(true);

  return (
    <div className="min-h-screen bg-background font-sans text-neutral-900 pb-[calc(4.25rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <AnnouncementBar />
      <StickyNav />
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal delay={40}>
        <MediaMarqueeSection />
      </Reveal>
      <Reveal delay={60}>
        <ProductFinderGrid />
      </Reveal>
      <Reveal delay={80}>
        <TransformSection />
      </Reveal>
      <Reveal delay={50}>
        <ModernLivingSection />
      </Reveal>
      <Reveal>
        <UsVsThemSection />
      </Reveal>
      <Reveal delay={40}>
        <StatsTrustSection />
      </Reveal>
      <Reveal>
        <ProductDeepDiveSection />
      </Reveal>
      <Reveal delay={30}>
        <FAQGridSection />
      </Reveal>
      <Reveal delay={40}>
        <TestimonialSection />
      </Reveal>
      <footer className="border-t border-black/10 bg-black py-10 text-center">
        <p className="font-display text-2xl font-black tracking-tighter text-white">
          DEXY
        </p>
        <p className="mt-3 font-sans text-xs text-white/50">
          © {new Date().getFullYear()} DEXY
        </p>
      </footer>
      {showFloat ? <FloatingPromo onClose={() => setShowFloat(false)} /> : null}
      <ChatFab />
      <MobileConversionBar />
    </div>
  );
}
