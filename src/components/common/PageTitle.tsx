'use client';

import Link from 'next/link';

interface PageTitleProps {
  title: string;
  description?: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
}

const PageTitle = ({ title, description, breadcrumbs }: PageTitleProps) => {
  return (
    <div className="page-title dark-background" style={{ backgroundImage: 'url(/assets/img/education/showcase-1.webp)' }}>
      <div className="container position-relative">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {breadcrumbs && (
          <nav className="breadcrumbs">
            <ol>
              {breadcrumbs.map((crumb, index) => (
                <li key={index}>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="current">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageTitle; 