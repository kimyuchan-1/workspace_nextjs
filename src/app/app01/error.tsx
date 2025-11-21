'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="m-5">
            <h2 className="text-red-500 font-bold text-2xl">Error!</h2>
            <p className="text-red-900 m-5">
                {error.message}
            </p>
            <button className="bg-red-500 hover:bg-red-700 rounded-sm text-white font-bold py-2 px-4"
                onClick={() => reset()}>Try again</button>
        </div>
    );
}