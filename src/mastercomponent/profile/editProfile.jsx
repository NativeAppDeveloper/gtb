

import React, { useState } from "react";

const EditProfile = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: '',
        message: ''
    });
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'ਹਿੰਦੀ' },
        { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleContinue = () => {
        // Handle continue action after success
        console.log('Continue clicked');
    };


    return (
        <>
        
            {
                !isSubmitted && (
                    <>
                        <div className="max-w-md  mx-auto bg-no-repeat bg-cover min-h-screen flex flex-col" style={{ backgroundImage: 'url(/login.png)' }}>
                            <div className="w-[112.18px] h-[54px] pt-[44px] px-[24px]">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.6166 11H4.58325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.9999 17.4167L4.58325 11L10.9999 4.58333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>

                            <div className="flex  justify-center flex-col items-center text-center ">
                                <div className="max-w-[239px]">
                                    <h3 className="text-[#FFFFFF] urbanist font-semibold text-[32px] text-center leading-[46px]">
                                    Edit Profile
                                    </h3>
                                </div>
                          
                                <form onSubmit={handleSubmit} className="w-full px-[24px] mt-[34px] text-justify">
                                    <div className="">
                                        <label className="block text-white text-[22px] font-semibold urbanist mb-[10px]">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter"
                                            className="w-full h-[48px] rounded-[11px] bg-white px-[19px] text-[20px] Urbanist text-[#000000] placeholder-[#B9B8C1] urbanist outline-none"
                                        />
                                    </div>
                                    <div className="mt-[18px]">
                                        <label className="block text-white text-[22px] font-semibold urbanist mb-[10px]">
                                            WhatsApp Number
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.whatsapp}
                                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                            placeholder="Enter"
                                            className="w-full h-[48px] rounded-[11px] bg-white px-[19px] text-[20px] Urbanist text-[#000000] placeholder-[#B9B8C1] urbanist outline-none"
                                        />
                                    </div>

                                    <div className="mt-[18px]">
                                        <label className="block text-white text-[22px] font-semibold urbanist mb-[10px]">
                                            Email ID
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="Enter"
                                            className="w-full h-[48px] rounded-[11px] bg-white px-[19px] text-[20px] Urbanist text-[#000000] placeholder-[#B9B8C1] urbanist outline-none"
                                        />
                                    </div>


                     
                                    <button
                                        type="submit"
                                        className="mt-[30px] w-full h-[58px] mb-[55px] rounded-[16px] text-white text-[18px] font-semibold tracking-wide urbanist"
                                        style={{ backgroundColor: '#2E3191' }}
                                    >
                                        CONTINUE
                                    </button>

                                </form>

                            </div>

                            {/* Success Overlay */}
                            {isSubmitted && (
                                <div className="fixed inset-0 min-h-screen bg-[#EDCBB4D9] backdrop-blur-xl z-50 flex justify-center overflow-y-auto">
                                    <div className="w-full max-w-md flex flex-col">
                                        <div className="flex justify-center flex-col items-center text-center px-[24px] pt-[60px]">
                                            <div className="max-w-[239px] mb-[14px]">
                                                <h3 className="text-[#6B5F5A] urbanist font-semibold text-[32px] text-center leading-[46px]">
                                                    Take Pledge
                                                    <br />
                                                    for Langar Sewa
                                                </h3>
                                            </div>
                                            <div className="px-[24px] leading-[24px] mb-[34px]">
                                                <p className="text-[20px] text-[#8C807A] text-center leading-[26px] urbanist">
                                                    Participate in Seva from anywhere in the world. Your contribution strengthens this collective act of remembrance.
                                                </p>
                                            </div>

                                            {/* Success Card */}
                                            <div className="w-full px-[24px]">
                                                <div className="rounded-[20px] bg-[#F9D4AC] p-[30px] flex flex-col items-center">
                                                    {/* Checkmark Icon */}
                                                    <div className="mb-[20px]">
                                                        <svg width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M35.9912 6.1755C32.0083 2.19267 26.7126 0 21.0833 0C15.4541 0 10.1583 2.19458 6.1755 6.1755C2.19267 10.1564 0 15.4502 0 21.0833C0 26.7164 2.19267 32.0083 6.22917 36.0429L13.7866 43.0253C15.7454 44.9439 18.3387 46 21.0833 46C23.828 46 26.4193 44.9439 28.3398 43.0617L35.9912 35.9912C39.974 32.0083 42.1667 26.7145 42.1667 21.0833C42.1667 15.4522 39.974 10.1564 35.9912 6.1755ZM32.0064 16.698L20.9032 27.6364C20.1614 28.3782 19.1858 28.7481 18.2064 28.7481C17.227 28.7481 16.2418 28.3743 15.4924 27.6268L10.1603 22.4595C9.40125 21.7216 9.38208 20.5083 10.12 19.7493C10.8579 18.9865 12.0712 18.9712 12.8302 19.7072L18.1834 24.8956L29.3173 13.9687C30.0744 13.2269 31.2857 13.2365 32.0275 13.9897C32.7712 14.743 32.7635 15.9563 32.0083 16.6999L32.0064 16.698Z" fill="#F28524" />
                                                        </svg>
                                                    </div>

                                                    {/* Pledge Text */}
                                                    <div className="mb-[15px]">
                                                        <p className="text-[#3A306B] urbanist font-semibold text-[22px] leading-[30px]">
                                                            Waheguru Ji Ka Khalsa,
                                                        </p>
                                                        <p className="text-[#3A306B] urbanist font-semibold text-[22px] leading-[30px]">
                                                            Waheguru Ji Ki Fateh!
                                                        </p>
                                                    </div>

                                                    {/* Decorative Separator */}
                                                    <div className="mb-[15px]">
                                                        <svg width="225" height="18" viewBox="0 0 225 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M106.424 7.32414C106.703 8.60673 106.633 9.96836 106.134 11.197C105.353 13.171 103.366 14.2345 101.359 14.5211C99.7163 14.7787 98.0517 14.6547 96.4204 14.4067C94.4843 14.0963 92.5916 13.5758 90.7367 12.9602C88.3149 12.1493 84.9667 10.9952 82.5328 10.1965C78.0197 8.70633 73.4005 7.29586 68.7014 6.54982C68.1442 6.44894 67.3768 6.36348 66.8164 6.28251C66.1186 6.17456 64.6765 6.05632 63.9717 5.98114C63.3959 5.94708 61.6905 5.81728 61.1084 5.80636C60.6445 5.78901 59.6604 5.74788 59.1927 5.72861C58.3211 5.71832 57.185 5.68234 56.3122 5.67527C54.3869 5.65535 52.461 5.66242 50.5352 5.64764C53.0853 5.35269 55.6585 5.11173 58.224 4.99092C63.3832 4.70818 68.6241 4.98964 73.672 6.13921C76.7909 6.82164 79.9602 7.79643 82.9871 8.81236C86.1219 9.84498 89.4037 11.0961 92.5118 12.1866C94.7418 12.921 97.0575 13.5495 99.4 13.703C100.174 13.7506 100.947 13.7358 101.711 13.6272C105.112 13.1716 106.687 10.6623 106.423 7.32349L106.424 7.32414Z" fill="#E75A08" />
                                                            <path d="M106.509 15.5273C106.317 13.1453 105.452 10.7517 103.91 8.92353C102.381 7.09345 100.122 6.01777 97.7833 5.72283C94.5207 5.26274 91.258 6.05054 88.12 6.90325C78.95 9.42024 70.3921 13.8039 61.1428 16.0857C56.4035 17.2462 51.4866 17.8451 46.6099 17.3863C46.3121 17.3536 45.5447 17.2578 45.2392 17.2231C44.7146 17.1563 43.9511 17.0059 43.4233 16.9217C36.8743 15.6237 30.6979 12.9776 24.4883 10.6084C17.1413 7.81829 9.50165 5.33728 1.58148 5.18434L1.35592 5.18627L0.904159 5.19013L0 5.19462C0.474124 5.16571 1.12972 5.12715 1.58084 5.10209C2.20001 5.09824 3.00641 5.06932 3.61855 5.09374C3.85945 5.10081 4.54444 5.12265 4.75146 5.12844C4.90099 5.13872 5.27735 5.16507 5.42942 5.17535C6.10291 5.21133 7.0256 5.30708 7.68758 5.37969C9.31187 5.56668 11.009 5.86869 12.6103 6.20026C21.4979 8.03484 29.751 11.9706 38.4226 14.5223C40.4175 15.0955 42.4686 15.6032 44.5185 15.9309C50.7032 16.9397 57.0316 16.0266 63.0323 14.3585C72.3116 11.7631 81.0765 7.40253 90.5679 5.4735C94.9558 4.52827 100.24 4.53598 103.562 8.01427C105.461 10.0185 106.434 12.7906 106.51 15.528L106.509 15.5273Z" fill="#E75A08" />
                                                            <path d="M98.9591 0C101.698 0.237755 104.514 1.29802 106.573 3.16279C107.96 4.42161 108.928 5.81986 109.33 7.68207C109.567 8.71919 109.605 9.79745 109.46 10.8506L109.375 10.8526C109.304 10.555 109.248 10.2614 109.192 9.96259C109.138 9.75632 109.088 9.54555 109.041 9.33993C108.982 9.06362 108.847 8.64272 108.773 8.36513C108.687 8.12866 108.611 7.89155 108.528 7.65508C108.432 7.43274 108.343 7.18471 108.245 6.96559C108.157 6.78117 108.068 6.59225 107.984 6.4059C107.481 5.41054 106.898 4.45373 106.104 3.65758C104.677 2.21498 102.847 1.22476 100.934 0.587962C100.286 0.378481 99.623 0.195987 98.9514 0.0848208L98.9591 0Z" fill="#E75A08" />
                                                            <path d="M118.576 7.78165C118.313 11.1109 119.882 13.6304 123.289 14.0854C124.053 14.194 124.824 14.2081 125.599 14.1612C127.942 14.0076 130.258 13.3792 132.488 12.6447C135.594 11.5543 138.877 10.3025 142.012 9.27052C145.039 8.25459 148.208 7.2798 151.327 6.59673C156.374 5.44716 161.616 5.1657 166.775 5.44844C169.34 5.56925 171.913 5.81021 174.464 6.10516C172.538 6.11994 170.612 6.11287 168.687 6.13279C167.81 6.14114 166.69 6.17456 165.806 6.18612C165.324 6.20604 164.372 6.24524 163.891 6.26388C163.299 6.2748 161.654 6.40075 161.028 6.43866C160.32 6.51191 158.854 6.63722 158.183 6.74003C157.62 6.82099 156.846 6.90839 156.298 7.00734C151.6 7.75274 146.98 9.16385 142.467 10.654C140.031 11.4534 136.688 12.6055 134.263 13.4177C130.937 14.4979 127.15 15.4894 123.64 14.9786C121.635 14.692 119.645 13.6298 118.865 11.6545C118.366 10.4259 118.297 9.06425 118.576 7.78165H118.576Z" fill="#E75A08" />
                                                            <path d="M118.49 15.9849C118.566 13.2481 119.54 10.4754 121.438 8.47115C124.764 4.99286 130.044 4.98515 134.432 5.93038C143.924 7.85941 152.688 12.22 161.968 14.8154C167.968 16.4835 174.297 17.3966 180.482 16.3878C182.531 16.06 184.583 15.5524 186.578 14.9792C195.249 12.4282 203.503 8.49171 212.39 6.65714C213.989 6.32621 215.691 6.02356 217.313 5.83657C218.015 5.7601 218.878 5.67014 219.571 5.63223C220.321 5.57311 220.69 5.57311 221.382 5.54997C222.086 5.52491 222.741 5.55447 223.419 5.55769L223.645 5.57054L224.097 5.59624L225 5.65022L224.096 5.64572C223.856 5.64443 223.626 5.64186 223.419 5.64058C223.005 5.65472 222.25 5.68235 221.84 5.69713C221.445 5.72797 220.666 5.78516 220.265 5.81408C217.055 6.13344 213.87 6.76702 210.764 7.62808C202.596 9.81736 194.971 13.5842 186.886 16.0401C184.854 16.6448 182.763 17.1891 180.669 17.5341C175.839 18.3586 170.862 18.0199 166.085 17.0387C157.168 15.2401 148.942 11.1629 140.324 8.39854C138.913 7.94102 137.447 7.50085 136.01 7.13008C133.714 6.5177 131.364 6.00814 128.98 6.04605C126.636 6.07625 124.224 6.65714 122.366 8.14858C120.006 10.0101 118.734 13.02 118.49 15.9836V15.9849Z" fill="#E75A08" />
                                                            <path d="M126.049 0.54234C123.571 0.996646 121.136 2.06847 119.254 3.76682C118.394 4.54948 117.713 5.505 117.189 6.53699C117.029 6.82036 116.895 7.13137 116.754 7.42375C116.656 7.64223 116.566 7.89155 116.471 8.11324C116.389 8.34971 116.313 8.58682 116.227 8.82329C116.169 9.04113 116.04 9.45688 115.987 9.67407C115.904 10.0481 115.801 10.4214 115.735 10.7999C115.701 10.9689 115.666 11.1392 115.624 11.3101L115.539 11.3082C115.394 10.255 115.432 9.17735 115.67 8.13958C116.072 6.27674 117.039 4.87913 118.427 3.62031C119.463 2.6725 120.712 1.93803 122.007 1.42011C123.3 0.911182 124.656 0.564831 126.04 0.45752L126.048 0.54234H126.049Z" fill="#E75A08" />
                                                        </svg>
                                                    </div>

                                                    {/* Success Message */}
                                                    <p className="text-[#3A306B] urbanist font-semibold text-[20px] leading-[26px]">
                                                        Pledge submitted successfully!
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Your Message Input */}
                                            <div className="w-full px-[24px] mt-[24px]">
                                                <label className="block text-[#8C807A] text-[22px] font-semibold urbanist mb-[10px]">
                                                    Your Message
                                                </label>
                                                <textarea
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    placeholder="Enter"
                                                    className="w-full h-[106px] rounded-[11px] bg-[#F0E8E2] px-[19px] pt-[13px] text-[20px] urbanist text-[#000000] placeholder-[#C2B8B2] outline-none"
                                                />
                                            </div>

                                            {/* Continue Button */}
                                            <button
                                                onClick={handleContinue}
                                                className="mt-[30px] w-full mx-[24px] h-[58px] mb-[55px] rounded-[16px] text-[#E8DED8] text-[18px] font-semibold tracking-wide urbanist"
                                                style={{ backgroundColor: '#B2A6A0' }}
                                            >
                                                CONTINUE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </>
                )
            }

        </>
    )
}

export default EditProfile