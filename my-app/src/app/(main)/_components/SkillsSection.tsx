"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { SKILLS_DATA } from "@/constants/skill"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
    return (
        <section id="skills" className="container mx-auto px-4 md:px-8 relative z-10 min-h-screen flex flex-col justify-center pt-35 md:pt-24 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left Column: Skills Grid */}
                <div className="lg:col-span-8 order-2 lg:order-1 space-y-20 md:space-y-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="font-heading text-3xl font-bold text-foreground flex items-center gap-3 mb-8">
                            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-1">02. Tech Stack</span>
                        </h2>

                        <div className="grid grid-cols-1 gap-6">
                            {SKILLS_DATA.categories.map((skill, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="h-full"
                                >
                                    <Card variant="glass" className="h-full">
                                        <CardContent className="px-6 md:px-8 flex flex-col h-full justify-center">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                                    <skill.icon className={`size-6 ${skill.iconClass}`} />
                                                </div>
                                                <h3 className="font-heading text-xl font-bold">{skill.category}</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {skill.items.map((item) => (
                                                    <Badge 
                                                        key={item} 
                                                        variant="glass"
                                                        className="px-4 py-1.5 text-sm cursor-default"
                                                    >
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Sticky Title */}
                <div className="lg:col-span-4 lg:relative order-1 lg:order-2">
                    <div className="lg:sticky lg:top-32 space-y-8 text-right">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                                Technical <br /> <span className="text-primary">Skills.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed ml-auto max-w-xs">
                                {SKILLS_DATA.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
