
import Link from 'next/link'

export default function App01Layout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className="flex h-full">
            <aside className="w-60 bg-gray-200">
                <h1 className="text-2xl font-bold p-4">맛집 카테고리</h1>
                <nav className="px-5">
                    <ul>
                        <Link href = "/app01/Junggu">
                            <li className="py-1">중구</li>
                        </Link>
                        <Link href = "/app01/Donggu">
                            <li className="py-1">동구</li>
                        </Link>
                        <Link href = "/app01/Seogu">
                            <li className="py-1">서구</li>
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