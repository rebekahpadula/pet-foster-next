'use-client'; // for client side rendering

import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Favorites', href: '/favorites' }
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