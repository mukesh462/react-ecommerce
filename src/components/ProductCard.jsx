import { Button, Card, Rate } from 'antd'
import React from 'react'
import TextRender from './TextRender';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'


const { Meta } = Card;
function ProductCard() {
  return (
    <div>
       <Card
    //    loading
    bodyStyle={{padding: "5px"}}
    className=' p-0 m-2 sm:w-52 max-md:w-40 max-lg:w-60 shadow-sm'
  
    cover={<img alt="example" src="https://source.unsplash.com/random/200x200?sig=1" />}
  >
    {/* <TextRender maxLength={34}  text={'lerdsfghfhjgfsdgfsdjgfhjdgfhjgfhjsdgfjsdgfhjgfhjgfhjgfjhf'} /> */}
    {/* <ShoppingCartIcon className='absolute top-0 left' /> */}
    <Meta title="Europe Street beatwetewtwetwetwetwetwetwetwetwet"  />
    <div className="flex justify-between py-2">
        <p className="">$25421</p>
     <span className='flex'><StarIcon className='h-5 text-yellow-400'/>4</span>
    </div>
<Button className='bg-black text-white w-full rounded-0 font-bold flex justify-center items-center '>Add To Cart <ShoppingCartIcon className='text-white h-4 mx-2 stroke-orange-300'/></Button>
  </Card>
    </div>
  )
}

export default ProductCard
