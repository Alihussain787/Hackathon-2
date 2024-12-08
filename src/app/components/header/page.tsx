import React from "react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
    return(
        <div>
        <header className="w-full max-w-[1439px] flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:gap-0">
            <div className="w-full max-w-[1439px] bg-[#252B42] flex items-center justify-center">
                <div className="w-full text-white flex justify-between py-[10px] px-[38px] max-md:hidden">
                    <div className="flex gap-[10px] font-bold">
                        <div className="flex gap-[5px] py-[10px] ">
                            <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/phone.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            <p>(225) 555-0118</p>
                        </div>
                        <div className="flex gap-[5px] p-[10px]">
                        <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/mail.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            <p>michelle.rivera@example.com</p>
                        </div>
                    </div>
                    <div className="font-bold flex items-center">
                        <p>Follow Us  and get a chance to win 80% off</p>
                    </div>
                    <div className="flex gap-2 font-bold items-center">
                        <p>Follow us : </p>
                        <ul className="flex items-center justify-center gap-[12px]">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"icons/insta.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/youtube.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/facebook.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/twitter.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                </div>
                <div className="w-full bg-[#FFFFFF] flex items-center py-[12px] px-[38px] max-md:bg-white max-md:py-[24px]">
                <nav className="w-full flex justify-between gap-28 max-md:w-full max-md:max-w-3xl max-md:px-6">
                    <div className="text-[24px] cursor-pointer">
                        <h3 className="font-bold max-md:font-bold max-md:text-[24px]">Bandage</h3>
                    </div>
                    <div className="w-full bg-white flex justify-between gap-[32px] max-md:hidden">
                        <div className="flex items-center gap-2s">
                            <Link href="/" className="p-[10px] cursor-pointer">Home</Link>
                            <Link href="/shop/" className="p-[10px] cursor-pointer">Shop</Link>
                            <Link href="/about/" className="p-[10px] cursor-pointer">About</Link>
                            <Link href="#" className="p-[10px] cursor-pointer">Blog</Link>
                            <Link href="#" className="p-[10px] cursor-pointer">Contact</Link>
                            <Link href="#" className="p-[10px] cursor-pointer">Pages</Link>
                        </div>
                        <div className="flex items-center gap-[20px]">
                           <div className="text-[#23A6F0] font-bold flex items-center gap-[5px]">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/man.svg"} 
                                    alt={"icon"} 
                                    width={"12"} 
                                    height={"12"}/>
                                <Link href={"#"}>Login / Register</Link>
                           </div>
                           <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/search.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>

                            <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/cart.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            
                            <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/heart.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </div>
    )
}
export default header;