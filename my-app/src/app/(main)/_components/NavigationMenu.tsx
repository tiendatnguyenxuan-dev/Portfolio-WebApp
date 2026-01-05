'use client'

import { NavigationMenu, NavigationMenuList, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { NAV_ITEMS } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function NavMenu() {
    return (
        <NavigationMenu className="flex-col md:flex-row items-start md:items-center w-full md:w-auto">
            {NAV_ITEMS.map((item, index) => (
                <NavigationMenuList key={index}>
                    <NavigationMenuLink asChild className={cn(
                        navigationMenuTriggerStyle(),
                    )}>
                        <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            ))}
        </NavigationMenu>
    )
}

    

