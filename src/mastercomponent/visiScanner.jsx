import React, { useState, useEffect, useRef } from "react";

const VisitScanner = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const videoRef = useRef(null);
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'ਹਿੰਦੀ' },
        { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    ];

    useEffect(() => {
        const openCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: 'environment' // Use back camera if available
                    }
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing camera:", error);
            }
        };

        openCamera();

        // Cleanup function to stop the camera when component unmounts
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);
    return (
        <>
            <div className="max-w-md  mx-auto bg-no-repeat bg-cover min-h-screen flex flex-col items-center " style={{ backgroundImage: 'url(/scannerbg.webp)' }}>
                <div className="w-[112.18px] h-[54px] mt-[51px]">
                    <img src="./logo23.png" className="object-contain" />
                </div>

                <div className="flex  justify-center flex-col items-center text-center px-[24px]">
                    <div className="mt-[20px]">
                        <h3 className="text-[#121B57] urbanist font-semibold text-[36px]">
                            Visit & Navigate
                        </h3>
                    </div>
                    <div className="mt-[13px]">
                        <p className="text-[20px] text-[#000000] text-center  leading-[26px] urbanist">
                            Scan the QR to locate nearby spots
                            and get guided directions
                        </p>
                    </div>

                    <div className="mt-[34px]">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-[315px] h-[315px] rounded-[24px] border border-[#FFFFFFCC] object-cover"
                            style={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}
                        />
                    </div>
                    <div className="mt-[127px] mb-[59px]">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="42" rx="12" fill="#2E3191" />
                            <path d="M13.667 12.75C13.4239 12.75 13.1905 12.8467 13.0186 13.0186C12.8467 13.1905 12.75 13.4239 12.75 13.667C12.7501 13.9099 12.8468 14.1427 13.0186 14.3145L19.7041 21L13.0186 27.6855C12.8468 27.8573 12.7501 28.0901 12.75 28.333C12.75 28.5761 12.8467 28.8095 13.0186 28.9814C13.1905 29.1533 13.4239 29.25 13.667 29.25C13.9099 29.2499 14.1427 29.1532 14.3145 28.9814L21 22.2959L27.6855 28.9814C27.8573 29.1532 28.0901 29.2499 28.333 29.25C28.5761 29.25 28.8095 29.1533 28.9814 28.9814C29.1533 28.8095 29.25 28.5761 29.25 28.333C29.2499 28.0901 29.1532 27.8573 28.9814 27.6855L22.2959 21L28.9814 14.3145C29.1532 14.1427 29.2499 13.9099 29.25 13.667C29.25 13.4239 29.1533 13.1905 28.9814 13.0186C28.8095 12.8467 28.5761 12.75 28.333 12.75C28.0901 12.7501 27.8573 12.8468 27.6855 13.0186L21 19.7041L14.3145 13.0186C14.1427 12.8468 13.9099 12.7501 13.667 12.75Z" fill="white" stroke="white" stroke-width="0.5" />
                        </svg>

                    </div>
                </div>


            </div>
        </>
    )
}

export default VisitScanner