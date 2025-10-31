import React, { useState } from 'react'

function PreviewImage() {
    const [image, setImage] = useState('https://picsum.photos/200/300?image=1050');
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black/50 z-[999] flex justify-center items-center'>

        <div className='absolute top-10 right-8'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_65_4001)">
<path d="M9.99967 0.833332C5.73134 0.833332 0.833008 1.875 0.833008 10C0.833008 18.125 5.73134 19.1667 9.99967 19.1667C14.268 19.1667 19.1663 18.125 19.1663 10C19.1663 1.875 14.268 0.833332 9.99967 0.833332ZM9.99967 17.5C5.49801 17.5 2.49967 16.225 2.49967 10C2.49967 3.775 5.49801 2.5 9.99967 2.5C14.5013 2.5 17.4997 3.775 17.4997 10C17.4997 16.225 14.5013 17.5 9.99967 17.5Z" fill="black"/>
<path d="M13.0018 9.19417C12.9526 9.16667 11.9968 8.645 10.8335 8.4525V5.83333C10.8335 5.37333 10.4601 5 10.0001 5C9.54014 5 9.16681 5.37333 9.16681 5.83333V8.46167C7.99014 8.6725 7.02764 9.23333 6.97847 9.2625C6.66431 9.4475 6.50764 9.81583 6.59014 10.17C7.25931 13.0267 9.38764 14.7525 9.48181 14.8192C10.066 15.2325 10.5335 14.8075 10.5543 14.7892C10.9235 14.4742 12.7618 12.7917 13.4085 10.1192C13.4968 9.75417 13.3301 9.375 13.0018 9.19417Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_65_4001">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

        </div>
        <div className='w-full h-[80%] bg-white rounded-2xl'>
            <img src={image} alt="preview" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default PreviewImage