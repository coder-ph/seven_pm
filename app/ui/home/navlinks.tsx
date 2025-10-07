"use client"
import {
  HomeIcon,
  InformationCircleIcon,
  PhoneArrowDownLeftIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '../fonts';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Homepage', href: '/', icon: HomeIcon },
  { name: 'Info', href: '/Info', icon: InformationCircleIcon },
  { name: 'Contact us', href: '/', icon: PhoneArrowDownLeftIcon },
  { name: 'Class sessions', href: '/class-sessions', icon: VideoCameraIcon },
];

export default function Navlinks() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-12 w-full">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `${lusitana.className} flex flex-col items-center justify-center 
               w-[72px] h-[72px] 
               rounded-md text-sm font-medium text-white 
               hover:bg-sky-100 hover:text-blue-600 group transition-colors duration-200`,
              {
                ' text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6 h-6 group-hover:text-black" />
            <p className="hidden md:block text-xs mt-1 group-hover:text-black">
              {link.name}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}