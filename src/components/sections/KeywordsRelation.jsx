import React from 'react';

const KeywordsRelation = () => {
  return (
    <div className="sm:bg-white bg-[#F5FAFE] py-12 px-4 sm:px-6 lg:px-8 font-roboto">
      <div className="max-w-6xl mx-auto">
        {/* Desktop  */}
        <div className="hidden sm:block mb-6 font-roboto">
          <h2 className="text-xl sm:text-4xl font-semibold text-[#231F20] mb-1">
            KEY WORD RELATED SECTION
          </h2>
          <p className="text-[#1B1F26B8] font-normal text-lg md:text-xl">
            Features of our clinics
          </p>
        </div>

        {/* Mobile  */}
        <div className="sm:hidden mb-6">
          <h2 className="font-poppins font-semibold text-lg leading-6 tracking-normal">
            Why Choose Dr Batra's for hair treatment?
          </h2>
        </div>

        <div className="text-[#231F20] font-poppins font-normal text-base sm:text-lg leading-relaxed tracking-normal">
       
          <p className="mb-4 sm:hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          
        
          <p className="mb-4 hidden sm:block">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          
          <p className="mb-4 hidden sm:block">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is si
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeywordsRelation; 