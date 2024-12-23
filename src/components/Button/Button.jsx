export default function Button({ text, onSetPlayerHandler }) {
    return (
        <button
            className="grid justify-center items-center w-24 h-16 m-3 cursor-pointer border rounded-lg bg-[#00f2fe] hover:border-black text-red-600 text-2xl font-bold"
            onClick={onSetPlayerHandler}
        >
            {text}
        </button>
    );
}