export default function InfoBox({ dataView }: { dataView: any }) {
    const text =    `Địa điểm: ${dataView?.name ?? ""}
                    Vùng đất: ${dataView?.region ?? ""}
                    Mô tả: ${dataView?.desc ?? ""}`;

    return (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 border border-yellow-500 
            shadow p-4 rounded-xl w-72 overflow-hidden"
        >
            <p className="animate-typing whitespace-pre-line font-medium text-gray-800 leading-relaxed">
                {text}
            </p>
        </div>
    );
}
