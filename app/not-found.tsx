'use client';

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
    return <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src='/images/logo.svg' width={48} height={48} alt={APP_NAME} priority={true}/>
        <div className="p-6 w-1/3 text-center rounded shadow-md">
            <h1 className="text-2xl font-bold">404 Not Found</h1>
            <p className="text-destructive">The page you are looking for does not exist.</p>
            <Button variant="outline" className="mt-4 ml-2" onClick={() => window.location.href = '/'}>Back to Home</Button>
        </div>
    </div>
}

export default NotFoundPage;