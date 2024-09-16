import React from "react";
import createPerkIcon from "@/utils/createPerkIcon";
import { IconWrapperProps } from "@/utils/createPerkIcon";

//@ts-ignore
const Document: React.FC<IconWrapperProps> = ({ color = 'currentColor', set = 'outline', strokeWidth }) => {
    const Bold = () => (
        <g>
            <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.75 15.75H8.25C7.84 15.75 7.5 15.41 7.5 15C7.5 14.59 7.84 14.25 8.25 14.25H15.75C16.16 14.25 16.5 14.59 16.5 15C16.5 15.41 16.16 15.75 15.75 15.75ZM15.75 9.75H8.25C7.84 9.75 7.5 9.41 7.5 9C7.5 8.59 7.84 8.25 8.25 8.25H15.75C16.16 8.25 16.5 8.59 16.5 9C16.5 9.41 16.16 9.75 15.75 9.75Z" fill="#292D32" />
        </g>
    )

    const Broken = () => (
        <g>
            <path d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.75 9H8.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.75 15H8.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )

    const Bulk = () => (
        <g>
            <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#292D32" />
            <path d="M15.75 9.75H8.25C7.84 9.75 7.5 9.41 7.5 9C7.5 8.59 7.84 8.25 8.25 8.25H15.75C16.16 8.25 16.5 8.59 16.5 9C16.5 9.41 16.16 9.75 15.75 9.75Z" fill="#292D32" />
            <path d="M15.75 15.75H8.25C7.84 15.75 7.5 15.41 7.5 15C7.5 14.59 7.84 14.25 8.25 14.25H15.75C16.16 14.25 16.5 14.59 16.5 15C16.5 15.41 16.16 15.75 15.75 15.75Z" fill="#292D32" />
        </g>
    )
    const Linear = () => (
        <g>
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.75 9H8.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.75 15H8.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )
    const Outline = () => (
        <g>
            <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#292D32" />
            <path d="M15.75 9.75H8.25C7.84 9.75 7.5 9.41 7.5 9C7.5 8.59 7.84 8.25 8.25 8.25H15.75C16.16 8.25 16.5 8.59 16.5 9C16.5 9.41 16.16 9.75 15.75 9.75Z" fill="#292D32" />
            <path d="M15.75 15.75H8.25C7.84 15.75 7.5 15.41 7.5 15C7.5 14.59 7.84 14.25 8.25 14.25H15.75C16.16 14.25 16.5 14.59 16.5 15C16.5 15.41 16.16 15.75 15.75 15.75Z" fill="#292D32" />
        </g>
    )
    const TwoTone = () => (
        <g>
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M15.75 9H8.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M15.75 15H8.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )

    const iconMap = {
        bold: <Bold />,
        broken: <Broken />,
        bulk: <Bulk />,
        linear: <Linear />,
        outline: <Outline />,
        twoTone: <TwoTone />,
    };

    return iconMap[set] || <Outline />;
}

Document.displayName = "Document"
export default createPerkIcon(Document)