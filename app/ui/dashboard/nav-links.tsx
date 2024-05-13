'use-client'; // for client side rendering

import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Favorites', href: '/dashboard/favorites' },
    { name: 'Pet Details', href: 'dashboard/pet-details'} // can be accessed from clicking on a pet on the search results page, or by clikcing on a pet from your favorites page
];

export default function NavLinks() {
    
    // const pathName = usePathname();

    return (
        <>
            {links.map((link) => {
                // const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        // className={}
                    >
                    {link.name}
                    </Link>
                )
            })}
        </>
    );
}