export default function GridLayout({ onClickHandler }) {
    return (
        <div className="inline-grid grid-cols-3 gap-4">
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
            <div className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer" onClick={onClickHandler}></div>
        </div>
    )
}