import React from 'react';
import { Carousel } from '@material-tailwind/react';
import CarouselTitle from '../../components/CarouselTitle';
import Products from '../../dummyData/FeaturedProducts'

function FeaturedProducts() {
  return (
    <section className='py-10 w-full flex justify-center items-center bg-puti md:py-10 lg:py-10 text-font-color'>
      <Carousel autoplay={true} loop={true} className='relative z-40'>
        {
            Products.map((product) => (
                <div className="relative z-40 h-full w-full flex flex-col justify-center items-center md:gap-0 lg:gap-0 lg:items-start" key={product.id}>
                    <div className='flex justify-center w-full'>
                        <CarouselTitle
                            title={'Featured Products'}
                            subTitle={'Quality Ingredients. Real Results'}
                        />
                    </div>
                    <div className='p-7  w-full flex items-center flex-col '>
                        <div className='flex flex-col items-center gap-10 md:w-[60%] lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:w-[70%] lg:gap-[10rem] w-full'>
                            <img src={product.productImg} alt="" className='h-[12rem]'/>
                            <div className='flex flex-col gap-4 md:gap- lg:gap-4'>
                                <h1 className='text-left font-semibold text-small md:text-center md:text-medium lg:text-medium lg:text-left'>{product.productName}</h1>
                                <p className='text-left font-light text-xSmall md:text-center md:text-xSmall lg:p-0 lg:text-xSmall lg:text-left'>{product.productDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
      </Carousel>
    </section>
  );
}

export default FeaturedProducts;
