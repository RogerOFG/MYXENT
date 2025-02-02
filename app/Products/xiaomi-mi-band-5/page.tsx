import { Products } from '../../products';
import Image from 'next/image';

const url = "img"

export default function Product() {
    const product = Products.find((p) => p.id == 4)

    if (!product){
        return
    }

    return( 
        <div className="pt-14">
            <div className='w-[750px] max-w-full m-auto p-10 rounded-xl bg-[#fff] dark:bg-transparent text-black dark:text-white border dark:border-[#ffffff2d]'>
                {/* IMAGEN Y DESCRIPCION */}
                <div>
                    <h3 className="text-3xl font-medium text-center">{product.name}</h3>
                    <Image src={`${product.svg}`} className='w-[250px] max-w-full m-auto mt-14 mb-8' alt={product.name} width={500} height={500} />
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