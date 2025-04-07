import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="bg-[#1167B1] text-white relative overflow-hidden sm:h-[635px] hero-section"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10 text-center md:text-left">
            <p className="text-sm md:text-base mb-2">Female Pattern Baldness Treatment For Women</p>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Know The Root Cause Of<br className="block md:hidden" />
              Your Baldness
            </h1>
            
            <p className="text-sm md:text-base mb-6">
              Restore your hair with advanced treatments at our leading<br className="block md:hidden" />
              clinic, offering expert care for natural, lasting results.
            </p>
            
            <div className="flex flex-col gap-4 mb-6 font-roboto mx-auto md:mx-0 max-w-[289px] md:max-w-none">
              <button className="w-full md:w-[289px] h-11.5 bg-[#231F20] text-white py-2 px-6 rounded font-medium">
                BOOK YOUR APPOINTMENT
              </button>
              <div className="w-full md:w-[289px] text-white font-semibold text-lg text-center md:text-left">
                20% OFF ON HAIR TREATMENT
              </div>
            </div>
          </div>
          
          {/* Right Content - Doctor Image and Stats */}
          <div className="relative md:flex justify-end">
            <img
              src="/image.png"
              alt="Female Doctor"
              className="max-w-full md:max-w-[90%] relative z-10 h-[589px] mx-auto md:mx-0 block"
            />
            
            {/* Stats Badges */}
            <div
              className="absolute bg-white text-black rounded-[76.98px] flex flex-col items-center justify-center z-20 w-43.5 h-16 py-1 shadow-[0px_5.83px_11.66px_0px_#0000001A] hidden md:flex"
              style={{
                gap: '12.22px',
                top: '120px',
                left: '20.24px',
              }}
            >
              <p className="font-poppins text-[#0073AE] font-bold text-center">300+</p>
              <p className="font-poppins text-[#231F20] text-sm font-semibold">Doctors Globally</p>
            </div>
            
            <div
              className="absolute z-20 flex flex-col items-center justify-center rounded-[52.8px] text-white w-43.5 h-13.5 py-1 hidden md:flex"
              style={{
                top: '209px',
                left: '410px',
                gap: '8.38px',
                backdropFilter: 'blur(8px)',
                background: '#1E232FE3',
              }}
            >
              <p className="font-poppins text-[#0073AE] font-bold text-center">200+</p>
              <p className="font-poppins text-white text-sm font-semibold">Clinics Globally</p>
            </div>
            
            <div
              className="absolute z-20 flex flex-col items-center justify-center rounded-[52.8px] text-white hidden md:flex"
              style={{
                width: '174.95px',
                height: '59.67px',
                top: '330px',
                left: '40px',
                gap: '8.38px',
                paddingTop: '4px',
                paddingBottom: '4px',
                background: '#1E232FE3',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className="font-poppins font-bold text-center">150k+</p>
              <p className="font-poppins text-sm">Happy Patients</p>
            </div>
            
            {/* Google Rating */}
            <div
              className="absolute bg-white flex items-center z-20 hidden md:flex"
              style={{
                width: '197.27px',
                height: '60px',
                gap: '4px',
                paddingTop: '8px',
                paddingRight: '12px',
                paddingBottom: '8px',
                paddingLeft: '12px',
                borderTopLeftRadius: '30px',
                borderBottomLeftRadius: '30px',
                borderWidth: '1px 0px 1px 1px',
                borderStyle: 'solid',
                borderColor: '#1167B1',
                boxShadow: '0px 18px 37.5px 0px #0000001A',
                bottom: '10%',
                right: '-150px',
              }}
            >
              <div className="mr-1">
                <svg width="38" height="38" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2299_14804)">
                    <path d="M14.6313 1.38138C10.4349 2.83717 6.81587 5.60031 4.30587 9.26492C1.79587 12.9295 0.527182 17.3025 0.686161 21.7414C0.845141 26.1804 2.42341 30.4514 5.18913 33.927C7.95486 37.4027 11.7623 39.8998 16.0521 41.0517C19.53 41.9491 23.1738 41.9885 26.6702 41.1665C29.8377 40.4551 32.7661 38.9332 35.1687 36.75C37.6693 34.4083 39.4843 31.4294 40.4187 28.1334C41.4343 24.5492 41.615 20.7799 40.947 17.115H21.417V25.2164H32.7274C32.5014 26.5085 32.017 27.7417 31.3032 28.8423C30.5894 29.9428 29.661 30.888 28.5734 31.6214C27.1922 32.535 25.6353 33.1497 24.0026 33.4261C22.3651 33.7306 20.6854 33.7306 19.0479 33.4261C17.3882 33.0829 15.8182 32.3979 14.4377 31.4147C12.2201 29.8449 10.555 27.6147 9.67993 25.0425C8.7901 22.4221 8.7901 19.5812 9.67993 16.9608C10.3028 15.124 11.3325 13.4516 12.6921 12.0684C14.2481 10.4565 16.2179 9.30428 18.3856 8.7382C20.5533 8.17211 22.835 8.21403 24.9804 8.85935C26.6564 9.37383 28.189 10.2727 29.456 11.4844C30.7313 10.2156 32.0045 8.94357 33.2754 7.66826C33.9316 6.98248 34.647 6.32951 35.2934 5.62732C33.3593 3.82748 31.089 2.42698 28.6127 1.50607C24.1033 -0.131305 19.1692 -0.175308 14.6313 1.38138Z" fill="white"/>
                    <path d="M14.6312 1.38151C19.1688 -0.176236 24.1028 -0.133391 28.6126 1.50292C31.0894 2.43008 33.3586 3.83733 35.29 5.64386C34.6337 6.34605 33.9414 7.0023 33.272 7.6848C31.9989 8.95573 30.7269 10.2223 29.4559 11.4845C28.1889 10.2728 26.6563 9.37396 24.9803 8.85948C22.8356 8.2119 20.5539 8.16756 18.3857 8.73133C16.2175 9.29509 14.2464 10.4452 12.6887 12.0554C11.3291 13.4386 10.2994 15.111 9.67654 16.9478L2.87451 11.6814C5.30923 6.8532 9.52478 3.16003 14.6312 1.38151Z" fill="#E33629"/>
                    <path d="M1.06946 16.8983C1.43506 15.0864 2.04204 13.3317 2.87415 11.6812L9.67618 16.9607C8.78636 19.5811 8.78636 22.422 9.67618 25.0424C7.40993 26.7924 5.14259 28.5512 2.87415 30.3187C0.791051 26.1722 0.155742 21.4478 1.06946 16.8983Z" fill="#F8BD00"/>
                    <path d="M21.4165 17.1118H40.9465C41.6146 20.7768 41.4338 24.546 40.4182 28.1303C39.4838 31.4262 37.6688 34.4051 35.1682 36.7468C32.9731 35.034 30.7681 33.3343 28.5729 31.6215C29.6612 30.8874 30.5901 29.9412 31.3039 28.8394C32.0177 27.7377 32.5017 26.5032 32.727 25.2099H21.4165C21.4132 22.5128 21.4165 19.8123 21.4165 17.1118Z" fill="#587DBD"/>
                    <path d="M2.87109 30.3187C5.13953 28.5687 7.40687 26.81 9.67312 25.0425C10.5499 27.6156 12.2174 29.8459 14.4375 31.4147C15.8222 32.3933 17.3956 33.0728 19.0575 33.4097C20.695 33.7142 22.3747 33.7142 24.0122 33.4097C25.6449 33.1333 27.2018 32.5186 28.583 31.605C30.7781 33.3178 32.9831 35.0175 35.1783 36.7303C32.776 38.9147 29.8476 40.4377 26.6798 41.1501C23.1834 41.9721 19.5396 41.9327 16.0617 41.0353C13.3111 40.3009 10.7417 39.0062 8.51484 37.2323C6.15779 35.361 4.23267 33.0027 2.87109 30.3187Z" fill="#319F43"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2299_14804">
                      <rect width="42" height="42" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-poppins text-[#231F20] font-semibold text-sm">4.8</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-[#F6B522]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-poppins text-sm font-normal text-[#231F20]">25,000+ reviews</p>
              </div>
            </div>
            
            <div
              className="absolute bg-white text-black rounded-[76.98px] flex flex-col items-center justify-center z-20 w-43.5 h-14.5 py-1.5 hidden md:flex"
              style={{
                top: '345px',
                left: '440.24px',
                gap: '12.22px',
                boxShadow: '0px 5.83px 11.66px 0px #0000001A',
              }}
            >
              <p className="font-poppins text-[#0073AE] font-bold text-center">91%</p>
              <p className="font-poppins text-[#231F20] text-sm font-semibold">Success Rate</p>
            </div>
            
            {/* Mobile Stats Badges */}
            <div
              className="absolute bg-white text-black rounded-[76.98px] flex flex-col items-center justify-center z-20 w-43.5 h-16 py-1 shadow-[0px_5.83px_11.66px_0px_#0000001A] md:hidden"
              style={{
                gap: '12.22px',
                top: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <p className="font-poppins text-[#0073AE] font-bold text-center">300+</p>
              <p className="font-poppins text-[#231F20] text-sm font-semibold">Doctors Globally</p>
            </div>

            <div
              className="absolute z-20 flex flex-col items-center justify-center rounded-[52.8px] text-white w-43.5 h-13.5 py-1 md:hidden"
              style={{
                top: '90px',
                left: '50%',
                transform: 'translateX(-50%)',
                gap: '8.38px',
                backdropFilter: 'blur(8px)',
                background: '#1E232FE3',
              }}
            >
              <p className="font-poppins text-[#0073AE] font-bold text-center">200+</p>
              <p className="font-poppins text-white text-sm font-semibold">Clinics Globally</p>
            </div>

            <div
              className="absolute z-20 flex flex-col items-center justify-center rounded-[52.8px] text-white md:hidden"
              style={{
                width: '174.95px',
                height: '59.67px',
                top: '170px',
                left: '50%',
                transform: 'translateX(-50%)',
                gap: '8.38px',
                paddingTop: '4px',
                paddingBottom: '4px',
                background: '#1E232FE3',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className="font-poppins font-bold text-center">150k+</p>
              <p className="font-poppins text-sm">Happy Patients</p>
            </div>

            <div
              className="absolute bg-white flex items-center z-20 md:hidden"
              style={{
                width: '197.27px',
                height: '60px',
                gap: '4px',
                paddingTop: '8px',
                paddingRight: '12px',
                paddingBottom: '8px',
                paddingLeft: '12px',
                borderTopLeftRadius: '30px',
                borderBottomLeftRadius: '30px',
                borderWidth: '1px 0px 1px 1px',
                borderStyle: 'solid',
                borderColor: '#1167B1',
                boxShadow: '0px 18px 37.5px 0px #0000001A',
                bottom: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <div className="mr-1">
                <svg width="38" height="38" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2299_14804)">
                    <path d="M14.6313 1.38138C10.4349 2.83717 6.81587 5.60031 4.30587 9.26492C1.79587 12.9295 0.527182 17.3025 0.686161 21.7414C0.845141 26.1804 2.42341 30.4514 5.18913 33.927C7.95486 37.4027 11.7623 39.8998 16.0521 41.0517C19.53 41.9491 23.1738 41.9885 26.6702 41.1665C29.8377 40.4551 32.7661 38.9332 35.1687 36.75C37.6693 34.4083 39.4843 31.4294 40.4187 28.1334C41.4343 24.5492 41.615 20.7799 40.947 17.115H21.417V25.2164H32.7274C32.5014 26.5085 32.017 27.7417 31.3032 28.8423C30.5894 29.9428 29.661 30.888 28.5734 31.6214C27.1922 32.535 25.6353 33.1497 24.0026 33.4261C22.3651 33.7306 20.6854 33.7306 19.0479 33.4261C17.3882 33.0829 15.8182 32.3979 14.4377 31.4147C12.2201 29.8449 10.555 27.6147 9.67993 25.0425C8.7901 22.4221 8.7901 19.5812 9.67993 16.9608C10.3028 15.124 11.3325 13.4516 12.6921 12.0684C14.2481 10.4565 16.2179 9.30428 18.3856 8.7382C20.5533 8.17211 22.835 8.21403 24.9804 8.85935C26.6564 9.37383 28.189 10.2727 29.456 11.4844C30.7313 10.2156 32.0045 8.94357 33.2754 7.66826C33.9316 6.98248 34.647 6.32951 35.2934 5.62732C33.3593 3.82748 31.089 2.42698 28.6127 1.50607C24.1033 -0.131305 19.1692 -0.175308 14.6313 1.38138Z" fill="white"/>
                    <path d="M14.6312 1.38151C19.1688 -0.176236 24.1028 -0.133391 28.6126 1.50292C31.0894 2.43008 33.3586 3.83733 35.29 5.64386C34.6337 6.34605 33.9414 7.0023 33.272 7.6848C31.9989 8.95573 30.7269 10.2223 29.4559 11.4845C28.1889 10.2728 26.6563 9.37396 24.9803 8.85948C22.8356 8.2119 20.5539 8.16756 18.3857 8.73133C16.2175 9.29509 14.2464 10.4452 12.6887 12.0554C11.3291 13.4386 10.2994 15.111 9.67654 16.9478L2.87451 11.6814C5.30923 6.8532 9.52478 3.16003 14.6312 1.38151Z" fill="#E33629"/>
                    <path d="M1.06946 16.8983C1.43506 15.0864 2.04204 13.3317 2.87415 11.6812L9.67618 16.9607C8.78636 19.5811 8.78636 22.422 9.67618 25.0424C7.40993 26.7924 5.14259 28.5512 2.87415 30.3187C0.791051 26.1722 0.155742 21.4478 1.06946 16.8983Z" fill="#F8BD00"/>
                    <path d="M21.4165 17.1118H40.9465C41.6146 20.7768 41.4338 24.546 40.4182 28.1303C39.4838 31.4262 37.6688 34.4051 35.1682 36.7468C32.9731 35.034 30.7681 33.3343 28.5729 31.6215C29.6612 30.8874 30.5901 29.9412 31.3039 28.8394C32.0177 27.7377 32.5017 26.5032 32.727 25.2099H21.4165C21.4132 22.5128 21.4165 19.8123 21.4165 17.1118Z" fill="#587DBD"/>
                    <path d="M2.87109 30.3187C5.13953 28.5687 7.40687 26.81 9.67312 25.0425C10.5499 27.6156 12.2174 29.8459 14.4375 31.4147C15.8222 32.3933 17.3956 33.0728 19.0575 33.4097C20.695 33.7142 22.3747 33.7142 24.0122 33.4097C25.6449 33.1333 27.2018 32.5186 28.583 31.605C30.7781 33.3178 32.9831 35.0175 35.1783 36.7303C32.776 38.9147 29.8476 40.4377 26.6798 41.1501C23.1834 41.9721 19.5396 41.9327 16.0617 41.0353C13.3111 40.3009 10.7417 39.0062 8.51484 37.2323C6.15779 35.361 4.23267 33.0027 2.87109 30.3187Z" fill="#319F43"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2299_14804">
                      <rect width="42" height="42" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-poppins text-[#231F20] font-semibold text-sm">4.8</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-[#F6B522]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-poppins text-sm font-normal text-[#231F20]">25,000+ reviews</p>
              </div>
            </div>

            <div
              className="absolute bg-white text-black rounded-[76.98px] flex flex-col items-center justify-center z-20 w-43.5 h-14.5 py-1.5 md:hidden"
              style={{
                top: '250px',
                left: '50%',
                transform: 'translateX(-50%)',
                gap: '12.22px',
                boxShadow: '0px 5.83px 11.66px 0px #0000001A',
              }}
            >
              <p className="font-poppins text-[#0073AE] font-bold text-center">91%</p>
              <p className="font-poppins text-[#231F20] text-sm font-semibold">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

