import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router-dom';
import {
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiEye,
  FiFilm,
  FiPlay,
  FiRadio,
  FiSearch,
  FiTrendingUp,
  FiX,
  FiZap
} from 'react-icons/fi';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SearchBar from '../components/SearchBar.jsx';
import 'swiper/css/navigation';

const categories = ['All', 'AI', 'Technology', 'Recruitment', 'Marketing', 'Video'];

const stories = [
  {
    title: 'How AI Automation Is Redefining Enterprise Operations',
    category: 'AI',
    summary: 'Enterprises are moving beyond pilots and using AI to improve support, reporting, operations, and decision speed.',
    time: '09:30 AM',
    readTime: '5 min read',
    tags: ['Automation', 'LLM', 'Strategy'],
    visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent'
  },
  {
    title: 'Building Scalable Hiring Pipelines for High-Growth Teams',
    category: 'Recruitment',
    summary: 'Structured screening, RPO support, and talent dashboards are becoming essential for fast-growing teams.',
    time: '10:45 AM',
    readTime: '4 min read',
    tags: ['RPO', 'Hiring', 'HR'],
    visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent'
  },
  {
    title: 'Modern Cybersecurity Priorities for Distributed Businesses',
    category: 'Technology',
    summary: 'Cloud security, identity access, backup readiness, and staff awareness remain the strongest first layer.',
    time: '12:10 PM',
    readTime: '7 min read',
    tags: ['Cloud', 'Security', 'IT'],
    visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent'
  },
  {
    title: 'The New Performance Marketing Stack for Enterprise Brands',
    category: 'Marketing',
    summary: 'Search, paid media, content, analytics, and conversion systems now need one operating rhythm.',
    time: '02:20 PM',
    readTime: '5 min read',
    tags: ['SEO', 'Ads', 'Analytics'],
    visualClass: 'bg-gradient-to-br from-secondary via-accent to-primary'
  },
  {
    title: 'Call Center Quality Metrics Leaders Should Review Weekly',
    category: 'Technology',
    summary: 'Resolution quality, response time, escalation reasons, and sentiment can reveal service risks early.',
    time: '04:00 PM',
    readTime: '3 min read',
    tags: ['BPO', 'CX', 'Reporting'],
    visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent'
  },
  {
    title: 'Why Telecom Field Teams Need Real-Time Operational Visibility',
    category: 'Technology',
    summary: 'Better field tracking improves delivery planning, issue handling, and network rollout accountability.',
    time: '05:15 PM',
    readTime: '4 min read',
    tags: ['Telecom', 'Field Ops', 'Network'],
    visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent'
  }
];

const videos = [
  {
    title: 'AI Automation Briefing: From Manual Work to Smart Operations',
    speaker: 'Trimurya Strategy Desk',
    duration: '08:42',
    views: '12.4K',
    youtubeId: 'dQw4w9WgXcQ',
    visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent'
  },
  {
    title: 'Hiring Playbook: Building a Reliable Recruitment Engine',
    speaker: 'HR Advisory Team',
    duration: '06:18',
    views: '8.7K',
    youtubeId: 'ysz5S6PUM-U',
    visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent'
  },
  {
    title: 'Digital Growth Report: Metrics Enterprise Brands Should Watch',
    speaker: 'Marketing Command Center',
    duration: '09:05',
    views: '15.1K',
    youtubeId: 'ScMzIvxBSi4',
    visualClass: 'bg-gradient-to-br from-secondary via-accent to-primary'
  }
];

const updates = [
  'AI adoption is moving from isolated pilots to department-wide operating systems.',
  'Hiring teams are prioritizing verified skill signals over resume volume.',
  'Security leaders are reviewing cloud access, backup, and vendor exposure monthly.',
  'Video-led explainers are improving B2B trust and decision-maker recall.'
];

const marketWatch = [
  { label: 'AI adoption', value: '+6.2%' },
  { label: 'Cloud security demand', value: '+4.8%' },
  { label: 'Talent outsourcing', value: '+3.7%' },
  { label: 'Performance media', value: '+5.1%' }
];

