interface Marker {
    id: number;
    name: string;
    region: string;
    top: string;
    left: string;
    desc: string;
    image: string;
}

export default function InfoBox({ dataView }: { dataView?: Marker }) {
    const { name, region, desc } = dataView || {};

    const text = `Địa điểm: ${name ?? ""}
    Vùng đất: ${region ?? ""}
    Mô tả: ${desc ?? ""}`;

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