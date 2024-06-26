'use client'; // for client side rendering

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Favorites', href: '/dashboard/favorites' },
    { name: 'Pet Details', href: '/dashboard/pet-details' }, // can be accessed from clicking on a pet on the search results page, or by clikcing on a pet from your favorites page
    { name: 'Pet Search', href: '/dashboard/pet-search' }
];

export default function NavLinks() {
    
    const pathname = usePathname();

    return (
        <>
            <div className="app-header">
                <h1>Pet Foster Next</h1>
            </div>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                    {link.name}
                    </Link>
                )
            })}
        </>
    );
}