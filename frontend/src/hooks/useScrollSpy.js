import { useState, useEffect } from 'react';
export const useScrollSpy = (sectionIds) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // If the section crosses the middle of the screen, mark it active
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            // The rootMargin triggers the intersection when the element is halfway up the viewport
            { rootMargin: '-50% 0px -50% 0px' }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, [sectionIds]);

    return activeId;
};