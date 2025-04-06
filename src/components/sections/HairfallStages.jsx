import React from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io";

const HairFallStages = () => {
  return (
    <div className="bg-white sm:bg-[#F5FAFE] py-8 sm:py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl md:text-4xl text-[#231F20] font-roboto font-semibold leading-[1.2] md:leading-[33.6px] tracking-normal">
            Understanding the Stages of Hair Fall
          </h1>
          <p className="text-[#231F20] hidden sm:block w-full mt-2 font-roboto font-normal text-base md:text-xl leading-[1.25] md:leading-[25px]">
          At Dr Batra®, we personalise treatments based on the severity of hair loss, ensuring maximum regrowth potential.
          </p>
          <p className="text-[#231F20]  font-roboto font-normal text-base mt-2 hidden sm:block">
          Hair loss progresses in different stages:
        </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between w-full mb-8 gap-4 sm:gap-8">
          {/* Stage 1-2 */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-[#1167B1] sm:border-[#C8EFFF]">
            <div className="flex flex-row sm:items-center mb-2">
              <div className="w-5 h-5 sm:w-4 sm:h-4 rounded-full border-3 border-[#EAF6FF] bg-[#1167B1] mr-3 sm:mr-2 self-start sm:self-auto mt-1 sm:mt-0 relative">
                <div className="absolute w-[2px] h-8 bg-[#ACDDF9] top-6 left-1/2 -translate-x-1/2 sm:hidden"></div>
                <IoIosArrowRoundDown className="text-[#ACDDF9] text-xl absolute top-[38px] left-1/2 -translate-x-1/2 sm:hidden" />
              </div>
              <div className="sm:hidden">
                <h3 className="font-roboto font-semibold text-base sm:text-2xl leading-6 sm:leading-10 tracking-normal mb-0.5 text-[#231F20]">Stage 1-2</h3>
                <p className="text-[#606060] text-sm font-roboto font-normal">Mild thinning, slight hairline recession</p>
              </div>
              <div className="hidden sm:block relative w-full h-[2px] bg-[#ACDDF9]">
                <IoIosArrowRoundForward className="text-[#ACDDF9] text-xl absolute -right-1 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h3 className="font-roboto font-semibold text-base sm:text-2xl leading-6 sm:leading-10 tracking-normal mb-0.5 text-[#231F20]">Stage 1-2</h3>
              <p className="text-[#606060] text-sm font-roboto font-normal">Mild thinning, slight hairline recession</p>
            </div>
          </div>

          {/* Stage 3-4 */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-[#1167B1] sm:border-[#C8EFFF]">
            <div className="flex flex-row sm:items-center mb-2">
              <div className="w-5 h-5 sm:w-4 sm:h-4 rounded-full border-3 border-[#EAF6FF] bg-[#1167B1] mr-3 sm:mr-2 self-start sm:self-auto mt-1 sm:mt-0 relative">
                <div className="absolute w-[2px] h-8 bg-[#ACDDF9] top-6 left-1/2 -translate-x-1/2 sm:hidden"></div>
                <IoIosArrowRoundDown className="text-[#ACDDF9] text-xl absolute top-[38px] left-1/2 -translate-x-1/2 sm:hidden" />
              </div>
              <div className="sm:hidden">
                <h3 className="font-roboto font-semibold text-base sm:text-2xl leading-6 sm:leading-10 tracking-normal mb-0.5 text-[#231F20]">Stage 3-4</h3>
                <p className="text-[#606060] text-sm font-roboto font-normal">Visible bald patches, widening parting</p>
              </div>
              <div className="hidden sm:block relative w-full h-[2px] bg-[#ACDDF9]">
                <IoIosArrowRoundForward className="text-[#ACDDF9] text-xl absolute -right-1 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h3 className="font-roboto font-semibold text-base sm:text-2xl leading-6 sm:leading-10 tracking-normal mb-0.5 text-[#231F20]">Stage 3-4</h3>
              <p className="text-[#606060] text-sm font-roboto font-normal">Visible bald patches, widening parting</p>
            </div>
          </div>

          {/* Stage 5-7 */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-[#1167B1] sm:border-[#C8EFFF]">
            <div className="flex flex-row sm:items-center mb-2">
              <div className="w-5 h-5 sm:w-4 sm:h-4 rounded-full border-3 border-[#EAF6FF] bg-[#1167B1] mr-3 sm:mr-2 self-start sm:self-auto mt-1 sm:mt-0 relative">
                <div className="absolute w-[2px] h-6 bg-[#ACDDF9] top-6 left-1/2 -translate-x-1/2 sm:hidden"></div>
                <IoIosArrowRoundDown className="text-[#ACDDF9] text-xl absolute top-[32px] left-1/2 -translate-x-1/2 sm:hidden" />
                <div className="absolute top-[42px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#ACDDF9] flex items-center justify-center sm:hidden">
                  <svg width="10" height="16" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-75">
                    <path d="M10.5002 4.40781C11.1229 4.39115 11.9815 4.73521 12.2506 4.95072C13.2414 5.74385 12.8431 7.33224 12.3002 8.22579C11.9228 8.84712 11.1426 8.49113 10.9789 8.0199C10.833 7.59881 11.0814 7.15234 11.0438 6.72834C10.9968 6.19964 10.7873 5.84794 10.3209 5.44656C9.92384 5.10479 9.45214 4.43578 10.5002 4.40781Z" fill="#231F20"/>
                    <path d="M9.96147 4.80631C9.95673 4.80432 9.95398 4.80371 9.95001 4.80188C10.0032 4.80784 10.0564 4.81778 10.1097 4.82221C10.0449 4.8138 9.9983 4.80906 9.96147 4.80631ZM9.88872 4.80356C9.8875 4.80295 9.8855 4.80188 9.88428 4.80127C9.88596 4.80188 9.88749 4.80295 9.88918 4.80356C9.88887 4.80356 9.88872 4.80356 9.88872 4.80356Z" fill="#231F20"/>
                    <path d="M9.15573 14.1499H6.41211V18.8831H9.15573V14.1499Z" fill="#FEAF9A"/>
                    <path d="M9.15588 15.6903C8.76015 16.0174 8.28969 16.2077 7.78422 16.2077C7.2786 16.2077 6.80737 16.0174 6.41211 15.6903V14.1499H9.15573L9.15588 15.6903Z" fill="#FFB39D"/>
                    <path d="M2.84493 9.41669C2.8836 10.3018 3.05524 11.1268 3.48658 11.7397C4.5987 13.3198 6.06543 14.9048 8.06758 15.2283C9.69082 15.4906 11.7379 14.4726 12.2851 12.8098C12.651 11.6969 12.5645 10.374 12.5818 9.21631C12.6006 7.93514 12.5312 6.64817 12.4146 5.37266C12.2198 3.24624 9.78604 2.44058 8.02554 2.42545C6.43088 2.41184 3.3429 3.30997 3.15474 5.37021C3.05356 6.47025 2.78348 8.0186 2.84493 9.41669Z" fill="#FFB39D"/>
                    <path d="M12.2319 8.62538C12.2383 8.60945 12.2395 8.60526 12.2319 8.62538V8.62538Z" fill="#FFB39D"/>
                    <path d="M3.33586 8.62538C3.32799 8.60526 3.32966 8.60945 3.33586 8.62538V8.62538Z" fill="#FFB39D"/>
                    <path d="M3.58077 9.15055C3.52009 9.0029 3.45513 8.86274 3.37901 8.72288C3.36373 8.69522 3.34432 8.64738 3.3356 8.6243C3.34202 8.64172 3.35578 8.6781 3.37963 8.74505C3.35441 8.6781 3.32628 8.61207 3.29556 8.54772C3.14975 8.35712 3.1421 8.34932 3.27385 8.52449C3.13981 8.33587 2.90151 8.17767 2.66139 8.16346C2.63464 8.15383 2.60912 8.14359 2.57931 8.1361C2.21829 8.0447 1.85054 8.19082 1.60919 8.46518C1.08355 9.06343 1.23885 9.977 1.69341 10.5578C1.88936 10.8083 2.24916 10.9688 2.56495 10.9552C2.98344 10.9373 3.32093 10.6747 3.51749 10.3154C3.71635 9.95346 3.73744 9.53221 3.58077 9.15055Z" fill="#FFB39D"/>
                    <path d="M12.0214 9.49431C12.0214 9.90731 11.8302 10.242 11.594 10.242C11.3582 10.242 11.1665 9.90731 11.1665 9.49431C11.1665 9.08132 11.3582 8.74658 11.594 8.74658C11.8302 8.74658 12.0214 9.08147 12.0214 9.49431Z" fill="#49291C"/>
                    <path d="M7.18382 9.49431C7.18382 9.90731 6.99246 10.242 6.75647 10.242C6.52047 10.242 6.3291 9.90731 6.3291 9.49431C6.3291 9.08132 6.52047 8.74658 6.75647 8.74658C6.99246 8.74658 7.18382 9.08147 7.18382 9.49431Z" fill="#49291C"/>
                    <path d="M9.15217 12.8229C9.83723 12.3871 7.67596 12.6668 7.20947 12.0947C7.20947 12.0947 7.29859 14.0018 9.15217 12.8229Z" fill="white"/>
                    <path d="M2.13396 9.54932C2.59938 9.562 2.73327 10.0348 3.11509 10.1936C3.26931 10.2575 3.38731 10.0785 3.36148 9.94718C3.31547 9.71363 3.07901 9.50484 2.88994 9.37629C2.66433 9.22283 2.39777 9.2048 2.13396 9.23247C1.93434 9.25341 1.92562 9.54382 2.13396 9.54932Z" fill="#F48364"/>
                    <path d="M0.208008 23.7108V23.023C0.208008 19.9633 2.68811 17.4829 5.74797 17.4829H8.6718C11.7318 17.4829 14.2116 19.9635 14.2116 23.023V23.7108H0.208008Z" fill="white"/>
                    <path d="M5.44434 17.6173L6.42134 16.5356L7.76166 17.1444L7.77313 17.1664L7.78398 17.1444L9.12491 16.5356L10.1018 17.6173L9.20821 19.9457L7.77313 17.9366L6.33788 19.9457L5.44434 17.6173Z" fill="#E0E1E6"/>
                    <path d="M10.1398 7.81057C9.70813 8.42196 9.50117 9.03855 9.48375 9.7846C9.47611 10.11 9.54137 10.3978 9.69834 10.6812C9.79372 10.8536 10.0207 11.0372 9.73962 11.2536C9.51646 11.4251 9.45577 11.3516 9.26976 11.5159C9.21198 11.567 9.26075 11.6551 9.32876 11.6581C9.71363 11.6756 10.4216 11.3566 10.1821 10.8568C9.97301 10.4209 9.75704 10.1051 9.72662 9.5992C9.69162 9.01715 9.95237 8.35731 10.2756 7.88975C10.3331 7.80614 10.1975 7.72895 10.1398 7.81057Z" fill="#F48364"/>
                    <path d="M5.75376 7.98687C6.32892 7.5751 6.94322 8.00017 7.54208 8.03777C7.92297 8.06146 8.1284 7.53887 7.85312 7.28637C7.18074 6.66932 5.8337 6.81544 5.40481 7.63792C5.29614 7.8464 5.53136 8.14614 5.75376 7.98687Z" fill="#231F20"/>
                    <path d="M12.4963 7.98687C12.0598 7.5751 11.5936 8.00017 11.1392 8.03777C10.8502 8.06146 10.6944 7.53887 10.9031 7.28637C11.4134 6.66932 12.4355 6.81544 12.7609 7.63792C12.8436 7.8464 12.6649 8.14614 12.4963 7.98687Z" fill="#231F20"/>
                    <path d="M4.26998 10.1518C4.33693 9.48304 4.27869 8.83237 4.2573 8.16305C4.23941 7.59553 4.25302 7.00065 3.99409 6.48356C3.92256 6.34065 3.6858 6.33958 3.61457 6.48356C3.32431 7.07065 3.38881 7.75327 3.44888 8.38865C3.5114 9.05003 3.6187 9.6553 3.94839 10.2387C4.03918 10.3998 4.25378 10.3125 4.26998 10.1518Z" fill="#231F20"/>
                    <path d="M4.1878 6.00409C4.17297 5.6802 4.13583 5.41241 4.06445 5.30496C3.70556 4.76358 2.69479 5.15166 2.43632 5.61662C2.04732 6.31559 2.48325 7.43429 2.77182 8.09749C3.14798 8.96139 3.92888 8.46432 4.09334 7.80784C4.15341 7.56864 4.21806 6.66821 4.1878 6.00409Z" fill="#231F20"/>
                    <g opacity="0.4">
                      <path d="M6.10764 4.61872C7.26317 4.32556 7.00333 3.30163 5.8478 3.59464C4.69212 3.8878 4.95196 4.91188 6.10764 4.61872Z" fill="white"/>
                    </g>
                    <path d="M10.6855 0.583984L10.9752 1.14768L11.5046 1.45598L10.9752 1.76427L10.6855 2.32782L10.396 1.76427L9.8667 1.45598L10.396 1.14768L10.6855 0.583984Z" fill="#FFFEFF"/>
                    <path d="M12.6275 2.52686L12.8089 2.88009L13.1408 3.07329L12.8089 3.26664L12.6275 3.61987L12.4459 3.26664L12.1143 3.07329L12.4459 2.88009L12.6275 2.52686Z" fill="#FFFEFF"/>
                  </svg>
                </div>
              </div>
              <div className="sm:hidden">
                <h3 className="font-roboto font-semibold text-base sm:text-2xl leading-6 sm:leading-10 tracking-normal mb-0.5 text-[#231F20]">Stage 5-7</h3>
                <p className="text-[#606060] text-sm font-roboto font-normal">Extensive balding, almost no regrowth</p>
              </div>
              <div className="hidden sm:block relative w-[calc(100%-1rem)] h-[2px] bg-[#ACDDF9] mr-8">
                <IoIosArrowRoundForward className="text-[#ACDDF9] text-xl absolute -right-1 top-1/2 -translate-y-1/2" />
                <div className="absolute -right-7 -top-2 w-6 h-6 rounded-full bg-[#ACDDF9] flex items-center justify-center">
                  <svg width="12" height="18" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-75">
                    <path d="M10.5002 4.40781C11.1229 4.39115 11.9815 4.73521 12.2506 4.95072C13.2414 5.74385 12.8431 7.33224 12.3002 8.22579C11.9228 8.84712 11.1426 8.49113 10.9789 8.0199C10.833 7.59881 11.0814 7.15234 11.0438 6.72834C10.9968 6.19964 10.7873 5.84794 10.3209 5.44656C9.92384 5.10479 9.45214 4.43578 10.5002 4.40781Z" fill="#231F20"/>
                    <path d="M9.96147 4.80631C9.95673 4.80432 9.95398 4.80371 9.95001 4.80188C10.0032 4.80784 10.0564 4.81778 10.1097 4.82221C10.0449 4.8138 9.9983 4.80906 9.96147 4.80631ZM9.88872 4.80356C9.8875 4.80295 9.8855 4.80188 9.88428 4.80127C9.88596 4.80188 9.88749 4.80295 9.88918 4.80356C9.88887 4.80356 9.88872 4.80356 9.88872 4.80356Z" fill="#231F20"/>
                    <path d="M9.15573 14.1499H6.41211V18.8831H9.15573V14.1499Z" fill="#FEAF9A"/>
                    <path d="M9.15588 15.6903C8.76015 16.0174 8.28969 16.2077 7.78422 16.2077C7.2786 16.2077 6.80737 16.0174 6.41211 15.6903V14.1499H9.15573L9.15588 15.6903Z" fill="#FFB39D"/>
                    <path d="M2.84493 9.41669C2.8836 10.3018 3.05524 11.1268 3.48658 11.7397C4.5987 13.3198 6.06543 14.9048 8.06758 15.2283C9.69082 15.4906 11.7379 14.4726 12.2851 12.8098C12.651 11.6969 12.5645 10.374 12.5818 9.21631C12.6006 7.93514 12.5312 6.64817 12.4146 5.37266C12.2198 3.24624 9.78604 2.44058 8.02554 2.42545C6.43088 2.41184 3.3429 3.30997 3.15474 5.37021C3.05356 6.47025 2.78348 8.0186 2.84493 9.41669Z" fill="#FFB39D"/>
                    <path d="M12.2319 8.62538C12.2383 8.60945 12.2395 8.60526 12.2319 8.62538V8.62538Z" fill="#FFB39D"/>
                    <path d="M3.33586 8.62538C3.32799 8.60526 3.32966 8.60945 3.33586 8.62538V8.62538Z" fill="#FFB39D"/>
                    <path d="M3.58077 9.15055C3.52009 9.0029 3.45513 8.86274 3.37901 8.72288C3.36373 8.69522 3.34432 8.64738 3.3356 8.6243C3.34202 8.64172 3.35578 8.6781 3.37963 8.74505C3.35441 8.6781 3.32628 8.61207 3.29556 8.54772C3.14975 8.35712 3.1421 8.34932 3.27385 8.52449C3.13981 8.33587 2.90151 8.17767 2.66139 8.16346C2.63464 8.15383 2.60912 8.14359 2.57931 8.1361C2.21829 8.0447 1.85054 8.19082 1.60919 8.46518C1.08355 9.06343 1.23885 9.977 1.69341 10.5578C1.88936 10.8083 2.24916 10.9688 2.56495 10.9552C2.98344 10.9373 3.32093 10.6747 3.51749 10.3154C3.71635 9.95346 3.73744 9.53221 3.58077 9.15055Z" fill="#FFB39D"/>
                    <path d="M12.0214 9.49431C12.0214 9.90731 11.8302 10.242 11.594 10.242C11.3582 10.242 11.1665 9.90731 11.1665 9.49431C11.1665 9.08132 11.3582 8.74658 11.594 8.74658C11.8302 8.74658 12.0214 9.08147 12.0214 9.49431Z" fill="#49291C"/>
                    <path d="M7.18382 9.49431C7.18382 9.90731 6.99246 10.242 6.75647 10.242C6.52047 10.242 6.3291 9.90731 6.3291 9.49431C6.3291 9.08132 6.52047 8.74658 6.75647 8.74658C6.99246 8.74658 7.18382 9.08147 7.18382 9.49431Z" fill="#49291C"/>
                    <path d="M9.15217 12.8229C9.83723 12.3871 7.67596 12.6668 7.20947 12.0947C7.20947 12.0947 7.29859 14.0018 9.15217 12.8229Z" fill="white"/>
                    <path d="M2.13396 9.54932C2.59938 9.562 2.73327 10.0348 3.11509 10.1936C3.26931 10.2575 3.38731 10.0785 3.36148 9.94718C3.31547 9.71363 3.07901 9.50484 2.88994 9.37629C2.66433 9.22283 2.39777 9.2048 2.13396 9.23247C1.93434 9.25341 1.92562 9.54382 2.13396 9.54932Z" fill="#F48364"/>
                    <path d="M0.208008 23.7108V23.023C0.208008 19.9633 2.68811 17.4829 5.74797 17.4829H8.6718C11.7318 17.4829 14.2116 19.9635 14.2116 23.023V23.7108H0.208008Z" fill="white"/>
                    <path d="M5.44434 17.6173L6.42134 16.5356L7.76166 17.1444L7.77313 17.1664L7.78398 17.1444L9.12491 16.5356L10.1018 17.6173L9.20821 19.9457L7.77313 17.9366L6.33788 19.9457L5.44434 17.6173Z" fill="#E0E1E6"/>
                    <path d="M10.1398 7.81057C9.70813 8.42196 9.50117 9.03855 9.48375 9.7846C9.47611 10.11 9.54137 10.3978 9.69834 10.6812C9.79372 10.8536 10.0207 11.0372 9.73962 11.2536C9.51646 11.4251 9.45577 11.3516 9.26976 11.5159C9.21198 11.567 9.26075 11.6551 9.32876 11.6581C9.71363 11.6756 10.4216 11.3566 10.1821 10.8568C9.97301 10.4209 9.75704 10.1051 9.72662 9.5992C9.69162 9.01715 9.95237 8.35731 10.2756 7.88975C10.3331 7.80614 10.1975 7.72895 10.1398 7.81057Z" fill="#F48364"/>
                    <path d="M5.75376 7.98687C6.32892 7.5751 6.94322 8.00017 7.54208 8.03777C7.92297 8.06146 8.1284 7.53887 7.85312 7.28637C7.18074 6.66932 5.8337 6.81544 5.40481 7.63792C5.29614 7.8464 5.53136 8.14614 5.75376 7.98687Z" fill="#231F20"/>
                    <path d="M12.4963 7.98687C12.0598 7.5751 11.5936 8.00017 11.1392 8.03777C10.8502 8.06146 10.6944 7.53887 10.9031 7.28637C11.4134 6.66932 12.4355 6.81544 12.7609 7.63792C12.8436 7.8464 12.6649 8.14614 12.4963 7.98687Z" fill="#231F20"/>
                    <path d="M4.26998 10.1518C4.33693 9.48304 4.27869 8.83237 4.2573 8.16305C4.23941 7.59553 4.25302 7.00065 3.99409 6.48356C3.92256 6.34065 3.6858 6.33958 3.61457 6.48356C3.32431 7.07065 3.38881 7.75327 3.44888 8.38865C3.5114 9.05003 3.6187 9.6553 3.94839 10.2387C4.03918 10.3998 4.25378 10.3125 4.26998 10.1518Z" fill="#231F20"/>
                    <path d="M4.1878 6.00409C4.17297 5.6802 4.13583 5.41241 4.06445 5.30496C3.70556 4.76358 2.69479 5.15166 2.43632 5.61662C2.04732 6.31559 2.48325 7.43429 2.77182 8.09749C3.14798 8.96139 3.92888 8.46432 4.09334 7.80784C4.15341 7.56864 4.21806 6.66821 4.1878 6.00409Z" fill="#231F20"/>
                    <g opacity="0.4">
                      <path d="M6.10764 4.61872C7.26317 4.32556 7.00333 3.30163 5.8478 3.59464C4.69212 3.8878 4.95196 4.91188 6.10764 4.61872Z" fill="white"/>
                    </g>
                    <path d="M10.6855 0.583984L10.9752 1.14768L11.5046 1.45598L10.9752 1.76427L10.6855 2.32782L10.396 1.76427L9.8667 1.45598L10.396 1.14768L10.6855 0.583984Z" fill="#FFFEFF"/>
                    <path d="M12.6275 2.52686L12.8089 2.88009L13.1408 3.07329L12.8089 3.26664L12.6275 3.61987L12.4459 3.26664L12.1143 3.07329L12.4459 2.88009L12.6275 2.52686Z" fill="#FFFEFF"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h3 className="font-roboto font-semibold text-base sm:text-2xl leading-6 sm:leading-10 tracking-normal mb-0.5 text-[#231F20]">Stage 5-7</h3>
              <p className="text-[#606060] text-sm font-roboto font-normal">Extensive balding, almost no regrowth</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end sm:mt-8">
          <button className="bg-[#231F20] dark:bg-[#231F20] text-white dark:text-white px-6 py-2 w-full sm:w-72 rounded-md shadow-[0px_4px_15px_0px_rgba(175,173,173,0.18)]">
            Book your Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HairFallStages;