import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Breadcrumb {
  label: string;
  href?: string;
  active?: boolean;
}

interface PageHeaderProps {
  title: string;
  backgroundImage: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader = ({ title, backgroundImage, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="relative py-24 mb-12 overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center py-12">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-slideDown">
          {title}
        </h1>
        <nav className="flex justify-center">
          <ol className="flex items-center space-x-2 bg-white/90 px-6 py-2 rounded-full shadow-lg font-bold text-primary">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-secondary transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-secondary">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <i className="fa fa-chevron-right mx-2 text-[10px] opacity-50"></i>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
