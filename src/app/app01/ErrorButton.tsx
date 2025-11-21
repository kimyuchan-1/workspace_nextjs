'use client';
import { useState } from 'react';
export default function ErrorButton() {
    const [error, setError] = useState(false);

    if (error) {
        throw new Error('Error test');
    }

    return (
        <div>
            <button className = "bg-red-500 hover:bg-red-700 rounded-sm text-white font-bold py-2 px-4"
                    onClick={() => setError(true)}>Error</button>
        </div>
    );
}