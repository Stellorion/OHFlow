'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {

  return (
    <Link
      href={href}
      className="relative group"
    >
      {children}

      <span
        className={`hidden lg:block absolute bottom-0 left-0 h-0.5 rounded-3xl transition-all duration-300 ease-in-out w-0 bg-border group-hover:w-full group-hover:bg-foreground`}
      />
    </Link>
  );
};

export default NavLink;