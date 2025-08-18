import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

const Header = () => {
  return (
    <header className='w-full border-b bg-white'>
      <div className='w-full max-w-7xl mx-auto px-5 md:px-10 py-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <Image
                priority={true}
                src='/images/logo.svg'
                width={48}
                height={48}
                alt={`${APP_NAME} logo`}
              />
              <span className='hidden lg:block font-bold text-2xl ml-3'>
                {APP_NAME}
              </span>
            </Link>
          </div>
          <div className='flex items-center space-x-2'>
            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <ShoppingCart />
                Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href='/sign-in'>
                <UserIcon />
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;