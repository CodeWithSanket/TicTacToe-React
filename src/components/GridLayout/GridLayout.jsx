export default function GridLayout({ playerLogo, onClickHandler }) {
    return (
        <div
            className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  
                     bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer text-red-700 
                     font-bold text-4xl"
            onClick={onClickHandler}>
            {playerLogo}
        </div>
    )
}