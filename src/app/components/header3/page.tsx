import React from "react";
import Image from "next/image";
import Link from "next/link";

const header2 = () => {
    return(
        <div>
        <header className="w-full max-w-[1439px] flex items-center justify-center flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:gap-0">
                <div className="w-full max-w-[1050px] bg-[#FFFFFF] flex items-center py-[12px] max-md:bg-white max-md:py-[24px]">
                <nav className="w-full max-w-[1050px] flex justify-between gap-28 max-md:w-full max-md:max-w-3xl max-md:px-6">
                    <div className="text-[24px] cursor-pointer">
                        <h3 className="font-bold max-md:font-bold max-md:text-[24px]">Bandage</h3>
                    </div>
                    <div className="w-full bg-white flex justify-between gap-[32px] max-md:hidden">
                        <div className="flex items-center gap-2s">
                            <Link href="/" className="p-[10px] cursor-pointer">Home</Link>
                            <Link href="/shop/" className="p-[10px] cursor-pointer">Products</Link>
                            <Link href="/pricing/" className="p-[10px] cursor-pointer">Pricing</Link>
                            <Link href="#" className="p-[10px] cursor-pointer">Contact</Link>
                        </div>
                        <div className="text-[14px] flex items-center gap-[20px]">
                           <div className="text-[#23A6F0] font-bold flex items-center gap-[5px]">
                                <Link href={"#"}>Login</Link>
                           </div>
                           <div className="rounded text-[14px] bg-[#23A6F0] text-white font-bold flex items-center gap-[5px]">
                                <Link href={"#"} className="flex gap-2 py-2 px-4">Become a member 
                                 <Image src={"/icons/Rightarrow.svg"} 
                                    alt={"icon"} 
                                    width={"12"} 
                                    height={"10"}/>
                                </Link>
                           </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </div>
    )
}
export default header2;