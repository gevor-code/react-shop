import React from 'react';

const BackgroundImage = ({imageUrl,imageText}) => {
    const styles={
        backgroundImage:`url(${imageUrl})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
    }
    return <div style={styles} className="w-[100%] 2xl:h-[450px] xl:h-[450px] lg:h-[450px] md:h-[450px] sm:h-[340px] h-[250px] "> <h1 className="absolute top-[45%] left-[30%]  sm:top-[40%] sm:left-[38%] md:top-[45%] md:left-[38%] lg:top-[40%] lg:left-[40%] xl:top-[45%] xl:left-[44%] translate(-50%, -50%) text-[#274c5b] font-[Roboto] font-extrabold text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">{imageText}</h1> </div>
};

export default BackgroundImage;
