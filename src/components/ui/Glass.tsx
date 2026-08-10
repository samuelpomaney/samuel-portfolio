import { ReactNode } from "react";

interface GlassProps {
    children: ReactNode;
    className?: string;
}

const Glass = ({ children, className = "" }: GlassProps) => {
    return (
        <div className={`group rounded-[32px] border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-2xl transition-all duration-300 ${className} `} >
            <div className=" pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
                <div
                    className="  " />
            </div>
            {children}
        </div>
    );
};

export default Glass;