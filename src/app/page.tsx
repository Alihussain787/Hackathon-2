import Header from "./components/header/page";
import Footer from "./components/footer/page";
import Image from "next/image";
import Link from "next/link";

const mainPage = () => {
    return(
    <div>
        <Header />

        <section id="backImg" className="w-full max-w-[1439px] h-[716px] flex items-center justify-center max-md:w-full max-md:max-w-3xl max-md:flex-col">
            <div className="text-white w-[1044px] h-[651px] flex flex-col gap-[35px] justify-center max-md:px-6 max-md:w-full max-md:max-w-3xl max-md:py-[100px] max-md:gap-[24px]">
                <div className="w-[580px] flex flex-col gap-[35px] max-md:w-full max-md:max-w-3xl max-md:gap-[24px]">
                    <p className="text-[16px] font-bold">SUMMER 2020</p>
                    <h1 className="text-[56px] font-bold">NEW COLLECTION</h1> 
                    <p className="text-[20px] text-[#FAFAFA]">We know how large objects will act, 
                    but things on a small scale.</p>  
                </div>
                <button className="w-[221px] h-[62px] bg-[#2DC071] text-white font-bold text-[24px] rounded-[5px]">Shop Now</button>
            </div>
        </section>
        <section className="full max-w-[1439px] bg-[#FAFAFA] flex flex-col items-center justify-center gap-[64px] py-[64px] max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex flex-col gap-10">
                <div className="w-full flex flex-col items-center justify-center max-md:px-6 max-md:text-center">
                    <h1 className="text-[24px] text-[#252B42] font-bold">EDITOR’S PICK</h1>
                    <p className="text-[14px] text-[#737373]">Problems trying to resolve the conflict between</p>
                </div>
                <div className="flex gap-8">
                    <Image src={"image/editor-1.svg"} 
                        alt={"image"} 
                        width={"510"} 
                        height={"500"}/>
                     <Image src={"image/editor-2.svg"} 
                        alt={"image"} 
                        width={"240"} 
                        height={"500"}/>
                    <div className="flex flex-col gap-4">
                        <Image src={"image/editor-3.svg"} 
                            alt={"image"} 
                            width={"240"} 
                            height={"242"}/>
                        <Image src={"image/editor-4.svg"} 
                            alt={"image"} 
                            width={"240"} 
                            height={"242"}/>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full max-w-[1439px] bg-white flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex flex-col gap-10">
                <div className="w-full flex flex-col items-center justify-center max-md:px-6 max-md:text-center">
                    <p className="text-[20px] text-[#737373]">Featured Products</p>
                    <h1 className="text-[24px] text-[#252B42] font-bold">BESTSELLER PRODUCTS</h1>
                    <p className="text-[14px] text-[#737373]">Problems trying to resolve the conflict between </p>
                </div>
                <div className="fp">
                    <div className="flex flex-col gap-4 items-center mb-[100px]">
                        <Image src={"image/fp-1.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"427"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/fp-2.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"427"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/fp-3.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"427"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/fp-4.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"427"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/fp-5.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"427"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/fp-6.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"427"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/fp-7.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"427"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/fp-8.svg"} 
                            alt={"image"} 
                            width={"239"} 
                            height={"427"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                        <Image src={"image/fc.svg"} 
                            alt={"image"} 
                            width={"60"} 
                            height={"20"}/>
                    </div>
                </div>
            </div>
        </section>

        <section id="backImg2" className="w-full max-w-[1439px] h-[709px] px-[150px] flex items-center justify-center max-md:w-full max-md:max-w-3xl max-md:flex-col">
            <div className="text-white w-1/2 flex flex-col gap-[35px] justify-center max-md:px-6 max-md:w-full max-md:max-w-3xl max-md:py-[100px] max-md:gap-[24px]">
                <div className="w-[580px] pr-[100px] flex flex-col gap-[35px] max-md:w-full max-md:max-w-3xl max-md:gap-[24px]">
                    <p className="text-[16px] font-bold">SUMMER 2020</p>
                    <h1 className="text-[56px] font-bold">Vita Classic Product</h1> 
                    <p className="text-[20px] text-[#FAFAFA]">We know how large objects will act, We know how are objects will act, We know</p>  
                </div>
                <div className="flex items-center gap-6">
                    <p className="text-[24px] font-bold">$16.48</p>
                    <button className="w-[221px] h-[62px] bg-[#2DC071] text-white font-bold text-[24px] rounded-[5px]">Shop Now</button>
                </div>
            </div>
            <div className="w-1/2 h-full flex items-end justify-end">
                <Image src={"image/hero-3.svg"} 
                    alt={"image"} 
                    width={"443"} 
                    height={"685"}/>
            </div>
        </section>

        <section className="w-full max-w-[1439px] px-[100px] bg-white h-[682px] flex items-center justify-center max-md:w-full max-md:max-w-3xl max-md:flex-col">
            
            <div className="w-1/2 h-full">
                <Image src={"image/hero-4.svg"} 
                    alt={"image"} 
                    width={"632"} 
                    height={"491"}/>
            </div>
            
            <div className="w-1/2 pr-[100px] flex flex-col justify-center gap-8 max-md:px-6 max-md:w-full max-md:max-w-3xl max-md:py-[100px] max-md:gap-[24px]">
                <div className="w-[580px] pl-[50px] flex flex-col gap-6 max-md:w-full max-md:max-w-3xl max-md:gap-[24px]">
                    <p className="text-[16px] font-bold text-[#BDBDBD]">SUMMER 2020</p>
                    <h1 className="w-[375px] text-[40px] font-bold">Part of the Neural Universe</h1> 
                    <p className="text-[20px] text-[#737373]">We know how large objects will act, We know how are objects will act, We know</p>  
                </div>
                <div className="pl-[50px] flex items-center gap-2">
                    <button className="w-[221px] h-[62px] bg-[#2DC071] text-white font-bold text-[24px] rounded-[5px]">Buy Now</button>
                    <button className="w-[221px] h-[62px] bg-white text-[#2DC071] border border-[#2DC071] font-bold text-[24px] rounded-[5px]">Read More</button>
                </div>
            </div>
        </section>

        <section className="w-full pt-[100px] max-w-[1439px] bg-white flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex flex-col gap-10">
                <div className="w-full flex flex-col items-center justify-center max-md:px-6 max-md:text-center">
                    <p className="text-[14px] text-[#23A6F0]">Practice Advice</p>
                    <h1 className="text-[40px] text-[#252B42] font-bold">Featured Posts</h1>
                    <p className="text-[14px] text-[#737373] text-center">Problems trying to resolve the conflict between 
                        <br/>the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className="fp2">
                    <div className="flex flex-col gap-4 border border-b-[3px]">
                        <Image src={"image/fp-img-1.svg"} 
                            alt={"image"} 
                            width={"348"} 
                            height={"300"}/>
                        <div className="p-[25px] flex flex-col gap-4">
                            <div className="flex gap-4">
                                <small className="text-[#8EC2F2]">Google</small>
                                <small className="text-[#737373]">Trendding</small>
                                <small className="text-[#737373]">New</small>
                            </div>
                            <h2 className="text-[20px] text-[3252B42]">Loudest à la Madison #1 (L'integral)</h2>
                            <p className="text-[14px] text-[#737373]">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</p>
                            <div className="flex justify-between">
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/clock.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    22 April 2021
                                </p>
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/comments-icon.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    10 comments
                                </p>
                            </div>
                            <div className="flex gap-2 text-[#737373]">
                                <Link href="">Learn More</Link>
                                <Image src={"icons/arrow-right.svg"} 
                                        alt={"image"} 
                                        width={"9"} 
                                        height={"16"}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border border-b-[3px]">
                        <Image src={"image/fp-img-2.svg"} 
                            alt={"image"} 
                            width={"348"} 
                            height={"300"}/>
                        <div className="p-[25px] flex flex-col gap-4">
                            <div className="flex gap-4">
                                <small className="text-[#8EC2F2]">Google</small>
                                <small className="text-[#737373]">Trendding</small>
                                <small className="text-[#737373]">New</small>
                            </div>
                            <h2 className="text-[20px] text-[3252B42]">Loudest à la Madison #1 (L'integral)</h2>
                            <p className="text-[14px] text-[#737373]">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</p>
                            <div className="flex justify-between">
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/clock.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    22 April 2021
                                </p>
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/comments-icon.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    10 comments
                                </p>
                            </div>
                            <div className="flex gap-2 text-[#737373]">
                                <Link href="">Learn More</Link>
                                <Image src={"icons/arrow-right.svg"} 
                                        alt={"image"} 
                                        width={"9"} 
                                        height={"16"}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border border-b-[3px]">
                        <Image src={"image/fp-img-3.svg"} 
                            alt={"image"} 
                            width={"348"} 
                            height={"300"}/>
                        <div className="p-[25px] flex flex-col gap-4">
                            <div className="flex gap-4">
                                <small className="text-[#8EC2F2]">Google</small>
                                <small className="text-[#737373]">Trendding</small>
                                <small className="text-[#737373]">New</small>
                            </div>
                            <h2 className="text-[20px] text-[3252B42]">Loudest à la Madison #1 (L'integral)</h2>
                            <p className="text-[14px] text-[#737373]">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</p>
                            <div className="flex justify-between">
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/clock.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    22 April 2021
                                </p>
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/comments-icon.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    10 comments
                                </p>
                            </div>
                            <div className="flex gap-2 text-[#737373]">
                                <Link href="">Learn More</Link>
                                <Image src={"icons/arrow-right.svg"} 
                                        alt={"image"} 
                                        width={"9"} 
                                        height={"16"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}
export default mainPage;