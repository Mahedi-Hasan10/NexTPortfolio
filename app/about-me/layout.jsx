import AboutAside from '@/components/AboutAside';
import React from 'react';

const layout = ({ children }) => {
    return (
        <section className="flex lg:flex-row flex-col">
            <AboutAside/>
            
            <div className="border-r border-r-[#1E2D3D] flex flex-col gap-3 text-[#1E2D3D] w-full">
                {children}
            </div>
        </section>
    );
};

export default layout;