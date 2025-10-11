import { MailCheck, MapPinHouse, PhoneCall } from 'lucide-react';
import React from 'react';

export const metadata = {
    title : "Liên hệ | Review Food",
    description: `Liên hệ với chúng tôi để được hỗ trợ nhanh chóng! 
    Đội ngũ ReviewFood luôn sẵn sàng giải đáp mọi thắc mắc về dịch vụ, hợp tác hoặc phản hồi.`
}
interface Props {
    icon: React.ReactNode,
    title: string,
    content : React.ReactNode
}
const ContactDetail = ({ icon, title, content } : Props) => (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">

        <div className="w-12 h-12 mb-4 filter invert flex items-center justify-center" >
            {icon}
        </div>
        <h2 className="text-xl font-semibold text-amber-400 mb-2">{title}</h2>
        <div className="text-gray-300 text-center">{content}</div>
    </div>
);

export default function Contact() {
    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 text-gray-100"> 
            <div className="max-w-[1500px] mx-auto p-8 rounded-xl"> 
                <h1 className="text-5xl font-extrabold text-center text-amber-400 mb-6 animate-fade-in">
                    Liên hệ với chúng tôi
                </h1>
                <p className="text-lg text-center text-black mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100">
                    Chúng tôi rất mong nhận được phản hồi từ bạn! Dù bạn có câu hỏi, góp ý, hay muốn hợp tác,
                    đừng ngần ngại liên hệ với đội ngũ của chúng tôi.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <ContactDetail
                        icon={<MapPinHouse color='red' className='!text-white !w-10 !h-10'/>}
                        title="Địa chỉ"
                        content={
                            <>
                                <p>546 Đường Trần Cung</p>
                                <p>Cổ Nhuế 1, Nam Từ Liêm, Hà Nội</p>
                            </>
                        }
                    />
                    <ContactDetail
                        icon={<MailCheck color='red' className='text-white !w-10 !h-10'/>  }
                        title="Email"
                        content={
                            <a href="mailto:info@yourcompany.com">
                                nxthanh.nb2002@gmail.com
                            </a>
                        }
                    />
                    <ContactDetail
                        icon={<PhoneCall className='!w-10 !h-10' color='red'/>}
                        title="Điện thoại"
                        content={
                            <a href="tel:+84123456789">
                                +84 377 648 322
                            </a>
                        }
                    />
                </div>

                <div className="bg-gray-800 p-8 rounded-lg shadow-inner"> 
                    <h2 className="text-3xl font-bold text-amber-400 text-center mb-8 animate-fade-in delay-300">
                        Gửi tin nhắn cho chúng tôi
                    </h2>
                    <form className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="sr-only">Họ và tên</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    className="block w-full px-4 py-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-md 
                                    shadow-sm focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out placeholder-gray-400"
                                    placeholder="Họ và tên"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="block w-full px-4 py-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-md shadow-sm
                                    focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out placeholder-gray-400"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phoneNumber" className="sr-only">Số điện thoại</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className="block w-full px-4 py-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-md shadow-sm 
                                    focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out placeholder-gray-400"
                                    placeholder="Số điện thoại"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="sr-only">Tiêu đề</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="block w-full px-4 py-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out placeholder-gray-400"
                                    placeholder="Tiêu đề"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="sr-only">Nội dung ...</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={7}
                                required
                                className="block w-full px-4 py-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out resize-y placeholder-gray-400"
                                placeholder="Nội dung ..."
                            ></textarea>
                        </div>
                        
                        <div>
                            <button
                                type="submit"
                                className="w-auto flex justify-center py-3 px-8 border border-transparent rounded-md shadow-sm 
                                text-lg font-medium text-black bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 
                                focus:ring-offset-2 focus:ring-amber-400 transition duration-200 ease-in-out 
                                transform hover:scale-105 mx-auto cursor-pointer"
                            >
                                Gửi Tin Nhắn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}