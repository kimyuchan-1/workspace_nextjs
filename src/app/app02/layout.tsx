
import Link from 'next/link'

export default function App01Layout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className="flex h-full flex-col">
            <aside className="w-full bg-gray-200 p-4 flex flex-row justify-between">
                <h1 className="text-2xl font-bold p-4">맛집 카테고리</h1>
                <nav className="px-5 flex justify-center items-center">
                    <ul className=' flex flex-row'>
                        <Link href = "/app02/Junggu">
                            <li className="pr-4">중구</li>
                        </Link>
                        <div className="pr-4">|</div>
                        <Link href = "/app02/Donggu">
                            <li className="pr-4">동구</li>
                        </Link>
                        <div className="pr-4">|</div>
                        <Link href = "/app02/Seogu">
                            <li className="pr-4">서구</li>
                        </Link>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}