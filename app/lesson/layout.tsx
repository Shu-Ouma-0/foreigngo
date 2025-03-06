type Props = {
    children: React.ReactNode;
};

const LessonLayout = ({ children }: Props) => {
    return (
        <div className="bg-gradient-to-b from-red-300 via-rose-100 to-white flex flex-col h-full">
            <div className="flex flex-col h-full w-full">
                {children}
            </div>
        </div>
    );
};

export default LessonLayout;