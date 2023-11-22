import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Firework: React.FC = () => {
    const [explode, setExplode] = useState(false);

    const { y } = useSpring({
        reset: true,
        from: { y: 0 },
        to: { y: explode ? -500 : 0 },
        onRest: () => setExplode(false)
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setExplode(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <animated.div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    zIndex: 1,
                    transformOrigin: 'bottom',
                    translateY: y
                }}
            />
        </div>
    );
};

export default Firework;
