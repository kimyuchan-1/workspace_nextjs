

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
                        <li className="py-1">중구</li>
                        <li className="py-1">동구</li>
                        <li className="py-1">서구</li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}