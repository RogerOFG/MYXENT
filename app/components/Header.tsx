import Image from "next/image";
import Link from "next/link";

interface Props {
    patch: string
}

export function Header({ patch }: Props){
    return( 
        <header className="max-w-[90%] m-auto py-5">
            <div className="flex flex-col items-center justify-center w-[750px] max-w-full m-auto">
                <div className="w-full flex justify-center pb-4 border-b border-black dark:border-[#8b8b8b]">
                    <Image className="w-[60px] dark:hidden" src={`${patch}/logo_black.png`} width={100} height={100} alt="" />
                    <Image className="w-[60px] hidden dark:block" src={`${patch}/logo_white.png`} width={100} height={100} alt="" />
                </div>
                <div className="w-full pt-4">
                    <nav className="py-1 bg-gradient-to-r from-gray-400 via-black to-gray-400 dark:bg-gradient-to-r dark:from-black dark:via-gray-500 dark:to-black rounded-lg">
                        <ul className="flex justify-center gap-6 text-[15px] text-white">
                            <li><Link href="../">Inicio</Link></li>
                            <li><Link href="../Products">Productos</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}