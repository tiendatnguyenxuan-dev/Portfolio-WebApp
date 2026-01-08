"use client"

import { motion } from "motion/react"
import { SERVICES_DATA } from "@/constants/service"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
    return (
        <section id="services" className="container mx-auto px-4 md:px-8 relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                                {/* Left Column: Services Grid */}
                <div className="lg:col-span-8 space-y-12 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="font-heading text-3xl font-bold text-foreground flex items-center gap-3 mb-8">
                            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-1">
                                04. What I Do.
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {SERVICES_DATA.services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="h-full"
                                >
                                    <Card variant="glass" className="h-full group hover:border-primary/50 transition-all">
                                        <CardContent className="p-6 md:p-8 flex flex-col h-full">
                                            <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                                                <service.icon className="size-6" />
                                            </div>
                                            
                                            <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                                                {service.description}
                                            </p>

                                            <div className="space-y-2">
                                                {service.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                                                        <div className="size-1.5 rounded-full bg-primary" />
                                                        {feature}
                                                    </div>
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
                <div className="lg:col-span-4 lg:relative order-first lg:order-2">
                    <div className="lg:sticky lg:top-32 space-y-8 text-right">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">
                                My <br /> <span className="text-primary">Services.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed ml-auto max-w-xs">
                                {SERVICES_DATA.description}
                            </p>    
                        </motion.div>
                    </div>
                </div>


            </div>
        </section>
    )
}
