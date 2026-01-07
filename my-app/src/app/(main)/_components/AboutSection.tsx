"use client"

import { motion } from "motion/react"
import { ABOUT_DATA } from "@/constants/about"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
    return (
    <section id="about" className="container mx-auto px-4 md:px-8 relative z-10 min-h-screen flex flex-col justify-center pt-35 md:pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 lg:relative">
                <div className="lg:sticky lg:top-32 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
                            About <br /> <span className="text-primary">Me.</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {ABOUT_DATA.intro}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right Column: Bio Content */}
            <div className="lg:col-span-8 space-y-20 md:space-y-32">
                <div className="space-y-8 pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="prose prose-lg dark:prose-invert"
                    >
                        <h2 className="font-heading text-3xl font-bold text-foreground flex items-center gap-3 mb-8">
                            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-1">01. The Story</span>
                        </h2>

                        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 aspect-3/4 rounded-2xl bg-muted/30 border border-border/50 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                <span className="text-muted-foreground/50 text-sm font-medium uppercase tracking-widest">{ABOUT_DATA.story.imagePlaceholder}</span>
                            </div>

                            {/* Bio Text */}
                            <div className="flex-1 space-y-6">
                                {ABOUT_DATA.story.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {ABOUT_DATA.cards.map((card, index) => (
                                <Card key={index} variant="glass" className="hover:border-primary/50">
                                    <CardContent>
                                        <card.icon className={`size-8 mb-4 ${card.iconColor}`} />
                                        <h3 className="font-heading font-bold text-lg mb-2">{card.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {card.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
    )
}
