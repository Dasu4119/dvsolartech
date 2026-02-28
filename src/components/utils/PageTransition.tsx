import React from 'react';
import { useLocation } from 'react-router-dom';

export function PageTransition({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    return (
        <div key={location.pathname} className="page-transition">
            {children}
        </div>
    );
}
