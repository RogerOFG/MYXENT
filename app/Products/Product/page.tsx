"use client"

import { Products } from '../../products';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const url = "../img"

type ProductType = {
    id: number;
    name: string;
    slug: string;
    data: string;
    fullData: string;
    property: string[];
    img: string;
    svg: string;
};

export default function Product() {
    const router = useRouter();
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const slug = searchParams.get('slug');

        if (!slug) {
            router.replace('/404');
            return;
        }

        const foundProduct = Products.find((p) => p.slug === slug);
        if (!foundProduct) {
            router.replace('/404');
            return;
        }
        setProduct(foundProduct);
    }, [router]);

    if (!product) return (
        <div className="pt-14">
            <div className='w-[750px] max-w-full m-auto p-10 rounded-xl bg-[#fff] dark:bg-transparent text-black dark:text-white border dark:border-[#ffffff2d]'>
                {/* IMAGEN Y DESCRIPCION */}
                <div role="status" className="animate-pulse">
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <div className="w-[320px] h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>

                        <div className="flex items-center justify-center w-[200px] h-[345px] bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                            <svg className="w-14 h-14 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        </div>
                    </div>

                    <div className='pt-16'>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[98%] mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[99%] mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[99%] mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[96%] mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[97%] mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[99%] mb-2.5"></div>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

                <div className='w-full border-b border-[#00000023] dark:border-[#ffffff2d] my-[60px]'></div>

                {/* CARACTERISTICAS */}
                <div role="status" className="animate-pulse">
                    <div className="w-[180px] h-7 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                    <div className='flex flex-col gap-10 pt-10'>
                        <div className='flex items-center justify-center gap-2'>
                            <div className="w-9 h-9 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                            <div className='flex flex-col gap-2 w-full'>
                                <div className="w-full max-w-[200px] h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5"></div>
                                <div className="w-full max-w-[190px] h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-2'>
                            <div className="w-9 h-9 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                            <div className='flex flex-col gap-2 w-full'>
                                <div className="w-full max-w-[220px] h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-2'>
                            <div className="w-9 h-9 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                            <div className='flex flex-col gap-2 w-full'>
                                <div className="w-full max-w-[150px] h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-2'>
                            <div className="w-9 h-9 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                            <div className='flex flex-col gap-2 w-full'>
                                <div className="w-full max-w-[180px] h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5"></div>
                                <div className="w-full max-w-[190px] h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>

                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return( 
        <div className="pt-14">
            <div className='w-[750px] max-w-full m-auto p-10 rounded-xl bg-[#fff] dark:bg-transparent text-black dark:text-white border dark:border-[#ffffff2d]'>
                {/* IMAGEN Y DESCRIPCION */}
                <div>
                    <h3 className="sm:text-3xl text-xl font-medium text-center">{product.name}</h3>
                    <Image src={`../${product.svg}`} className='w-[250px] max-w-full m-auto mt-14 mb-8' alt={product.name} width={500} height={500} />
                    <p className="mt-4 whitespace-pre-line">{product.fullData}</p>
                </div>

                <div className='w-full border-b border-[#00000023] dark:border-[#ffffff2d] my-[60px]'></div>

                {/* CARACTERISTICAS */}
                <div>
                    <h3 className='mb-8 text-2xl font-medium'>Caracteristicas</h3>
                    <div className=' flex flex-col gap-7'>
                        {product.property?.map((p, pIndex) => (
                            <div className='flex items-center gap-2' key={pIndex}>
                                <Image src={`${url}/flecha/right-arrow-b.svg`} className='w-[20px] dark:hidden' alt="Arrow" width={20} height={20} />
                                <Image src={`${url}/flecha/right-arrow-w.png`} className='w-[20px] hidden dark:block' alt="Arrow" width={20} height={20} />
                                <p className='whitespace-pre-line'>{p}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full border-b border-[#00000023] dark:border-[#ffffff2d] my-[60px]'></div>

                {/* DONDE COMPRAR */}
                <div>
                    <h3 className='mb-8 text-2xl font-medium'>Donde Comprar</h3>
                    <button 
                        className='py-3 px-12 rounded-xl text-sm text-black font-medium bg-transparent hover:text-white hover:bg-black shadow-[4px_4px_0_0_rgb(0,0,0)] hover:shadow-none translate-x-[-4px] translate-y-[-4px] hover:translate-x-0 hover:translate-y-0 border-2 border-black  ease-out duration-300
                            dark:text-white dark:hover:text-black dark:border-white dark:shadow-white dark:hover:bg-white' 
                        type='button'>Comprar desde ShopXeng
                    </button>
                </div>
            </div>
        </div>
    )
}