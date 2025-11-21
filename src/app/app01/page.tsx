export default function App01Page() {
    return (
        <div className="w-full flex flex-col p-6 justify-center max-w-400 ">
            <h1 className="text-3xl font-bold mb-3">오늘의 맛집 추천</h1>
            <div className="text-gray-500 text-md mb-6">여기에 추천 맛집 목록이 표시됩니다</div>
            <div className="bg-stone-50 rounded-md border border-gray-500 p-6">
                <h2 className="text-2xl font-bold">맛있는 파스타 집</h2>
                <div className="text-gray-500 text-md pt-1">방금 추천받은 따끈따끈한 맛집!</div>    
            </div>
        </div>
    );
}