'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuCheckboxItem, DropdownMenuSeparator, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
                { theme === "system" ? <SunMoon /> : theme === "dark" ? <MoonIcon /> : <SunIcon /> }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem onClick={() => setTheme("system")} checked={theme === "system"}>System</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => setTheme("dark")} checked={theme === "dark"}>Dark</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => setTheme("light")} checked={theme === "light"}>Light</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
}

export default ModeToggle;