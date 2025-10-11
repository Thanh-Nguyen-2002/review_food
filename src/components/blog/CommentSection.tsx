"use client";
import { useState } from "react";
import { toast } from "react-toastify";

interface Reply {
    id: number;
    name: string;
    content: string;
    time: string;
    likes: number;
    isAuthor?: boolean;
}

interface Comment {
    id: number;
    name: string;
    time: string;
    content: string;
    likes: number;
    replies?: Reply[];
}

export default function CommentSection() {
    const [comments, setComments] = useState<Comment[]>([
        {
            id: 1,
            name: "Anh Tuấn",
            time: "2 giờ trước",
            content:
                "Công thức phở rất chi tiết và dễ hiểu! Tôi đã thử làm theo và kết quả rất tuyệt vời. Cảm ơn tác giả đã chia sẻ.",
            likes: 12,
        },
        {
            id: 2,
            name: "Mai Linh",
            time: "5 giờ trước",
            content:
                "Mình có thể thay thế xương bò bằng xương heo được không ạ? Gia đình mình không ăn thịt bò.",
            likes: 5,
            replies: [
                {
                    id: 1,
                    name: "Chef Minh",
                    content:
                        "Chào Mai Linh! Bạn hoàn toàn có thể thay thế bằng xương heo nhé. Tuy nhiên hương vị sẽ khác một chút so với phở bò truyền thống.",
                    time: "3 giờ trước",
                    likes: 8,
                    isAuthor: true,
                },
            ],
        },
    ]);

    const [form, setForm] = useState({ name: "", email: "", content: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.name || !form.content) {
            toast.warning("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const newComment: Comment = {
            id: Date.now(),
            name: form.name,
            time: "Vừa xong",
            content: form.content,
            likes: 0,
        };
        toast.success("Cảm ơn bạn đã comments.")
        setComments([newComment, ...comments]);
        setForm({ name: "", email: "", content: "" });
    };

    const handleLike = (id: number, parent?: number) => {
        if (parent) {
            setComments((prev) =>
                prev.map((c) =>
                c.id === parent
                    ? {
                        ...c,
                        replies: c.replies?.map((r) =>
                        r.id === id ? { ...r, likes: r.likes + 1 } : r
                        ),
                    }
                    : c
                )
            );
        } else {
            setComments((prev) =>
                prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
            );
        }
    };

    return (
        <section className="max-w-[1500px] mx-auto bg-white py-10 px-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
                Bình luận gần đây
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 p-5 rounded-xl mb-8 space-y-4"
            >
                <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Tên của bạn"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 h-12 focus:outline-none 
                    focus:ring-2 focus:ring-yellow-400"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 h-12 focus:outline-none 
                    focus:ring-2 focus:ring-yellow-400"
                />
                </div>

                <textarea
                    placeholder="Chia sẻ ý kiến của bạn..."
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none 
                    focus:ring-2 focus:ring-yellow-400 min-h-[120px]"
                >

                </textarea>

                <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-400 text-white px-6 py-2 h-12
                    rounded-lg hover:opacity-90 transition cursor-pointer"
                >
                    Gửi bình luận
                </button>
            </form>

            <div className="space-y-6">
                {comments.map((c) => (
                    <div
                        key={c.id}
                        className="border border-gray-100 rounded-lg p-5 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-purple-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                                {c.name[0]}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">{c.name}</p>
                                <p className="text-xs text-gray-500">{c.time}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-3">{c.content}</p>
                        <div className="text-sm flex gap-4 text-gray-500">
                            <button
                                onClick={() => handleLike(c.id)}
                                className="hover:text-orange-500 cursor-pointer"
                            >
                                Thích ({c.likes})
                            </button>
                            <button className="hover:text-purple-500 cursor-pointer">↩ Trả lời</button>
                        </div>

                        {c.replies && (
                            <div className="ml-8 mt-4 border-l-2 border-gray-100 pl-4 space-y-4">
                                {c.replies.map((r) => (
                                    <div key={r.id} className="bg-gray-100 p-3 rounded-lg">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="bg-green-400 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm">
                                                {r.name[0]}
                                            </div>
                                            <p className="font-medium text-gray-800">
                                                {r.name}{" "}
                                                {r.isAuthor && (
                                                    <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-[1px] rounded-full">
                                                        Tác giả
                                                    </span>
                                                )}
                                            </p>
                                            <span className="text-xs text-gray-400">{r.time}</span>
                                        </div>
                                        <p className="text-gray-700 text-sm mb-1">{r.content}</p>
                                        <button
                                            onClick={() => handleLike(r.id, c.id)}
                                            className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer"
                                        >
                                            Thích ({r.likes})
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
