'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background selection:bg-primary/20">
            {/* 1. Technical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* 2. Ambient Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2 }}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/20 blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-chart-4/10 blur-[100px]"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                    
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
                        Available for work
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                    >
                        Build things for <br className="hidden md:block" />
                        <span className="bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                            the
                        </span>{" "}
                        <span className="bg-linear-to-r from-primary via-chart-4 to-primary bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                            Future Web
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
                    >
                        Hey, I'm <span className="text-foreground font-semibold">Anh Khoa</span>. A Fullstack Developer crafting reliable, high-performance web applications with modern technologies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-5"
                    >
                        <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105" asChild>
                            <Link href="#projects">
                                View Projects
                                <ArrowDown className="ml-2 size-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all" asChild>
                            <Link href="#contact">
                                Contact Me
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Tech Stacks / Socials minimal */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-20 pt-10 border-t border-border/50 flex flex-col md:flex-row items-center gap-6 md:gap-12 text-muted-foreground"
                    >
                        <span className="text-sm font-medium uppercase tracking-wider opacity-70">Connect with me</span>
                        <div className="flex gap-6">
                            <Link href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
                                <SiGithub className="size-6" />
                            </Link>
                            <Link href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                                <Mail className="size-6" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
