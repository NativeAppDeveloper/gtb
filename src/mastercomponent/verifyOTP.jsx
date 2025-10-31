import React, { useEffect, useRef, useState } from "react";

const VerifyOTP = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'हिंदी' },
        { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    ];
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [seconds, setSeconds] = useState(20);

    useEffect(() => {
        if (seconds <= 0) return;
        const id = setInterval(() => setSeconds((s) => s - 1), 1000);
        return () => clearInterval(id);
    }, [seconds]);


    const handleChange = (index, value) => {
        if (!/^[0-9]?$/.test(value)) return;
        const next = [...otp];
        next[index] = value;
        setOtp(next);
        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

    const isComplete = otp.every((d) => d !== "");

    return (
        <>
            <div className="max-w-md  mx-auto bg-no-repeat bg-cover min-h-screen flex flex-col items-center " style={{ backgroundImage: 'url(/login.png)' }}>
                <div className="w-[112.18px] h-[54px] mt-[51px]">
                    <img src="./logo23.png" className="object-contain" />
                </div>

                <div className="flex  justify-center flex-col items-center text-center px-[24px]">
                    <div className="mt-[20px]">
                        <h3 className="text-[#FFFFFF] urbanist font-bold text-[36px]">
                            Verify
                        </h3>
                    </div>
                    <div className="mt-[13px]">
                        <p className="text-[20px] text-white text-center  leading-[26px] urbanist">
                            To get started, verify your WhatsApp number — or simply sign
                            in with Google.
                        </p>
                        <p className="text-white urbanist text-[20px] font-bold">
                            +91 9568 850966
                        </p>
                    </div>
                    <div className="w-full min-w-[297px] max-w-[297px] mt-[24px]">
                        <p className="text-[#FFFFFF] urbanist text-[22px] font-semibold text-justify">
                            Verification Code
                        </p>
                        <div className="flex gap-[35px] justify-center mt-[15px]">
                            {otp.map((digit, idx) => (
                                <input
                                    key={idx}
                                    ref={inputRefs[idx]}
                                    type="tel"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(idx, e.target.value.replace(/\D/g, '').slice(-1))}
                                    onKeyDown={(e) => handleKeyDown(idx, e)}
                                    className="w-[48px] h-[48px] rounded-[11px] bg-white text-center text-[20px] urbanist text-[#000000] outline-none"
                                />
                            ))}
                        </div>
                        <button
                            disabled={!isComplete}
                            className={`mt-[30px] w-full h-[58px] rounded-[16px] text-white text-[18px] font-semibold tracking-wide urbanist ${isComplete ? '' : 'opacity-60 cursor-not-allowed'}`}
                            style={{ backgroundColor: '#2E3191' }}
                        >
                            SUBMIT
                        </button>
                        <div className="mt-[30px] text-center text-white text-[16px] urbanist">
                            Re-send code in <span className="font-bold">0:{seconds.toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default VerifyOTP