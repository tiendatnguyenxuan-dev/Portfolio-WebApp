"use client"

import { motion } from "motion/react"
import { CONTACT_DATA } from "@/constants/contact"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Send, Copy, Check } from "lucide-react"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { submitContactForm } from "@/actions/contact"
import { useTransition } from "react"
import { toast } from "react-toastify"

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(1),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactSection() {
    const [isPending, startTransition] = useTransition()
    
    const { control, handleSubmit, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    })

    const onSubmit = (data: ContactFormValues) => {
        startTransition(async () => {
            const result = await submitContactForm(data)
            if (result.success) {
                toast.success("Email sent successfully!")
                reset()
            } else {
                toast.error(result.message)
            }
        })
    }



    return (
        <section id="contact" className="container mx-auto px-4 md:px-8 relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left Column: Sticky Title */}
                <div className="lg:col-span-4 lg:relative order-1">
                    <div className="lg:sticky lg:top-32 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                                Get In <br /> <span className="text-primary">Touch.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xs">
                                {CONTACT_DATA.description}
                            </p>
                            
                            {/* Contact Details Mini List */}
                            <div className="space-y-4">
                                {CONTACT_DATA.details.map((detail, index) => (
                                    <a 
                                        key={index}
                                        href={detail.href}
                                        className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                                    >
                                        <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                                            <detail.icon className="size-5" />
                                        </div>
                                        <span className="font-medium">{detail.value}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-8 order-2 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-heading text-3xl font-bold text-foreground flex items-center gap-3 mb-8">
                            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-1">
                                05. What&apos;s Next?
                            </span>
                        </h2>

                        <Card variant="glass" className="overflow-hidden border-primary/20 shadow-2xl shadow-primary/5">
                            <CardContent className="p-6 md:p-10">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Controller
                                            control={control}
                                            name="name"
                                            render={({ field, fieldState }) => (
                                                <Field>
                                                    <FieldLabel htmlFor="name">Name</FieldLabel>
                                                    <Input 
                                                        id="name" 
                                                        placeholder="John Doe" 
                                                        className="bg-background/50 border-input/50 focus:border-primary/50 transition-colors" 
                                                        {...field} 
                                                    />
                                                    <FieldError errors={[fieldState.error]} />
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name="email"
                                            render={({ field, fieldState }) => (
                                                <Field>
                                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                                    <Input 
                                                        id="email" 
                                                        type="email" 
                                                        placeholder="john@example.com" 
                                                        className="bg-background/50 border-input/50 focus:border-primary/50 transition-colors" 
                                                        {...field} 
                                                    />
                                                    <FieldError errors={[fieldState.error]} />
                                                </Field>
                                            )}
                                        />
                                    </div>
                                    <Controller
                                        control={control}
                                        name="subject"
                                        render={({ field, fieldState }) => (
                                            <Field>
                                                <FieldLabel htmlFor="subject">Subject</FieldLabel>
                                                <Input 
                                                    id="subject" 
                                                    placeholder="Project Inquiry" 
                                                    className="bg-background/50 border-input/50 focus:border-primary/50 transition-colors" 
                                                    {...field} 
                                                />
                                                <FieldError errors={[fieldState.error]} />
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name="message"
                                        render={({ field, fieldState }) => (
                                            <Field>
                                                <FieldLabel htmlFor="message">Message</FieldLabel>
                                                <Textarea 
                                                    id="message" 
                                                    placeholder="Tell me about your project..." 
                                                    className="min-h-[150px] bg-background/50 border-input/50 focus:border-primary/50 transition-colors resize-none" 
                                                    {...field} 
                                                />
                                                <FieldError errors={[fieldState.error]} />
                                            </Field>
                                        )}
                                    />

                                    <div className="pt-4">
                                        <Button type="submit" size="lg" className="w-full rounded-full text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40" disabled={isPending}>
                                            {isPending ? "Sending..." : "Send Message"} <Send className="ml-2 size-4" />
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
