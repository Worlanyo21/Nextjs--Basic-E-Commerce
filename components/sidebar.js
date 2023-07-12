import Link from "next/link";
import Image from "next/image";
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'


export default function Sidebar({children}){

    return(
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bgwhite border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href='/'>
                        <div className="bg-purple-900 text-white p-3 rounded-lg inline-block">
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
                    <span className="border-b-[2px] bg-gray-200 w-full m-2 "></span>
                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <Link href='/customers'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <Link href='/orders'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <HiOutlineShoppingBag size={20} />
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <FiSettings size={20} />
                        </div>
                    </Link>
                    
                </div>
                Sidebar</div>
           <main className="ml-20 w-full">{children}</main>
        </div>
    )
}