function NewsArt({ visualClass, icon: Icon = FiTrendingUp, large = false }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${visualClass} ${large ? 'min-h-[360px]' : 'h-52'}`}>
      <div className="absolute inset-0 enterprise-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.34),transparent_28%),linear-gradient(180deg,transparent,rgba(2,6,23,0.42))]" />
      <div className="absolute right-5 top-5 rounded bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white">Report</div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-secondary shadow-xl">
          <Icon className="text-2xl" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <span className="h-16 rounded-lg bg-white/15" />
          <span className="h-16 rounded-lg bg-white/25" />
          <span className="h-16 rounded-lg bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onPlay }) {
  const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <article className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-secondary/40 sm:grid-cols-[96px_1fr]">
      <button
        type="button"
        onClick={() => onPlay(video)}
        className="group relative block min-h-20 overflow-hidden bg-slate-950 text-left"
        aria-label={`Play ${video.title}`}
      >
        <img
          src={thumbnail}
          alt={`${video.title} thumbnail`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
        <span className="absolute right-1.5 top-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-black text-white">{video.duration}</span>
        <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-secondary shadow-xl transition group-hover:scale-110">
          <FiPlay className="ml-0.5 text-xs" />
        </span>
      </button>
      <div className="flex min-h-20 flex-col justify-between p-2.5">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-secondary">Briefing</p>
          <button type="button" onClick={() => onPlay(video)} className="mt-0.5 line-clamp-2 text-left text-xs font-black leading-snug text-slate-950 hover:text-secondary dark:text-white">
            {video.title}
          </button>
          <p className="mt-0.5 line-clamp-1 text-[11px] font-semibold text-slate-500 dark:text-slate-300">{video.speaker}</p>
        </div>
        <div className="mt-1.5 flex items-center justify-between text-[10px] font-black text-slate-500">
          <span className="inline-flex items-center gap-1"><FiEye /> {video.views}</span>
          <span>{video.duration}</span>
        </div>
      </div>
    </article>
  );
}

function VideoPlayer({ video, onClose }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (!video) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const requestFullscreen = async () => {
      try {
        if (playerRef.current?.requestFullscreen && !document.fullscreenElement) {
          await playerRef.current.requestFullscreen();
        }
      } catch {
        // The fixed portal remains as a reliable fallback if the browser blocks native fullscreen.
      }
    };

    requestFullscreen();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, [video]);

  if (!video) return null;

  return createPortal(
    <div
      ref={playerRef}
      className="bg-black text-white"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2147483647
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="focus-ring flex items-center justify-center rounded bg-black/70 text-white shadow-lg ring-1 ring-white/20 transition hover:bg-white hover:text-slate-950"
        style={{
          position: 'fixed',
          right: 18,
          top: 18,
          zIndex: 2147483647,
          width: 46,
          height: 46
        }}
        aria-label="Close video"
      >
        <FiX className="text-2xl" />
      </button>
      <iframe
        className="border-0"
        style={{
          display: 'block',
          width: '100vw',
          height: '100vh'
        }}
        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&playsinline=0`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
      />
    </div>,
    document.body
  );
}

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (query) {
      setSearchParams({ q: query }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [query, setSearchParams]);

  const searchableItems = useMemo(
    () => [
      ...stories,
      ...videos.map((video) => ({ ...video, category: 'Video', summary: video.speaker, tags: ['Video', 'Briefing'] }))
    ],
    []
  );

  const filtered = searchableItems.filter((item) => {
    const text = `${item.title} ${item.category} ${item.summary} ${item.tags?.join(' ') ?? ''}`.toLowerCase();
    const matchQuery = text.includes(query.toLowerCase());
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchQuery && matchCategory;
  });

  const filteredStories = filtered.filter((item) => item.category !== 'Video');
  const filteredVideos = activeCategory === 'All' || activeCategory === 'Video' ? videos.filter((video) => `${video.title} ${video.speaker}`.toLowerCase().includes(query.toLowerCase())) : videos;
  const leadStory = stories[0];

  return (
    <main className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-secondary">
            <span className="inline-flex items-center gap-2 rounded bg-secondary/10 px-3 py-2 dark:bg-secondary/20">
              <FiRadio /> Trimurya Newsroom
            </span>
            <span>Business</span>
            <span>/</span>
            <span>Technology</span>
            <span>/</span>
            <span>Videos</span>
          </div>
          <div className="mt-7">
            <div>
              <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
                Business News, Industry Insights And Video Briefings
              </h1>
              <p className="mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300">
                Professional updates on AI, technology, recruitment, marketing, telecom, BPO, and enterprise operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.75fr]">
          <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <NewsArt visualClass={leadStory.visualClass} icon={FiZap} large />
            <div className="p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-secondary">
                <span>{leadStory.category}</span>
                <span className="text-slate-300">/</span>
                <span>{leadStory.time}</span>
                <span className="text-slate-300">/</span>
                <span>{leadStory.readTime}</span>
              </div>
              <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">{leadStory.title}</h2>
              <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300">{leadStory.summary}</p>
              <button className="focus-ring mt-6 inline-flex items-center gap-2 rounded bg-secondary px-5 py-3 text-sm font-black text-white shadow-lg shadow-secondary/30">
                Read Full Story <FiArrowRight />
              </button>
            </div>
          </article>

          <aside className="grid gap-6">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black">Breaking Updates</h2>
                <span className="rounded bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-red-600 dark:bg-red-950/40">Live</span>
              </div>
              <div className="mt-5 space-y-4">
                {updates.map((update, index) => (
                  <div key={update} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0 dark:border-slate-800">
                    <p className="text-xs font-black text-secondary">Update {String(index + 1).padStart(2, '0')}</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-700 dark:text-slate-200">{update}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary/70">Editor&apos;s Pick</p>
              <h2 className="mt-4 text-2xl font-black leading-tight">What leaders should ask before approving an AI pilot</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">A quick checklist for security, data quality, ROI ownership, and adoption readiness.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <SearchBar value={query} onChange={setQuery} placeholder="Search news, videos, categories, tags" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`focus-ring rounded px-4 py-3 text-sm font-black transition ${
                    activeCategory === category
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 lg:grid-cols-[1fr_330px] lg:px-8">
        <div>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary">Latest News</p>
              <h2 className="mt-2 text-3xl font-black">Top Stories</h2>
            </div>
            <FiSearch className="text-2xl text-slate-300" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filteredStories.map((story) => (
              <article key={story.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:border-slate-800 dark:bg-slate-900">
                <NewsArt visualClass={story.visualClass} icon={story.category === 'Recruitment' ? FiBriefcase : FiTrendingUp} />
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                    <span className="text-secondary">{story.category}</span>
                    <span className="inline-flex items-center gap-1"><FiClock /> {story.time}</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-black leading-snug">{story.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">{story.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span key={tag} className="rounded bg-slate-100 px-3 py-1 text-xs font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <FiBarChart2 className="text-xl text-secondary" />
              <h2 className="text-lg font-black">Market Watch</h2>
            </div>
            <div className="mt-5 space-y-4">
              {marketWatch.map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0 dark:border-slate-800">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{item.label}</span>
                  <span className="rounded bg-secondary/10 px-2 py-1 text-xs font-black text-secondary dark:bg-secondary/20">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary">Trending Topics</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['AI Automation', 'RPO', 'Cybersecurity', 'SEO', 'Cloud', 'BPO', 'Telecom'].map((topic) => (
                <span key={topic} className="rounded bg-slate-100 px-3 py-2 text-xs font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                <FiFilm /> Video News
              </p>
              <h2 className="mt-1 text-2xl font-black leading-tight">Latest Video Briefings</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="video-slider-prev focus-ring flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-slate-700 transition hover:bg-secondary hover:text-white dark:bg-slate-800 dark:text-slate-100" aria-label="Previous video">
                <FiChevronLeft />
              </button>
              <button className="video-slider-next focus-ring flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-slate-700 transition hover:bg-secondary hover:text-white dark:bg-slate-800 dark:text-slate-100" aria-label="Next video">
                <FiChevronRight />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.video-slider-prev',
              nextEl: '.video-slider-next'
            }}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 14 },
              1180: { slidesPerView: 3, spaceBetween: 16 }
            }}
          >
            {filteredVideos.map((video) => (
              <SwiperSlide key={video.title} className="h-auto">
                <VideoCard video={video} onPlay={setActiveVideo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <VideoPlayer video={activeVideo} onClose={() => setActiveVideo(null)} />
    </main>
  );
}
