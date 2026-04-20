import React, { use } from 'react';
import Card from '../Card/Card';

const CardHolder = ({CardPromise}) => {
    const CardData = use(CardPromise);
    console.log(CardData);
    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <h1 className='text-5xl font-bold text-[#101727] text-center mb-4'>Premium Digital Tools</h1>
                <p className='text-[#627382] mb-4 text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center mb-10'>
                    <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4'>Products</button>
                    <button className='btn rounded-full rounded-l-none border-none p-4 shadow-none'>Cart(0)</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    CardData.map(card => <Card key={card.id} card={card}/>)
                }
            </div>
        </div>
    );
};

export default CardHolder;