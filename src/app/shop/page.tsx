import Header from "../components/header2/page";
import Footer from "../components/footer2/page";
import Image from "next/image";
import Link from "next/link";

const ProductListPage = () => {
    return(
        <div>
        <Header />
        <section className="w-full bg-[#FAFAFA] flex flex-col items-center justify-center max-md:mt-[870px]">
            <div className="w-full max-w-[1050px] bg-[#FAFAFA] flex items-center justify-center py-10 max-md:w-full max-md:max-w-3xl max-md:block">
                <div className="w-full flex items-center max-md:justify-center">
                        <h1 className="text-24px text-[#252B42] font-bold">Shop</h1>
                </div>
                <div className="flex items-center justify-center gap-2s">
                    <Link href="/" className="p-[10px] cursor-pointer">Home</Link>
                        <span>
                            <Image src={"/icons/arrow-right-2.svg"} 
                                alt={"icon"} 
                                width={"9"} 
                                height={"16"}/>
                        </span>
                    <Link href="/shop/" className="p-[10px] cursor-pointer text-[#BDBDBD]">Shop</Link>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className=" flex items-center justify-center w-full max-w-[1088px] pb-[48px] gap-4 cursor-pointer max-md:flex-col">
                    <Link href="/shopnow/">
                        <div id="shop-img1" className="border text-white w-[206px] h-[223px] flex flex-col items-center justify-center">
                            <h1 className="text-[16px] font-bold">CLOTHS</h1>
                            <p className="text-[14px]">5 Items</p>
                        </div>
                    </Link>
                    
                    <Link href="/shopnow/">
                     <div id="shop-img2" className="border text-white w-[206px] h-[223px] flex flex-col items-center justify-center">
                        <h1 className="text-[16px] font-bold">CLOTHS</h1>
                        <p className="text-[14px]">5 Items</p>
                    </div>
                    </Link>
                   
                    <Link href="/shopnow/">
                    <div id="shop-img3" className="border text-white w-[206px] h-[223px] flex flex-col items-center justify-center">
                        <h1 className="text-[16px] font-bold">CLOTHS</h1>
                        <p className="text-[14px]">5 Items</p>
                    </div>
                    </Link>
                    
                    <Link href="/shopnow/">
                    <div id="shop-img4" className="border text-white w-[206px] h-[223px] flex flex-col items-center justify-center">
                        <h1 className="text-[16px] font-bold">CLOTHS</h1>
                        <p className="text-[14px]">5 Items</p>
                    </div>
                    </Link>
                    <Link href="/shopnow/">
                    <div id="shop-img5" className="border text-white w-[206px] h-[223px] flex flex-col items-center justify-center">
                        <h1 className="text-[16px] font-bold">CLOTHS</h1>
                        <p className="text-[14px]">5 Items</p>
                    </div>
                    </Link>
                    
                </div>
            </div>
            <div className="w-full bg-white flex items-center justify-center py-10 max-md:w-full max-md:max-w-3xl">
                <div className="w-full max-w-[1050px] flex justify-between items-center max-md:flex-col max-md:gap-6">
                    <h6 className="text-[14px] text-[#737373] font-bold">Showing all 12 results</h6>
                    <div className="flex items-center jusity-center gap-2">
                        <h6 className="text-[14px] text-[#737373] font-bold">Views: </h6>
                        <div className="p-[10px] rounded border border-[#ECECEC]">
                            <Image src={"/icons/icon-1.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                        <div className="p-[11px] rounded border border-[#ECECEC]">
                            <Image src={"/icons/icon-2.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="cursor-pointer flex items-center justify-center gap-2 border w-[141px] h-[50px] text-[#737373]">
                            Popularity
                            <Image src={"/icons/arrow-bot.svg"} 
                                alt={"icon"} 
                                width={"14"} 
                                height={"14"}/>
                        </div>
                        <button className="bg-[#23A6F0] w-[94px] h-[50px] text-white">Filter</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full max-w-[1439px] bg-[#FAFAFA] py-[50px] flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex items-center gap-20 max-md:flex-col">
                <Image src={"/icons/brand-logo-1.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-2.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-3.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-4.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-5.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-6.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
            </div>
        </section>
        <Footer />
            <section className="w-full max-w-[1439px] bg-white py-[100px] flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex flex-col items-center gap-10">
                <div className="fp">
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center mb-[100px]">
                        <Image src={"image/p1.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p2.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p3.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p4.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p5.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p6.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p7.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p8.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p9.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p10.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p11.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                <Link href="/shopnow/">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/p12.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"300"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </Link>
                </div>
                <div className="border border-[#BDBDBD] rounded w-[313px] h-[74px] flex mt-[50px]">
                    <div className="cursor-pointer border-r w-1/4 h-full flex items-center justify-center bg-[#F3F3F3] text-[#BDBDBD] font-bold">
                        First
                    </div>
                    <div className="w-1/6 h-full border-r flex items-center justify-center text-[#23A6F0]">1</div>
                    <div className="w-1/6 h-full border-r flex items-center justify-center text-white bg-[#23A6F0]">2</div>
                    <div className="w-1/6 h-full border-r flex items-center justify-center text-[#23A6F0]">3</div>
                    <div className="cursor-pointer w-1/4 h-full- flex items-center justify-center text-[#23A6F0] font-bold">
                        Next
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}
export default ProductListPage;
