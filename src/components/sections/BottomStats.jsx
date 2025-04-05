import React from 'react'

const BottomStats = () => {
  return (
 
<div className="bg-white text-black py-4 sm:py-6 backdrop-blur-[12px] shadow-[0px_4px_8px_0px_#0000001A]">
    <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="flex justify-between sm:grid sm:grid-cols-4 gap-1 sm:gap-4">
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="bg-[#1167B1] rounded-full p-1 sm:p-2 mb-1 sm:mb-0 sm:mr-2 flex items-center justify-center">
            <div style={{
              backgroundImage: 'url(/image-01.png)',
              backgroundPosition: 'right center',
              backgroundSize: 'cover',
              width: '28px',
              height: '28px',
              filter: 'brightness(0) invert(1)'
            }}></div>
          </div>
          <div className="text-center sm:text-left sm:mt-2">
            <p className="font-poppins font-bold text-xs sm:text-xl text-[#1167B1] leading-[100%] tracking-normal mb-0 sm:mb-0">85%</p>
            <p className="font-poppins text-[9px] sm:text-sm text-[#909090] font-medium leading-[100%] tracking-normal">Hair Growth</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="bg-[#1167B1] rounded-full p-1 sm:p-2 mb-1 sm:mb-0 sm:mr-2 flex items-center justify-center">
            <div style={{
              backgroundImage: 'url(/image-02.png)',
              backgroundPosition: 'right center',
              backgroundSize: 'cover',
              width: '28px',
              height: '28px',
              filter: 'brightness(0) invert(1)'
            }}></div>
          </div>
          <div className="text-center sm:text-left sm:mt-2">
            <p className="font-poppins font-bold text-xs sm:text-xl text-[#1167B1] leading-[100%] tracking-normal mb-0 sm:mb-0">88%</p>
            <p className="font-poppins text-[9px] sm:text-sm text-[#909090] font-medium leading-[100%] tracking-normal">Better hair volume</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="bg-[#1167B1] rounded-full p-1 sm:p-2 mb-1 sm:mb-0 sm:mr-2 flex items-center justify-center">
            <div style={{
              backgroundImage: 'url(/image-03.png)',
              backgroundPosition: 'right center',
              backgroundSize: 'cover',
              width: '28px',
              height: '28px',
              filter: 'brightness(0) invert(1)'
            }}></div>
          </div>
          <div className="text-center sm:text-left sm:mt-2">
            <p className="font-poppins font-bold text-xs sm:text-xl text-[#1167B1] leading-[100%] tracking-normal mb-0 sm:mb-0">86%</p>
            <p className="font-poppins text-[9px] sm:text-sm text-[#909090] font-medium leading-[100%] tracking-normal">Hair thickness</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="bg-[#1167B1] rounded-full p-1 sm:p-2 mb-1 sm:mb-0 sm:mr-2 flex items-center justify-center">
            <div style={{
              backgroundImage: 'url(/image-04.png)',
              backgroundPosition: 'right center',
              backgroundSize: 'cover',
              width: '28px',
              height: '28px',
              filter: 'brightness(0) invert(1)'
            }}></div>
          </div>
          <div className="text-center sm:text-left sm:mt-2">
            <p className="font-poppins font-bold text-xs sm:text-xl text-[#1167B1] leading-[100%] tracking-normal mb-0 sm:mb-0">90%</p>
            <p className="font-poppins text-[9px] sm:text-sm text-[#909090] font-medium leading-[100%] tracking-normal">Reduction in hair fall</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BottomStats
