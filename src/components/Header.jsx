// import React from 'react'

// export default function Header() {
//     return (
//         <div
//             className="h-[80vh] sm:h-[90vh] md:h-[80vh] mt-28 mb-20 mx-auto relative bg-cover bg-center rounded-3xl"
//             style={{ backgroundImage: `url('src/assets/frontend_assets/header_img.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//         >
//             <div className="absolute bottom-10 left-6 sm:left-10 md:left-24 w-[80%] sm:w-[70%] md:w-[75%] lg:w-[65%] text-white" style={{ animation: "fadeIn 3s" }}>
//                 <h1 className="text-[10vw] sm:text-[8vw] md:text-[7.5vw] lg:text-[6vw] leading-[10vw] sm:leading-[8vw] md:leading-[8vw] lg:leading-[6vw] md:w-[100%] font-bold">
//                     Order your favourite food here
//                 </h1>
//                 <p className="mt-4 text-sm sm:text-base md:text-xl">
//                     Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients
//                     and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one
//                     delicious meal at a time.
//                 </p>
//                 <button className="mt-6 px-4 py-2 sm:px-6 sm:py-2 text-sm md:text-base bg-white hover:bg-[#ff4929] text-[#ff4929] hover:text-white transition-all duration-500 font-semibold rounded-full">
//                     View Menu
//                 </button>
//             </div>
//         </div>
//     )
// }

import React from 'react';

export default function Header() {
    return (
        <div
            className="h-[80vh] sm:h-[90vh] md:h-[80vh] mt-28 mb-20 mx-auto relative bg-cover bg-center rounded-3xl"
            style={{
                backgroundImage: `url('/assets/header_img.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute bottom-10 left-6 sm:left-10 md:left-24 w-[80%] sm:w-[70%] md:w-[75%] lg:w-[65%] text-white" style={{ animation: "fadeIn 3s" }}>
                <h1 className="text-[10vw] sm:text-[8vw] md:text-[7.5vw] lg:text-[6vw] leading-[10vw] sm:leading-[8vw] md:leading-[8vw] lg:leading-[6vw] md:w-[100%] font-bold">
                    Order your favourite food here
                </h1>
                <p className="mt-4 text-sm sm:text-base md:text-xl">
                    Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients
                    and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one
                    delicious meal at a time.
                </p>
                <button className="mt-6 px-4 py-2 sm:px-6 sm:py-2 text-sm md:text-base bg-white hover:bg-[#ff4929] text-[#ff4929] hover:text-white transition-all duration-500 font-semibold rounded-full">
                    View Menu
                </button>
            </div>
        </div>
    );
}

