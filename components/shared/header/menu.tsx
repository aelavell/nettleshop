import { Button } from "@/components/ui/button";
import { EllipsisVertical, Link, ShoppingCart, UserIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
  } from "@/components/ui/sheet"


const Menu = () => {
    return (
        <>
            <nav className="hidden md:flex items-center gap-3">
                <ModeToggle />
                <Button variant='ghost' className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart</span>
                </Button>
                <Button className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                <span>Sign In</span>
                </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start gap-4">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle />
                        <Button variant="ghost" className="flex items-center gap-2 w-full justify-start">
                            <ShoppingCart className="w-4 h-4" />
                            <span>Cart</span>
                        </Button>
                        <Button className="flex items-center gap-2 w-full justify-start">
                            <UserIcon className="w-4 h-4" />
                            <span>Sign In</span>
                        </Button>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    );
}

export default Menu;