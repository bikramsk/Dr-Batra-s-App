import React from "react";

const ChatPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5FAFE] px-2 sm:px-4">
      <div className="w-full max-w-6xl h-[30rem] bg-white rounded-lg shadow-md overflow-hidden flex flex-col border sm:border-none">
        {/* Header */}
        <div className="p-3 sm:p-4 border-b-2 border-[#231F20]/10">
          <h2 className="text-lg sm:text-xl font-roboto font-semibold text-[#231F20] leading-relaxed tracking-normal">
            Chat with Dr. Bella
          </h2>
        </div>

        {/* Chat Content */}
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto">
          <div className="flex items-start space-x-2">
            {/* Avatar */}
            <div className="flex-shrink-0 self-end">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="15.5"
                    transform="matrix(-1 0 0 1 31 0.222656)"
                    fill="white"
                  />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="15.5"
                    transform="matrix(-1 0 0 1 31 0.222656)"
                    stroke="url(#paint0_linear_2521_6631)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2521_6631"
                      x1="16"
                      y1="0"
                      x2="16"
                      y2="32"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0068A2" />
                      <stop offset="1" stopColor="#C22727" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2 font-poppins font-medium leading-[100%] text-xs sm:text-sm tracking-normal">
                <span className="text-[#231F20]">Dr. Bella</span>
                <span className="text-[#231F20]">8:20 PM</span>
              </div>

              <div className="mt-1 sm:mt-2">
                {/* Message Bubble */}
                <div className="bg-white p-2 sm:p-3 rounded-lg self-start max-w-xs sm:max-w-xl border border-[#EAF6FF] rounded-tl rounded-tr rounded-br shadow-md">
                  <p className="text-[#231F20] text-sm sm:text-base">
                    Hi I'm Dr. Bella your assistant from Dr Barto's please
                    select your Gender
                  </p>
                  <div className="mt-2 sm:mt-3 flex space-x-2 sm:space-x-3">
                    <button className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-[#666666] text-xs sm:text-sm hover:bg-gray-200">
                      Male
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-[#666666] text-xs sm:text-sm hover:bg-gray-200">
                      Female
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}

        <div className="p-3 sm:p-4 flex-shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Send a message..."
              className="w-full p-2 h-18 sm:h-14 pr-10 sm:pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#231F20]/40 border border-solid border-[#EAF6FF] placeholder:font-poppins placeholder:text-[#9E9E9E] placeholder:text-sm sm:placeholder:text-base"
            />
            <button className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-1 text-[#231F20] ">
              <svg
                className="w-9 h-9"
                viewBox="0 0 37 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.75"
                  y="0.75"
                  width="35.5"
                  height="35.5"
                  rx="17.75"
                  transform="matrix(-1 0 0 1 35.5 0.722656)"
                  stroke="#231F20"
                  strokeWidth="1.5"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M16.6 23.656L21.6667 28.7227L28 9.72266L9 16.056L14.0667 21.1227L20.4 17.3227L16.6 23.656Z"
                  fill="#231F20"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
