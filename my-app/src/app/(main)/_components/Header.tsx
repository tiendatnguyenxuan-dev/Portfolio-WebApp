"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { cn, formatDate, formatTime } from "@/lib/utils"
import NavMenu from "./NavigationMenu"
import Logo from "./Logo"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    const [isScroll, setIsScroll] = useState(false)
    const [currentTime, setCurrentTime] = useState<Date>(new Date())

    const { scrollY } = useScroll()
    const isMobile = useIsMobile()

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScroll) {
            setIsScroll(true)
        } else if (latest <= 50 && isScroll) {
            setIsScroll(false)
        }
    })

    return (
        <>
            <motion.header
                animate={{
                    backgroundColor: isScroll ? "var(--glass-bg)" : "var(--glass-bg-transparent)",
                    backdropFilter: isScroll ? "blur(20px)" : "blur(0px)",
                    borderColor: isScroll ? "var(--glass-border)" : "var(--glass-border-transparent)",
                    borderRadius: isScroll ? "9999px" : "0px",
                    top: isScroll ? "0.75rem" : "0rem",
                    maxWidth: isScroll ? "min(95%, 1200px)" : "100%",
                    paddingLeft: isScroll 
                        ? (isMobile ? "1.5rem" : "2.5rem") 
                        : (isMobile ? "1rem" : "2rem"),
                    paddingRight: isScroll 
                        ? (isMobile ? "1.5rem" : "2.5rem") 
                        : (isMobile ? "1rem" : "2rem"),
                    boxShadow: isScroll 
                        ? "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset" 
                        : "none",
                }}
                style={{
                    position: "fixed",
                    left: "50%",
                    x: "-50%",
                    zIndex: 50,
                    width: "100%",
                }}
                transition={{ 
                    duration: 0.5, 
                    ease: [0.32, 0.72, 0, 1], // Fluid spring-like bezier
                }}
                className={cn(
                    "flex items-center justify-between py-3 md:py-4 gap-4 md:gap-8",
                    !isScroll && "border-transparent"
                )}
            >
                {/* Left - DateTime (hidden on mobile/tablet) */}
                <div className="flex-1 hidden lg:flex">
                    <div className="flex flex-col text-xs md:text-sm font-mono whitespace-nowrap">
                        <span className="font-medium">{formatTime(currentTime)}</span>
                        <span className="text-[10px] md:text-xs">{formatDate(currentTime)}</span>
                    </div>
                </div>

                {/* Center - Logo/Title */}
                <div className="lg:flex-1 flex justify-center font-heading">
                    <Logo />
                </div>

                {/* Right - Navigation (Desktop) or Menu Button (Mobile) */}
                <div className="flex-1 flex justify-end">
                    {isMobile ? (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button 
                                    variant="ghost" 
                                    size="icon"
                                    className="rounded-xl"
                                    aria-label="Open menu"
                                >
                                    <Menu size={20} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[280px]">
                                <SheetHeader>
                                    <SheetTitle className="font-heading">
                                        <Logo />
                                    </SheetTitle>
                                </SheetHeader>
                                <div>
                                    <NavMenu />
                                </div>
                            </SheetContent>
                        </Sheet>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <NavMenu />
                        </motion.div>
                    )}
                </div>
            </motion.header>

        </>
    )
}
