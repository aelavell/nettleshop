import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = () => {
  return (
    <header className='w-full border-b bg-background border-border'>
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
              <span className='hidden lg:block font-bold text-2xl ml-3 text-foreground'>
                {APP_NAME}
              </span>
            </Link>
          </div>
          <Menu />            
        </div>
      </div>
    </header>
  );
};

export default Header;