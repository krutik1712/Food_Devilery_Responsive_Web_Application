import React, { useState } from 'react';
import { frontEndAssets } from '../assets/frontend_assets/assets';

export default function AppDownload() {

    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <div className="my-16 md:my-40 flex flex-col items-center justify-center gap-5 px-4 md:px-8 lg:px-28" id='app_download'>
            <p className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold">
                For Better Experience Download Tomato App
            </p>
            <div className="flex flex-col sm:flex-row md:gap-8 gap-5 mt-6">
                <img
                    src={frontEndAssets.play_store}
                    className="cursor-pointer w-40 sm:w-52 md:w-64"
                    style={{
                        transform: hoveredImage === 'play_store' ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={() => setHoveredImage('play_store')}
                    onMouseLeave={() => setHoveredImage(null)}
                    alt="Download from Play Store"
                />
                <img
                    src={frontEndAssets.app_store}
                    className="cursor-pointer w-40 sm:w-52 md:w-64"
                    style={{
                        transform: hoveredImage === 'app_store' ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={() => setHoveredImage('app_store')}
                    onMouseLeave={() => setHoveredImage(null)}
                    alt="Download from App Store"
                />
            </div>
        </div>
    );
}
