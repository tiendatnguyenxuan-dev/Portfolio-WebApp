"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { PROJECTS_DATA } from "@/constants/project"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectsSection() {
    return (
        <section id="projects" className="container mx-auto px-4 md:px-8 relative z-10 min-h-screen flex flex-col justify-center pt-33 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left Column: Sticky Title */}
                <div className="lg:col-span-4 lg:relative">
                    <div className="lg:sticky lg:top-32 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                                Featured <br /> <span className="text-primary">Projects.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xs">
                                {PROJECTS_DATA.description}
                            </p>
                            <Button variant="outline" className="rounded-full group hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all font-medium" asChild>
                                <Link href="https://github.com" target="_blank">
                                    View Github <SiGithub className="ml-2 size-4 group-hover:rotate-12 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Projects Grid */}
                <div className="lg:col-span-8 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="font-heading text-3xl font-bold text-foreground flex items-center gap-3">
                            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-1">03. My Works</span>
                        </h2>
                    </motion.div>

                    {PROJECTS_DATA.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card variant="glass" className="hover:border-primary/50 transition-colors w-full">
                                <CardContent className="grid md:grid-cols-2 gap-6">
                                    {/* Project Image Placeholder */}
                                    <div className={`rounded-xl overflow-hidden aspect-video md:aspect-square lg:aspect-video ${project.image} relative group-hover:scale-[1.02] transition-transform duration-500`}>
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-2xl">
                                            PROJECT PREVIEW
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-heading text-2xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="px-3 py-1">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 mt-auto">
                                            <Link 
                                                href={project.links.demo} 
                                                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="size-4" /> Live Demo
                                            </Link>
                                            <Link 
                                                href={project.links.github}
                                                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                                            >
                                                <SiGithub className="size-4" /> Code
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
