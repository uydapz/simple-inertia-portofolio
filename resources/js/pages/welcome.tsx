import {
    ArrowRight,
    BookOpen,
    Box,
    ChevronDown,
    Code,
    Code2,
    ExternalLink,
    Github,
    GraduationCap,
    Linkedin,
    Mail,
    Rocket,
    Sparkles,
    Terminal,
    Zap,
} from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function Web3Portfolio() {
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [setTime] = useState(0);
    const scrollContainerRef = React.useRef(null);
    const socialsCard = [
        {
            icon: Github,
            link: 'https://github.com/uydapz',
        },
        {
            icon: Linkedin,
            link: 'https://www.linkedin.com/in/achmad-daffa-5b2b1b328/',
        },
        {
            icon: Mail,
            link: 'mailto:uydapzone@gamil.com',
        },
    ];
    const particles = useMemo(
        () =>
            Array.from({ length: 20 }, () => ({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                duration: `${3 + Math.random() * 3}s`,
                delay: `${Math.random() * 2}s`,
            })),
        [],
    );
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }, // 50% video harus terlihat untuk autoplay
        );

        observer.observe(video);

        return () => observer.unobserve(video);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        const handleWheel = (e) => {
            const projectsSection = document.getElementById('projects');
            const scrollContainer = scrollContainerRef.current;

            if (projectsSection && scrollContainer) {
                const rect = projectsSection.getBoundingClientRect();
                const isInProjectsView =
                    rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

                if (isInProjectsView) {
                    const maxScrollLeft =
                        scrollContainer.scrollWidth -
                        scrollContainer.clientWidth;
                    const currentScrollLeft = scrollContainer.scrollLeft;

                    if (
                        (e.deltaY > 0 && currentScrollLeft < maxScrollLeft) ||
                        (e.deltaY < 0 && currentScrollLeft > 0)
                    ) {
                        e.preventDefault();
                        scrollContainer.scrollLeft += e.deltaY;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 0.01);
        }, 16);
        return () => clearInterval(interval);
    }, []);

    const skills = [
        {
            name: 'Laravel',
            level: 90,
            color: 'from-red-400 to-orange-500',
        },
        {
            name: 'React JS',
            level: 40,
            color: 'from-blue-400 to-cyan-500',
        },
        {
            name: 'REST API',
            level: 80,
            color: 'from-emerald-400 to-teal-500',
        },
        {
            name: 'Tailwind CSS',
            level: 30,
            color: 'from-cyan-400 to-sky-500',
        },
        {
            name: 'Bootstrap',
            level: 95,
            color: 'from-purple-400 to-indigo-500',
        },
        {
            name: 'Basic Web Development',
            level: 80,
            color: 'from-gray-400 to-gray-600',
        },
    ];

    const projects = [
        {
            urlImg: 'images/project1.png',
            title: 'DeFi Protocol',
            description:
                'Decentralized lending and borrowing platform with automated market makers and yield farming capabilities.',
            tech: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
            color: 'from-cyan-500/30 via-blue-500/30 to-purple-500/30',
        },
        {
            urlImg: 'images/project1.png',
            title: 'NFT Marketplace',
            description:
                'Full-featured NFT marketplace with minting, trading, and royalty distribution on Ethereum mainnet.',
            tech: ['ERC-721', 'IPFS', 'Next.js', 'Ethers.js'],
            color: 'from-purple-500/30 via-pink-500/30 to-rose-500/30',
        },
        {
            urlImg: 'images/project1.png',
            title: 'DAO Governance',
            description:
                'Decentralized autonomous organization platform with on-chain voting and proposal mechanisms.',
            tech: ['Solidity', 'Snapshot', 'IPFS', 'TheGraph'],
            color: 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30',
        },
        {
            urlImg: 'images/project1.png',
            title: 'Cross-Chain Bridge',
            description:
                'Secure asset bridge enabling seamless transfers between Ethereum, Polygon, and Arbitrum networks.',
            tech: ['LayerZero', 'Chainlink', 'Solidity', 'Web3'],
            color: 'from-orange-500/30 via-amber-500/30 to-yellow-500/30',
        },
        {
            urlImg: 'images/project1.png',
            title: 'Metaverse Land',
            description:
                'Virtual real estate platform with 3D visualization, trading, and development capabilities.',
            tech: ['Three.js', 'ERC-1155', 'WebGL', 'Unity'],
            color: 'from-indigo-500/30 via-violet-500/30 to-purple-500/30',
        },
        {
            urlImg: 'images/project1.png',
            title: 'Token Launchpad',
            description:
                'IDO platform with fair launch mechanics, vesting schedules, and liquidity lock features.',
            tech: ['Solidity', 'React', 'Uniswap', 'Chainlink'],
            color: 'from-pink-500/30 via-rose-500/30 to-red-500/30',
        },
    ];

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
            {/* Animated Grid Background */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                        transform: `translateY(${scrollY * 0.2}px)`,
                    }}
                />
            </div>

            {/* Dynamic Gradient Orbs */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div
                    className="absolute h-[600px] w-[600px] rounded-full opacity-40 blur-[120px]"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(59,130,246,0.3) 50%, transparent 100%)',
                        left: mousePos.x - 300,
                        top: mousePos.y - 300,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                />
                <div
                    className="absolute h-[800px] w-[800px] rounded-full opacity-30 blur-[150px]"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(236,72,153,0.3) 50%, transparent 100%)',
                        right: -200,
                        top: '20%',
                        animation: 'float 20s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute h-[700px] w-[700px] rounded-full opacity-30 blur-[140px]"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(16,185,129,0.5) 0%, rgba(6,182,212,0.3) 50%, transparent 100%)',
                        left: -150,
                        bottom: '10%',
                        animation: 'float 25s ease-in-out infinite reverse',
                    }}
                />
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .glass-morph {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-morph-light {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(6,182,212,0.5);
        }
      `}</style>

            {/* Navigation - Ultra Web3 Style */}
            <nav className="fixed top-0 right-0 left-0 z-50">
                <div className="glass-morph absolute inset-0 border-b border-cyan-500/20" />
                <div className="relative mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Nav Menu */}
                        <div className="hidden items-center gap-2 md:flex">
                            {[
                                'Home',
                                'About',
                                'Skills',
                                'Projects',
                                'Contact',
                            ].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`group relative rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                                        activeSection === item.toLowerCase()
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {activeSection === item.toLowerCase() && (
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
                                    )}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 transition-opacity group-hover:opacity-100" />
                                    <span className="relative z-10">
                                        {item}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/uydapz"
                                className="glass-morph-light group flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110 hover:bg-cyan-500/20"
                            >
                                <Github className="h-5 w-5 transition-colors group-hover:text-cyan-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Epic Web3 Design dengan Foto */}
            <section
                id="home"
                className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20"
            >
                {/* Parallax Background */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.02}deg)`,
                            transition: 'transform 0.05s linear',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25V75L50 100L6.7 75V25L50 0z' fill='none' stroke='%2306b6d4' stroke-width='1'/%3E%3C/svg%3E")`,
                            backgroundSize: '100px 100px',
                        }}
                    />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-7xl">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left Content */}
                        <div
                            className="space-y-8"
                            style={{
                                transform: `translateX(${scrollY * -0.1}px) translateY(${scrollY * -0.15}px)`,
                                transition: 'transform 0.05s linear',
                            }}
                        >
                            {/* Status Badge */}
                            <div className="glass-morph inline-flex items-center gap-3 rounded-2xl border border-cyan-500/30 px-5 py-3">
                                <div className="relative">
                                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
                                    <div className="absolute inset-0 animate-ping rounded-full bg-green-400" />
                                </div>
                                <span className="text-sm font-bold text-gray-300">
                                    Available for Hire
                                </span>
                                <div className="h-4 w-px bg-gray-600" />
                                <span className="font-mono text-xs text-cyan-400">
                                    Remote Only
                                </span>
                            </div>

                            {/* Main Title */}
                            <div className="space-y-4">
                                <h1 className="text-6xl leading-tight font-black tracking-tighter md:text-6xl">
                                    <div className="mb-2">Website</div>
                                    <div className="relative inline-block">
                                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                            Developer
                                        </span>
                                        <div className="absolute -inset-2 -z-10 animate-pulse bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-2xl" />
                                    </div>
                                    <div className="mt-2">& Fullstack</div>
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="text-s max-w-xl leading-relaxed text-gray-400">
                                You were born and lived not{' '}
                                <span className="font-semibold text-cyan-400">
                                    for people who can't
                                </span>{' '}
                                accept you,{' '}
                                <span className="font-semibold text-purple-400"></span>
                                but you lived for
                                <span className="font-semibold text-emerald-400">
                                    {' '}
                                    people who can accept you.
                                </span>
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    {
                                        value: '6+',
                                        label: 'Years Exp',
                                        color: 'from-cyan-400 to-blue-500',
                                    },
                                    {
                                        value: '20+',
                                        label: 'Projects',
                                        color: 'from-purple-400 to-pink-500',
                                    },
                                    {
                                        value: 'Very good',
                                        label: 'Daily mood',
                                        color: 'from-emerald-400 to-teal-500',
                                    },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="glass-morph group cursor-pointer rounded-2xl border border-white/5 p-4 transition-all hover:border-cyan-500/30"
                                    >
                                        <div
                                            className={`bg-gradient-to-r text-3xl font-black ${stat.color} mb-1 bg-clip-text text-transparent transition-transform group-hover:scale-110`}
                                        >
                                            {stat.value}
                                        </div>
                                        <div className="text-xs font-medium text-gray-500">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#projects"
                                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
                                >
                                    <div className="absolute inset-0 -skew-x-12 transform bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity group-hover:opacity-20" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Projects
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </a>

                                <a
                                    href="#contact"
                                    className="glass-morph flex items-center gap-2 rounded-2xl border border-cyan-500/30 px-8 py-4 font-bold transition-all hover:scale-105 hover:border-cyan-500/60 hover:bg-white/10"
                                >
                                    <Mail className="h-5 w-5" />
                                    Get in Touch
                                </a>
                            </div>
                        </div>

                        {/* Right - 3D Avatar Card dengan FOTO */}
                        <div
                            className="relative"
                            style={{
                                transform: `translateX(${scrollY * 0.05}px) translateY(${scrollY * -0.08}px) scale(${Math.max(0.92, 1 - scrollY * 0.00015)})`,
                                opacity: Math.max(0.3, 1 - scrollY * 0.0006),
                                transition:
                                    'transform 0.06s linear, opacity 0.06s linear',
                            }}
                        >
                            {/* Glowing background effect */}
                            <div className="absolute -inset-4 animate-pulse rounded-[3rem] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur-3xl" />

                            {/* Main Card */}
                            <div className="glass-morph relative mx-auto max-w-sm overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.25)]">
                                {/* Photo Container */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black">
                                    <img
                                        src="/images/dapzProfile.jpeg"
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
                                        <div className="text-9xl font-black text-cyan-400/20">
                                            WD
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute top-10 right-10 h-4 w-4 animate-ping rounded-full bg-cyan-400 blur-sm" />
                                    <div
                                        className="absolute bottom-20 left-10 h-3 w-3 animate-ping rounded-full bg-purple-400 blur-sm"
                                        style={{ animationDelay: '1s' }}
                                    />

                                    {/* Info overlay at bottom */}
                                    <div className="absolute right-0 bottom-0 left-0 space-y-4 p-8">
                                        {/* Skills badges */}
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'Tailwind',
                                                'Laravel',
                                                'Golang',
                                                'React',
                                            ].map((skill, i) => (
                                                <span
                                                    key={`be-${i}`}
                                                    className="glass-morph rounded-xl border border-purple-500/30 px-3 py-1.5 text-xs font-bold backdrop-blur-xl"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Name & Title */}
                                        <div>
                                            <h3 className="mb-1 text-2xl font-black">
                                                Achmad Daffa S.F
                                            </h3>
                                            <p className="text-sm font-medium text-gray-400">
                                                Website Developer
                                            </p>
                                        </div>

                                        {/* Social Links */}

                                        <div className="flex gap-2">
                                            {socialsCard.map(
                                                ({ icon: Icon, link }, i) => (
                                                    <a
                                                        key={i}
                                                        href={link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="glass-morph-light group flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110 hover:bg-cyan-500/20"
                                                    >
                                                        <Icon className="h-5 w-5 transition-colors group-hover:text-cyan-400" />
                                                    </a>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Bar at bottom */}
                                <div className="grid grid-cols-3 divide-x divide-white/5 border-t border-white/5 bg-black/40 backdrop-blur-xl">
                                    {[
                                        {
                                            icon: Code,
                                            label: 'Commits',
                                            value: '200+',
                                        },
                                        {
                                            icon: Terminal,
                                            label: 'Coffee Cups',
                                            value: '∞',
                                        },
                                        {
                                            icon: Zap,
                                            label: 'Problems Solved',
                                            value: '200+',
                                        },
                                    ].map((stat, i) => {
                                        const Icon = stat.icon;
                                        return (
                                            <div
                                                key={i}
                                                className="group cursor-pointer p-4 text-center transition-all hover:bg-cyan-500/10"
                                            >
                                                <Icon className="mx-auto mb-2 h-5 w-5 text-cyan-400 transition-transform group-hover:scale-110" />
                                                <div className="text-lg font-black text-white">
                                                    {stat.value}
                                                </div>
                                                <div className="text-[10px] font-medium text-gray-500">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className="absolute bottom-8 left-1/2 z-10"
                    style={{
                        opacity: Math.max(0, 1 - scrollY * 0.005),
                        transform: `translateX(-50%) translateY(${scrollY * -0.5}px)`,
                        transition:
                            'opacity 0.05s linear, transform 0.05s linear',
                    }}
                >
                    <div className="flex animate-bounce flex-col items-center gap-2">
                        <span className="text-xs font-bold text-gray-500">
                            Scroll Down
                        </span>
                        <ChevronDown className="h-5 w-5 text-cyan-400" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="relative z-10 overflow-hidden px-6 py-32"
            >
                {/* Background Effects */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/5 blur-3xl" />
                    <div
                        className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/5 blur-3xl"
                        style={{ animationDelay: '2s' }}
                    />
                </div>

                <div className="relative mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <div className="glass-morph-light mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-2.5 shadow-lg shadow-cyan-500/20 backdrop-blur-xl">
                            <Zap className="h-4 w-4 animate-pulse text-cyan-400" />
                            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-sm font-semibold text-transparent">
                                Short Bio
                            </span>
                        </div>
                        <h2 className="mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-6xl font-black text-transparent md:text-7xl">
                            About Me
                        </h2>
                        <div className="mx-auto h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/50" />
                    </div>

                    {/* Video + Intro Grid */}
                    <div className="mb-8 grid items-start gap-8 md:grid-cols-2">
                        {/* Video */}
                        <div className="group relative sticky top-8 overflow-hidden rounded-3xl border border-cyan-500/20 p-1 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-blue-500/0 opacity-0 blur transition-all duration-500 group-hover:from-cyan-500/30 group-hover:via-purple-500/30 group-hover:to-blue-500/30 group-hover:opacity-100" />

                            <div className="glass-morph relative aspect-video w-full overflow-hidden rounded-3xl">
                                <video
                                    ref={videoRef}
                                    className="h-full w-full object-cover"
                                    src="/video/dapzVideo.mp4"
                                    muted
                                    playsInline
                                    autoPlay
                                    loop
                                />
                            </div>
                        </div>

                        {/* Intro + Journey Cards */}
                        <div className="space-y-6">
                            {/* Intro Card */}
                            <div className="group relative overflow-hidden rounded-3xl border border-white/10 p-1 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
                                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 opacity-0 blur transition-all duration-500 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 group-hover:opacity-100" />

                                <div className="relative rounded-3xl bg-gray-900/80 p-6 backdrop-blur-sm">
                                    <div className="mb-4 flex items-start gap-4">
                                        <div className="rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-3 shadow-lg shadow-cyan-500/30">
                                            <Sparkles className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-2 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-xl font-bold text-transparent">
                                                Origin Story
                                            </h3>
                                            <p className="leading-relaxed text-gray-300">
                                                2005 Juni tanggal 16, seseorang
                                                yang tidak mengerti apapun yang
                                                ada didunia ini. mencoba
                                                mengenali dunia, meskipun banyak
                                                diantara yang ia temui tidak
                                                sepaham dengan dia, namun
                                                semuanya sedang ia usahakan.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Development Journey */}
                            <div className="group/card relative overflow-hidden rounded-3xl border border-purple-500/20 p-1 transition-all duration-500 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10">
                                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 opacity-0 blur transition-all duration-500 group-hover/card:from-purple-500/20 group-hover/card:to-pink-500/20 group-hover/card:opacity-100" />

                                <div className="relative rounded-3xl bg-gray-900/80 p-6 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-full bg-purple-500/20 p-3 ring-2 ring-purple-400/30 transition-all group-hover/card:scale-110 group-hover/card:ring-purple-400/50">
                                            <Code2 className="h-6 w-6 text-purple-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="mb-2 text-lg font-bold text-purple-300">
                                                Development Journey
                                            </h4>
                                            <p className="text-sm leading-relaxed text-gray-300">
                                                Dari membuat deface page, hingga
                                                Ekosistem website. membuat
                                                marketplace, dan sedikit ngubah
                                                ide jadi kenyataan.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Current Focus */}
                            <div className="group/card relative overflow-hidden rounded-3xl border border-blue-500/20 p-1 transition-all duration-500 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
                                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 opacity-0 blur transition-all duration-500 group-hover/card:from-blue-500/20 group-hover/card:to-cyan-500/20 group-hover/card:opacity-100" />

                                <div className="relative rounded-3xl bg-gray-900/80 p-6 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-full bg-blue-500/20 p-3 ring-2 ring-blue-400/30 transition-all group-hover/card:scale-110 group-hover/card:ring-blue-400/50">
                                            <Rocket className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="mb-2 text-lg font-bold text-blue-300">
                                                Current Focus
                                            </h4>
                                            <p className="text-sm leading-relaxed text-gray-300">
                                                Eksplorasi syntax ga cuma
                                                berhenti disitu. tapi bangun
                                                solusi Next Website Generation
                                                yang aman, scalable, dan
                                                inovatif.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Timeline - Separated Section */}
                    <div className="mt-16">
                        <div className="mb-8 text-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 px-6 py-2.5 backdrop-blur-xl">
                                <BookOpen className="h-4 w-4 text-emerald-400" />
                                <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-sm font-semibold text-transparent">
                                    Educational Journey
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 p-1 transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-emerald-500/0 to-blue-500/0 opacity-0 blur transition-all duration-500 group-hover:from-cyan-500/20 group-hover:via-emerald-500/20 group-hover:to-blue-500/20 group-hover:opacity-100" />

                            <div className="relative rounded-3xl bg-gray-900/90 p-8 backdrop-blur-sm md:p-10">
                                {/* Timeline */}
                                <div className="relative">
                                    {/* Vertical line */}
                                    <div className="absolute top-8 bottom-8 left-6 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 via-purple-400 to-yellow-400 opacity-30" />

                                    <div className="space-y-8">
                                        {/* SD */}
                                        <div className="relative pl-16">
                                            <div className="absolute top-0 left-0 flex items-center justify-center">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 ring-4 ring-cyan-400/20 backdrop-blur-sm">
                                                    <GraduationCap className="h-5 w-5 text-cyan-400" />
                                                </div>
                                            </div>
                                            <div className="rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10">
                                                <div className="mb-2 flex items-center gap-3">
                                                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-400">
                                                        SD
                                                    </span>
                                                    <h4 className="font-bold text-cyan-300">
                                                        Sekolah Dasar
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-gray-400">
                                                    SDIT Mutiara hati, SDN
                                                    Sawojajar 1, MI Blangbladeh,
                                                    SDI Baitul Makmur
                                                </p>
                                            </div>
                                        </div>

                                        {/* SMP */}
                                        <div className="relative pl-16">
                                            <div className="absolute top-0 left-0 flex items-center justify-center">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 ring-4 ring-purple-400/20 backdrop-blur-sm">
                                                    <GraduationCap className="h-5 w-5 text-purple-400" />
                                                </div>
                                            </div>
                                            <div className="rounded-2xl border border-purple-400/10 bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
                                                <div className="mb-2 flex items-center gap-3">
                                                    <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-400">
                                                        SMP
                                                    </span>
                                                    <h4 className="font-bold text-purple-300">
                                                        Sekolah Menengah Pertama
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-gray-400">
                                                    PP. Darullughah Wadda'wah,
                                                    SMPI Baitul Makmur, SMPN 22
                                                </p>
                                            </div>
                                        </div>

                                        {/* SMA */}
                                        <div className="relative pl-16">
                                            <div className="absolute top-0 left-0 flex items-center justify-center">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 ring-4 ring-emerald-400/20 backdrop-blur-sm">
                                                    <GraduationCap className="h-5 w-5 text-emerald-400" />
                                                </div>
                                            </div>
                                            <div className="rounded-2xl border border-emerald-400/10 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10">
                                                <div className="mb-2 flex items-center gap-3">
                                                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                                                        SMA
                                                    </span>
                                                    <h4 className="font-bold text-emerald-300">
                                                        Sekolah Menengah Atas
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-gray-400">
                                                    PPSQ & SMKIT Asy-syadzili 1
                                                    (Malang)
                                                </p>
                                            </div>
                                        </div>

                                        {/* Universitas */}
                                        <div className="relative pl-16">
                                            <div className="absolute top-0 left-0 flex items-center justify-center">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 ring-4 ring-yellow-400/20 backdrop-blur-sm">
                                                    <GraduationCap className="h-5 w-5 text-yellow-400" />
                                                </div>
                                            </div>
                                            <div className="rounded-2xl border border-yellow-400/10 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-500/10">
                                                <div className="mb-2 flex items-center gap-3">
                                                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-bold text-yellow-400">
                                                        Universitas
                                                    </span>
                                                    <h4 className="font-bold text-yellow-300">
                                                        Pendidikan Tinggi
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-gray-400">
                                                    Universitas Gajayana -
                                                    Sistem Informasi
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="relative z-10 overflow-hidden px-6 py-32"
            >
                {/* Complex animated background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-48 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-cyan-500/10 blur-3xl" />
                    <div className="absolute -right-48 bottom-1/4 h-96 w-96 animate-[float_10s_ease-in-out_infinite_2s] rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite] rounded-full bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 blur-2xl" />
                </div>

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-20 text-center">
                        <div className="glass-morph-light mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-2.5 shadow-lg shadow-cyan-500/20 backdrop-blur-xl">
                            <Code className="h-4 w-4 animate-pulse text-cyan-400" />
                            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-sm font-semibold text-transparent">
                                Skill
                            </span>
                        </div>
                        <h2 className="mb-6 animate-[fadeInUp_0.8s_ease-out] bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-6xl leading-tight font-black text-transparent md:text-7xl">
                            Core Expertise
                        </h2>
                        <div className="mx-auto h-1.5 w-32 animate-[shimmer_3s_infinite] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/50" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative animate-[fadeInUp_0.6s_ease-out_backwards] overflow-hidden rounded-3xl border border-white/5 p-1 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.05] hover:shadow-2xl hover:shadow-cyan-500/30"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Gradient border glow */}
                                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 opacity-0 blur transition-all duration-500 group-hover:from-cyan-500/50 group-hover:via-blue-500/50 group-hover:to-purple-500/50 group-hover:opacity-100" />

                                {/* Inner card */}
                                <div className="relative rounded-3xl bg-gray-900/90 p-6 backdrop-blur-sm">
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 transition-all duration-500 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10" />

                                    {/* Corner accents */}
                                    <div className="absolute top-0 left-0 h-12 w-12 rounded-tl-3xl border-t-2 border-l-2 border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/50" />
                                    <div className="absolute right-0 bottom-0 h-12 w-12 rounded-br-3xl border-r-2 border-b-2 border-blue-400/0 transition-all duration-500 group-hover:border-blue-400/50" />

                                    <div className="relative z-10">
                                        <div className="mb-4 flex items-center justify-between font-semibold">
                                            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-lg text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:to-blue-300">
                                                {skill.name}
                                            </span>
                                            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-bold text-cyan-400 ring-1 ring-cyan-400/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:ring-cyan-400/50">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Enhanced progress bar */}
                                        <div className="relative h-3.5 w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-black/50 to-gray-900/50 shadow-inner backdrop-blur-sm">
                                            {/* Background track glow */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />

                                            <div
                                                className={`h-full bg-gradient-to-r ${skill.color} relative overflow-hidden shadow-lg transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: `${skill.level}%`,
                                                }}
                                            >
                                                {/* Animated shimmer effect */}
                                                <div
                                                    className="absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                                    style={{
                                                        backgroundSize:
                                                            '200% 100%',
                                                    }}
                                                />

                                                {/* Pulsing glow at the end */}
                                                <div className="absolute top-0 right-0 bottom-0 w-2 animate-pulse bg-white/90 blur-sm" />

                                                {/* Inner highlight */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes shimmer {
                        0% {
                            background-position: -200% 0;
                        }
                        100% {
                            background-position: 200% 0;
                        }
                    }
                    @keyframes float {
                        0%,
                        100% {
                            transform: translateY(0px) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-20px) rotate(5deg);
                        }
                    }
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="relative z-10 overflow-hidden py-32"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-20">
                        <div className="glass-morph-light mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
                            <Box className="h-4 w-4 text-cyan-400" />
                            <span className="text-sm font-medium text-gray-400">
                                Portfolio
                            </span>
                        </div>
                        <h2 className="mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-6xl font-black text-transparent md:text-7xl">
                            Success Project
                        </h2>
                        <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto overflow-y-hidden pb-8"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <style>{`
              section#projects .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
                        <div className="flex w-max gap-6 px-6">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group relative flex-shrink-0 cursor-pointer"
                                    style={{ width: '340px' }}
                                >
                                    {/* Glow effect background */}
                                    <div
                                        className={`absolute -inset-0.5 bg-gradient-to-r ${project.color.replace('/30', '')} rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100`}
                                    />

                                    {/* Card */}
                                    <div className="glass-morph relative overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-cyan-500/50">
                                        <div
                                            className={`h-40 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}
                                        >
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    backgroundImage:
                                                        'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)',
                                                }}
                                            />

                                            {project.urlImg && (
                                                <img
                                                    src={project.urlImg}
                                                    alt={project.title}
                                                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                                                />
                                            )}

                                            <Box className="relative z-10 h-16 w-16 text-white/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-3 flex items-start justify-between">
                                                <h3 className="text-xl font-bold transition-colors group-hover:text-cyan-400">
                                                    {project.title}
                                                </h3>
                                                <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                                            </div>

                                            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-400">
                                                {project.description}
                                            </p>

                                            <div className="mb-4 flex flex-wrap gap-1.5">
                                                {project.tech
                                                    .slice(0, 3)
                                                    .map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-medium text-gray-400"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                {project.tech.length > 3 && (
                                                    <span className="px-2 py-1 text-[10px] font-medium text-cyan-400">
                                                        +
                                                        {project.tech.length -
                                                            3}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                                <button className="flex items-center gap-2 text-xs font-semibold text-cyan-400 transition-all group-hover:gap-3">
                                                    View
                                                    <ArrowRight className="h-3 w-3" />
                                                </button>
                                                <ExternalLink className="h-4 w-4 text-gray-600 transition-colors group-hover:text-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Hint */}
                    <div className="mt-6 flex justify-center gap-2 px-6">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <ArrowRight className="h-3 w-3 rotate-180" />
                            <span>Scroll horizontally</span>
                            <ArrowRight className="h-3 w-3" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 px-6 py-12">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex items-center gap-4">
                            <div className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
                                <div className="absolute inset-0 -skew-x-12 transform bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity group-hover:opacity-30" />
                                <Terminal className="relative z-10 h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
                                    Dapzverse
                                </span>
                                <div className="text-xs text-gray-500">
                                    Website Developer
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500">
                            © 2026 Website Developer. Powered by{' '}
                            <span className="text-cyan-400">Inertia.js</span>.
                        </p>

                        <div className="flex gap-3 text-sm">
                            <a
                                href="#"
                                className="text-gray-500 transition-colors hover:text-cyan-400"
                            >
                                Privacy
                            </a>
                            <span className="text-gray-700">•</span>
                            <a
                                href="#"
                                className="text-gray-500 transition-colors hover:text-cyan-400"
                            >
                                Terms
                            </a>
                            <span className="text-gray-700">•</span>
                            <a
                                href="#"
                                className="text-gray-500 transition-colors hover:text-cyan-400"
                            >
                                Docs
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to top */}
            {scrollY > 500 && (
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    className="group fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-110 hover:shadow-[0_0_50px_rgba(6,182,212,0.8)]"
                >
                    <ChevronDown className="h-7 w-7 rotate-180 transition-transform group-hover:-translate-y-1" />
                </button>
            )}
        </div>
    );
}
