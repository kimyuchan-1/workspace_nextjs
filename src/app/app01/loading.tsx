export default function Loading() {
    return (
        <div className="text-2xl flex flex-col justify-center items-center w-full h-full">
            <h1 className="font-bold">Loading...</h1>
            <img src = "/loading.gif" alt = "loading" />
        </div>
    );
}