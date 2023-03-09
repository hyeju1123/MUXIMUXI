"use client";

export default function Nav() {
    return (
        <>
            <div className="flex-col w-[295px] h-[918px] bg-purple50 rounded-b-2xl p-8">
                <div className="flex-col items-start">
                    <div className="flex py-4">
                        <div className="w-[50px] h-[40px] bg-white flex justify-center items-center rounded-3xl">
                            사진
                        </div>
                        <div className="w-full h-[40px] text-purple300 font-semibold flex justify-start items-center pl-3">
                            ZUITOPIA
                        </div>
                    </div>
                    <div>
                        <div className="text-purple300 font-semibold opacity-70 py-2">MAIN</div>
                        <div className="border-y border-purple300 py-2">
                            <div className="flex items-center w-full h-[40px]  text-purple200 font-semibold pl-3 hover:bg-white hover:rounded-xl hover:cursor-pointer hover:text-purple300">
                                SEARCH
                            </div>
                            <div className="flex items-center w-full h-[40px]  text-purple200 font-semibold pl-3 hover:bg-white hover:rounded-xl hover:cursor-pointer hover:text-purple300">
                                ITEMS
                            </div>
                            <div className="flex items-center w-full h-[40px]  text-purple200 font-semibold pl-3 hover:bg-white hover:rounded-xl hover:cursor-pointer hover:text-purple300">
                                MEGAZINE
                            </div>
                            <div className="flex items-center w-full h-[40px]  text-purple200 font-semibold pl-3 hover:bg-white hover:rounded-xl hover:cursor-pointer hover:text-purple300">
                                WISH LIST
                            </div>
                        </div>
                    </div>
                    <div className="text-purple300 font-semibold opacity-70 py-2 hover:cursor-pointer">ADD</div>
                    <div className="text-purple300 font-semibold opacity-70 py-2 hover:cursor-pointer">SHARE</div>
                </div>
                <div className="flex-col pt-72">
                    <div className="text-purple300 font-semibold opacity-70 py-2">RECENT</div>
                    <div className="flex justify-center">
                        <div className="flex-col space-y-3">
                            <div className="flex flex-wrap space-x-3">
                                <div className="w-[62px] h-[62px] bg-white">image..</div>
                                <div className="w-[62px] h-[62px] bg-white">image..</div>
                                <div className="w-[62px] h-[62px] bg-white">image..</div>
                            </div>
                            <div className="flex flex-wrap space-x-3">
                                <div className="w-[62px] h-[62px] bg-white">image..</div>
                                <div className="w-[62px] h-[62px] bg-white">image..</div>
                                <div className="w-[62px] h-[62px] bg-white">image..</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
