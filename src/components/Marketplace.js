import React from 'react'

const Marketplace = () => {
  return (
    <div>
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] justify-around'>
            <a href='/nftPage'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>Continue to NFTPage</button></a>
            <a href='/profile'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>Continue to Profile</button></a>
            <a href='/sellNFT'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>Sell NFTs</button></a>
        </div>
    </div>
  )
}

export default Marketplace