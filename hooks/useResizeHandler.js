import { useEffect, useState } from 'react';

export default function useResizeHandler() {
    const [isMobile, setIsMobile] = useState(undefined);
    const [isTablet, setIsTablet] = useState(undefined);
    const [screenWidth, setScreenWidth] = useState(undefined);

    function setPredicate() {
        setScreenWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 768);
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 960);
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 960);
    }

    useEffect(setPredicate, []);

    useEffect(() => {
        window.addEventListener('resize', setPredicate);

        return () => {
            window.removeEventListener('resize', setPredicate);
        };
    }, []);

    return [isMobile, isTablet, screenWidth];
}