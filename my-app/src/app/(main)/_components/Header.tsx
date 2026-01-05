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
                    boxShadow: isScroll 
                        ? "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset" 
                        : "none",
                }}
                style={{
                    position: "fixed",
                    left: "50%",
                    x: "-50%",
                    zIndex: 50,
                    width: "auto",
                    maxWidth: isScroll ? "min(95%, 1400px)" : "100%",
                    minWidth: isScroll ? "min(92%, 1000px)" : "100%",
                }}
                transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1] 
                }}
                className={cn(
                    "flex items-center justify-between py-3 md:py-4",
                    isScroll ? "px-6 md:px-10 gap-6 md:gap-10" : "px-4 md:px-8 gap-4",
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
