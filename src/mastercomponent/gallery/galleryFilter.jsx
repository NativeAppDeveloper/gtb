import React from 'react'

function GalleryFilter() {
  return (
    <div className='fixed top-0 left-0 w-screen   h-[100dvh] bg-black/50 z-[999] flex justify-end items-end'>
        <div className='w-[100%] mx-auto h-[70%] bg-[#F3EBE4] rounded-tl-2xl rounded-tr-2xl p-8'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>Filter with date </h2>
            </div>

            <div>
               {
                Array.from({length: 3}).map((_, index) => (
                    <div key={index} className='flex justify-between items-center mt-2'>
                        <p>23 Nov 2025</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 0H3.33333C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V3.33333C15.9989 2.4496 15.6474 1.60237 15.0225 0.97748C14.3976 0.352588 13.5504 0.00105857 12.6667 0ZM14.6667 12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333H12.6667C13.1971 1.33333 13.7058 1.54405 14.0809 1.91912C14.456 2.29419 14.6667 2.8029 14.6667 3.33333V12.6667Z" fill="#858BB7"/>
</svg>

                    </div>
                ))
               }
            </div>

            {/* Buttons */}

            <div className='flex justify-between items-center mt-4 absolute bottom-0 left-0 w-full p-8'>
                <button className=' text-[#E82929] px-4 py-2 rounded-md font-semibold'>Clear Filter </button>
                <button className='bg-[#121B57] text-white px-4 py-2 rounded-[16px] h-[54px] w-[147px] text-lg'>Apply</button>
            </div>
            
        </div>
    </div>
  )
}

export default GalleryFilter