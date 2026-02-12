import React, { useEffect, memo } from 'react';
import { MessageCircle, UserCircle2 } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const Comment = memo(({ comment }) => (
    <div className="px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5">
        <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                <UserCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                        <h4 className="font-medium text-white truncate">
                            {comment.user_name}
                        </h4>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                        {comment.date}
                    </span>
                </div>
                <p className="text-gray-300 text-sm break-words leading-relaxed relative bottom-2">
                    {comment.content}
                </p>
            </div>
        </div>
    </div>
));

const Komentar = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
        });
    }, []);

    const comments = [
        {
            id: 1,
            user_name: "Visitor",
            date: "Recently",
            content: "Great portfolio! The design is very clean and modern."
        },
        {
            id: 2,
            user_name: "Recruiter",
            date: "Recently",
            content: "Impressive work on the AI projects."
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl backdrop-blur-xl shadow-xl" data-aos="fade-up" data-aos-duration="1000">
            <div className="p-6 border-b border-white/10" data-aos="fade-down" data-aos-duration="800">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/20">
                        <MessageCircle className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                        Comments <span className="text-indigo-400">({comments.length})</span>
                    </h3>
                </div>
            </div>
            <div className="p-6 space-y-6">
                <div className="space-y-4 h-[328px] overflow-y-auto overflow-x-hidden custom-scrollbar pt-1 pr-1" data-aos="fade-up" data-aos-delay="200">
                    {comments.map((comment, index) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            </div>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(99, 102, 241, 0.5);
                    border-radius: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(99, 102, 241, 0.7);
                }
            `}</style>
        </div>
    );
};

export default Komentar;