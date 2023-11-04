'use client';

import { IconType } from "react-icons";

interface CategoryProps {
    icon: IconType;
    label: string;
    selected: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return (
        <div onClick={() => onClick(label)} className={`rounded-xl p-4 border-2 flex flex-col gap-3 m-1 hover:border-black transition cursor-pointer
    ${selected ? 'border-black' : 'border-neutral-200'}
    `}>
            <Icon size={30} />
            <div className="font-semibold">{label}</div>
        </div>
    );
}

export default CategoryInput;