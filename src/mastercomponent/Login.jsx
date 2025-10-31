import React, { useState } from "react";

const Login = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'हिंदी' },
        { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    ];
    return (
        <>
            <div className="max-w-md  mx-auto bg-no-repeat bg-cover min-h-screen flex flex-col items-center " style={{ backgroundImage: 'url(/login.png)' }}>
                <div className="w-[112.18px] h-[54px] mt-[51px]">
                    <img src="./logo23.png" className="object-contain" />
                </div>

                <div className="flex  justify-center flex-col items-center text-center px-[24px]">
                    <div className="mt-[20px]">
                        <h3 className="text-[#FFFFFF] urbanist font-bold text-[36px]">
                            Login
                        </h3>
                    </div>
                    <div className="mt-[13px]">
                        <p className="text-[20px] text-white text-center  leading-[26px] urbanist">
                            To get started, verify your WhatsApp number — or simply sign
                            in with Google.
                        </p>
                    </div>
                    <div className="w-full px-[24px] mt-[34px] text-justify">
                        <label className="block text-white text-[22px] font-semibold urbanist mb-[12px]">
                            WhatsApp Number
                        </label>
                        <input
                            type="number"
                            placeholder="Enter"
                            className="w-full h-[48px] rounded-[11px] bg-white px-[19px] text-[20px] Urbanist text-[#000000] placeholder-[#B9B8C1] urbanist outline-none"
                        />
                        <button
                            className="mt-[30px] w-full h-[58px] rounded-[16px] text-white text-[18px] font-semibold tracking-wide urbanist"
                            style={{ backgroundColor: '#2E3191' }}
                        >
                            CONTINUE
                        </button>

                    </div>
                    <div className="py-[22px]  text-center text-white text-[16px] tracking-[0.1em] urbanist font-semibold">
                        OR
                    </div>
                    <div className=" w-full px-[24px]">
                        <button
                            className="urbanist flex items-center justify-center gap-3 w-full h-[64px] rounded-[16px] text-white text-[20px] font-semibold tracking-wide"
                            style={{ backgroundColor: '#FFFFFF' }}
                        >
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2578 5.02721C14.0141 4.99855 15.7126 5.69251 16.9969 6.96346L20.456 3.37596C18.2367 1.17039 15.2989 -0.0390273 12.2578 0.000960935C9.98563 0.000404079 7.75806 0.670256 5.82426 1.93561C3.89045 3.20096 2.32665 5.01192 1.30774 7.16596L5.27128 10.4297C5.75592 8.86678 6.69091 7.50463 7.94439 6.53535C9.19788 5.56607 10.7066 5.03856 12.2578 5.02721Z" fill="#E43E2B" />
                                <path d="M24.0245 13.2903C24.0389 12.3967 23.9519 11.5044 23.7652 10.6328H12.2576V15.4578H19.0132C18.885 16.3037 18.5969 17.1135 18.1661 17.8382C17.7353 18.563 17.1707 19.1879 16.5064 19.6753L20.3745 22.8528C21.5799 21.6184 22.528 20.1296 23.1573 18.4825C23.7866 16.8353 24.0832 15.0666 24.028 13.2903H24.0245Z" fill="#3B7DED" />
                                <path d="M5.28536 15.5713C5.01737 14.7437 4.87922 13.8751 4.8764 13C4.88129 12.1264 5.01449 11.2589 5.27122 10.4288L1.30768 7.16504C0.448026 8.97521 0.000244141 10.9738 0.000244141 13.0007C0.000244141 15.0275 0.448026 17.0261 1.30768 18.8363L5.28536 15.5713Z" fill="#F0B501" />
                                <path d="M12.2579 26.001C15.2436 26.0906 18.1482 24.9638 20.3747 22.8523L16.5067 19.6748C15.2525 20.5665 13.7672 21.021 12.2579 20.9748C10.708 20.965 9.20037 20.4379 7.94885 19.4681C6.69732 18.4984 5.76547 17.1353 5.2855 15.5723L1.32196 18.8373C2.33812 20.9903 3.89936 22.8009 5.83084 24.0661C7.76231 25.3314 9.98775 26.0013 12.2579 26.001Z" fill="#2BA24C" />
                            </svg>
                            <span className="text-[#122750] font-bold  urbanist">Login with Google</span>
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Login