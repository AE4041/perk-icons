import React from "react";
import createPerkIcon from "@/utils/createPerkIcon";
import { IconWrapperProps } from "@/utils/createPerkIcon";


const Archive: React.FC<IconWrapperProps> = ({ color = 'currentColor', set = 'outline', strokeWidth }) => {
    const Bold = () => (
        <g>
            <path d="M16 9.75H8C7.31 9.75 6.75 10.31 6.75 11V12.05C6.78 12.04 6.8 12.03 6.83 12.02C6.95 11.96 7.08 11.92 7.21 11.88C7.27 11.86 7.33 11.84 7.4 11.82C7.6 11.78 7.8 11.75 8.01 11.75H16.01C16.22 11.75 16.42 11.78 16.62 11.82C16.68 11.83 16.74 11.86 16.81 11.88C16.94 11.92 17.07 11.96 17.19 12.02C17.22 12.03 17.25 12.04 17.27 12.05V11C17.25 10.31 16.69 9.75 16 9.75Z" fill={color} />
            <path d="M16 13.25H8C7.31 13.25 6.75 13.81 6.75 14.5V15H9.5C9.91 15 10.25 15.34 10.25 15.75C10.25 16.71 11.04 17.5 12 17.5C12.96 17.5 13.75 16.71 13.75 15.75C13.75 15.34 14.09 15 14.5 15H17.25V14.5C17.25 13.81 16.69 13.25 16 13.25Z" fill={color} />
            <path d="M16 6.5H8C7.31 6.5 6.75 7.06 6.75 7.75V8.56C7.13 8.37 7.55 8.25 8 8.25H16C16.45 8.25 16.87 8.37 17.25 8.56V7.75C17.25 7.06 16.69 6.5 16 6.5Z" fill={color} />
            <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM19 16.5H18H15.16C14.82 17.93 13.53 19 12 19C10.47 19 9.18 17.93 8.84 16.5H6H5C4.59 16.5 4.25 16.16 4.25 15.75C4.25 15.34 4.59 15 5 15H5.25V14.5V14V11V7.75C5.25 6.23 6.48 5 8 5H16C17.52 5 18.75 6.23 18.75 7.75V11V14V14.5V15H19C19.41 15 19.75 15.34 19.75 15.75C19.75 16.16 19.41 16.5 19 16.5Z" fill={color} />
        </g>
    )

    const Broken = () => (
        <g>
            <path d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 15.75H18" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 15.75H5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )

    const Bulk = () => (
        <g>
            <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={color} />
            <path d="M19 15H18.75V14.5V14V11V7.75C18.75 6.23 17.52 5 16 5H8C6.48 5 5.25 6.23 5.25 7.75V11V14V14.5V15H5C4.59 15 4.25 15.34 4.25 15.75C4.25 16.16 4.59 16.5 5 16.5H6H8.84003C9.18003 17.93 10.47 19 12 19C13.53 19 14.82 17.93 15.16 16.5H18H19C19.41 16.5 19.75 16.16 19.75 15.75C19.75 15.34 19.41 15 19 15ZM16.79 11.88C16.73 11.86 16.67 11.84 16.6 11.82C16.4 11.78 16.2 11.75 15.99 11.75H7.98999C7.77999 11.75 7.58 11.78 7.38 11.82C7.32 11.83 7.26 11.86 7.19 11.88C7.06 11.92 6.93 11.96 6.81 12.02C6.78 12.03 6.74998 12.04 6.72998 12.05V11C6.72998 10.31 7.28998 9.75 7.97998 9.75H15.98C16.67 9.75 17.23 10.31 17.23 11V12.05C17.2 12.04 17.18 12.03 17.15 12.02C17.05 11.96 16.92 11.92 16.79 11.88ZM8 6.5H16C16.69 6.5 17.25 7.06 17.25 7.75V8.56C16.87 8.37 16.45 8.25 16 8.25H8C7.55 8.25 7.13 8.37 6.75 8.56V7.75C6.75 7.06 7.31 6.5 8 6.5ZM14.5 15C14.09 15 13.75 15.34 13.75 15.75C13.75 16.71 12.96 17.5 12 17.5C11.04 17.5 10.25 16.71 10.25 15.75C10.25 15.34 9.91 15 9.5 15H6.75V14.5C6.75 13.81 7.31 13.25 8 13.25H16C16.69 13.25 17.25 13.81 17.25 14.5V15H14.5Z" fill={color} />
        </g>
    )

    const Linear = () => (
        <g>
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 15.75H18" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 15.75H5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )

    const Outline = () => (
        <g>
            <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
            <path d="M18 15.25C17.59 15.25 17.25 14.91 17.25 14.5C17.25 13.81 16.69 13.25 16 13.25H8C7.31 13.25 6.75 13.81 6.75 14.5C6.75 14.91 6.41 15.25 6 15.25C5.59 15.25 5.25 14.91 5.25 14.5V7.75C5.25 6.23 6.48 5 8 5H16C17.52 5 18.75 6.23 18.75 7.75V14.5C18.75 14.91 18.41 15.25 18 15.25ZM8 11.75H16C16.45 11.75 16.88 11.86 17.25 12.05V7.75C17.25 7.06 16.69 6.5 16 6.5H8C7.31 6.5 6.75 7.06 6.75 7.75V12.05C7.12 11.86 7.55 11.75 8 11.75Z" fill={color} />
            <path d="M19 16.5H18C17.59 16.5 17.25 16.16 17.25 15.75C17.25 15.34 17.59 15 18 15H19C19.41 15 19.75 15.34 19.75 15.75C19.75 16.16 19.41 16.5 19 16.5Z" fill={color} />
            <path d="M6 16.5H5C4.59 16.5 4.25 16.16 4.25 15.75C4.25 15.34 4.59 15 5 15H6C6.41 15 6.75 15.34 6.75 15.75C6.75 16.16 6.41 16.5 6 16.5Z" fill={color} />
            <path d="M18 14.75C17.59 14.75 17.25 14.41 17.25 14V11C17.25 10.31 16.69 9.75 16 9.75H8C7.31 9.75 6.75 10.31 6.75 11V14C6.75 14.41 6.41 14.75 6 14.75C5.59 14.75 5.25 14.41 5.25 14V11C5.25 9.48 6.48 8.25 8 8.25H16C17.52 8.25 18.75 9.48 18.75 11V14C18.75 14.41 18.41 14.75 18 14.75Z" fill={color} />
            <path d="M12 19C10.47 19 9.18003 17.93 8.84003 16.5H6C5.59 16.5 5.25 16.16 5.25 15.75V14.5C5.25 12.98 6.48 11.75 8 11.75H16C17.52 11.75 18.75 12.98 18.75 14.5V15.75C18.75 16.16 18.41 16.5 18 16.5H15.16C14.82 17.93 13.53 19 12 19ZM6.75 15H9.5C9.91 15 10.25 15.34 10.25 15.75C10.25 16.71 11.04 17.5 12 17.5C12.96 17.5 13.75 16.71 13.75 15.75C13.75 15.34 14.09 15 14.5 15H17.25V14.5C17.25 13.81 16.69 13.25 16 13.25H8C7.31 13.25 6.75 13.81 6.75 14.5V15Z" fill={color} />
        </g>
    )

    const TwoTone = () => (
        <g>
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <g opacity="0.4">
                <path d="M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 15.75H18" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 15.75H5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            </g>
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

Archive.displayName = "Archive"
export default createPerkIcon(Archive)