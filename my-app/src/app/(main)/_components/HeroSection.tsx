'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import { HERO_DATA } from '@/constants/hero'

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden selection:bg-primary/20 pt-20 lg:pt-0">
            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-8 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {HERO_DATA.badge}
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6"
                        >
                            {HERO_DATA.headline.prefix} <span className="text-foreground">{HERO_DATA.headline.highlight}</span> <br />
                            <span className="bg-linear-to-r from-primary via-chart-4 to-primary bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                                {HERO_DATA.headline.suffix}
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-sans mx-auto lg:mx-0"
                        >
                            {HERO_DATA.bio.greeting} <span className="text-foreground font-semibold">{HERO_DATA.bio.name}</span>. {HERO_DATA.bio.description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full justify-center lg:justify-start"
                        >
                            <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105" asChild>
                                <Link href={HERO_DATA.links.projects}>
                                    View My Work
                                    <ArrowDown className="ml-2 size-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all" asChild>
                                <Link href={HERO_DATA.links.contact}>
                                    Contact Me
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-6 text-muted-foreground w-full justify-center lg:justify-start"
                        >
                            <Link href={HERO_DATA.links.github} target="_blank" className="hover:text-primary transition-colors no-underline">
                                <SiGithub className="size-6" />
                            </Link>
                            <Link href={HERO_DATA.links.email} className="hover:text-primary transition-colors no-underline">
                                <Mail className="size-6" />
                            </Link>
                            <div className="h-px w-12 bg-border"></div>
                            <span className="text-sm font-medium uppercase tracking-wider opacity-70">Socials</span>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Content */}
                    <div className="relative hidden lg:block">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                             {/* Floating Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                            
                            {/* Simple Code Card Visual */}
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-2xl bg-card border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden flex flex-col">
                                     {/* Fake Browser Header */}
                                    <div className="h-10 bg-muted/50 border-b border-border/50 flex items-center px-4 gap-2">
                                        <div className="size-3 rounded-full bg-red-500/80" />
                                        <div className="size-3 rounded-full bg-yellow-500/80" />
                                        <div className="size-3 rounded-full bg-green-500/80" />
                                    </div>
                                     {/* Code Content */}
                                    <div className="p-6 font-mono text-sm leading-relaxed text-muted-foreground flex-1">
                                        <p><span className="token-keyword">const</span> <span className="token-variable">{HERO_DATA.codeSnippet.variable}</span> <span className="text-foreground">=</span> <span className="token-punct">&#123;</span></p>
                                        <p className="pl-4">name: <span className="token-string">&apos;{HERO_DATA.codeSnippet.data.name}&apos;</span>,</p>
                                        <p className="pl-4">role: <span className="token-string">&apos;{HERO_DATA.codeSnippet.data.role}&apos;</span>,</p>
                                        <p className="pl-4">skills: <span className="token-punct">[</span></p>
                                        {HERO_DATA.codeSnippet.data.skills.map((skill, index) => (
                                            <p key={index} className="pl-8"><span className="token-string">&apos;{skill}&apos;</span>{index < HERO_DATA.codeSnippet.data.skills.length - 1 ? "," : ""}</p>
                                        ))}
                                        <p className="pl-4"><span className="token-punct">]</span>,</p>
                                        <p className="pl-4">status: <span className="token-string">&apos;{HERO_DATA.codeSnippet.data.status}&apos;</span></p>
                                        <p><span className="token-punct">&#125;;</span></p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
