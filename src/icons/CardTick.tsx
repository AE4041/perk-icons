import React from "react";
import createPerkIcon from "@/utils/createPerkIcon";
import { IconWrapperProps } from "@/utils/createPerkIcon";

const CardTick: React.FC<IconWrapperProps> = ({ color = 'currentColor', set = 'outline', strokeWidth }) => {
    const Bold = () => (
        <g>
            <path d="M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z" fill={color} />
            <path d="M22 7.54844V7.99844C22 8.54844 21.55 8.99844 21 8.99844H3C2.45 8.99844 2 8.54844 2 7.99844V7.53844C2 5.24844 3.85 3.39844 6.14 3.39844H17.85C20.14 3.39844 22 5.25844 22 7.54844Z" fill={color} />
            <path d="M2 11.4983V16.4583C2 18.7483 3.85 20.5983 6.14 20.5983H12.4C12.98 20.5983 13.48 20.1083 13.43 19.5283C13.29 17.9983 13.78 16.3383 15.14 15.0183C15.7 14.4683 16.39 14.0483 17.14 13.8083C18.39 13.4083 19.6 13.4583 20.67 13.8183C21.32 14.0383 22 13.5683 22 12.8783V11.4883C22 10.9383 21.55 10.4883 21 10.4883H3C2.45 10.4983 2 10.9483 2 11.4983ZM8 17.2483H6C5.59 17.2483 5.25 16.9083 5.25 16.4983C5.25 16.0883 5.59 15.7483 6 15.7483H8C8.41 15.7483 8.75 16.0883 8.75 16.4983C8.75 16.9083 8.41 17.2483 8 17.2483Z" fill={color} />
        </g>
    )

    const Broken = () => (
        <g>
            <path d="M6 10H22" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.5502 20.5H6.44025C2.89025 20.5 1.99023 19.62 1.99023 16.11V7.89001C1.99023 4.71001 2.73026 3.69001 5.52026 3.53001C5.80026 3.52001 6.11025 3.51001 6.44025 3.51001H17.5502C21.1002 3.51001 22.0002 4.39001 22.0002 7.90001V12.31" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 16H10" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.4395 18L17.4294 18.99L19.5594 17.02" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )

    const Bulk = () => (
        <g>
            <path d="M19 65.625C16.79 65.625 15 73.4562 15 83.125C15 86.4062 15.21 89.5125 15.58 92.1375C16.27 97.2125 17.54 100.625 19 100.625C20.46 100.625 21.73 97.2125 22.42 92.1375C22.79 89.5125 23 86.4062 23 83.125C23 73.4562 21.21 65.625 19 65.625ZM21.07 81.2437L18.94 89.8625C18.8 90.4313 18.61 90.7375 18.43 90.7375C18.24 90.7375 18.05 90.4312 17.9 89.775L16.91 85.4437C16.62 84.175 16.62 82.075 16.91 80.8063C17.2 79.5375 17.68 79.5375 17.97 80.8063L18.45 82.9063L20.05 76.4313C20.35 75.2063 20.83 75.2937 21.11 76.6062C21.39 77.9187 21.37 79.975 21.07 81.2437Z" fill={color} />
            <path d="M22 32.9875V39.375H2V32.9875C2 22.9687 3.86002 14.875 6.15002 14.875H17.85C20.14 14.875 22 22.9687 22 32.9875Z" fill={color} />
            <path opacity="0.4" d="M2 39.375V72.0125C2 82.0312 3.85001 90.125 6.14001 90.125H12.4C12.98 90.125 13.48 87.9812 13.43 85.4437C13.29 78.75 13.78 71.4875 15.14 65.7125C15.7 63.3062 16.39 61.4688 17.14 60.4188C18.39 58.6688 19.6 58.8875 20.67 60.4625C21.32 61.425 22 59.3688 22 56.35V39.375H2ZM8 75.4687H6C5.59 75.4687 5.25 73.9812 5.25 72.1875C5.25 70.3937 5.59 68.9062 6 68.9062H8C8.41 68.9062 8.75 70.3937 8.75 72.1875C8.75 73.9812 8.41 75.4687 8 75.4687Z" fill={color} />
            <path d="M8.75 72.1875C8.75 73.9812 8.41 75.4688 8 75.4688H6C5.59 75.4688 5.25 73.9812 5.25 72.1875C5.25 70.3938 5.59 68.9062 6 68.9062H8C8.41 68.9062 8.75 70.3938 8.75 72.1875Z" fill={color} />
        </g>
    )
    const Linear = () => (
        <g>
            <path d="M2 10H22" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.5483 20.4998H6.43829C2.88829 20.4998 1.98828 19.6198 1.98828 16.1098V7.88977C1.98828 4.70977 2.72831 3.68977 5.51831 3.52977C5.79831 3.51977 6.10829 3.50977 6.43829 3.50977H17.5483C21.0983 3.50977 21.9983 4.38977 21.9983 7.89977V12.3098" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 16H10" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.4414 17.9995L17.4314 18.9895L19.5614 17.0195" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )
    const Outline = () => (
        <g>
            <path d="M13.5 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H13.5C13.91 7.75 14.25 8.09 14.25 8.5C14.25 8.91 13.91 9.25 13.5 9.25Z" fill={color} />
            <path d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill={color} />
            <path d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill={color} />
            <path d="M17.56 21.25H6.44C2.46 21.25 1.25 20.05 1.25 16.11V7.89C1.25 3.95 2.46 2.75 6.44 2.75H13.5C13.91 2.75 14.25 3.09 14.25 3.5C14.25 3.91 13.91 4.25 13.5 4.25H6.44C3.3 4.25 2.75 4.79 2.75 7.89V16.1C2.75 19.2 3.3 19.74 6.44 19.74H17.55C20.69 19.74 21.24 19.2 21.24 16.1V11.02C21.24 10.61 21.58 10.27 21.99 10.27C22.4 10.27 22.74 10.61 22.74 11.02V16.1C22.75 20.05 21.54 21.25 17.56 21.25Z" fill={color} />
            <path d="M17.9995 8.24994C17.8095 8.24994 17.6195 8.17994 17.4695 8.02994L15.9695 6.52994C15.6795 6.23994 15.6795 5.75994 15.9695 5.46994C16.2595 5.17994 16.7395 5.17994 17.0295 5.46994L17.9995 6.43994L21.4695 2.96994C21.7595 2.67994 22.2395 2.67994 22.5295 2.96994C22.8195 3.25994 22.8195 3.73994 22.5295 4.02994L18.5295 8.02994C18.3795 8.17994 18.1895 8.24994 17.9995 8.24994Z" fill={color} />
        </g>
    )
    const TwoTone = () => (
        <g>
            <path d="M2 10H22" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.5502 20.4998H6.44025C2.89025 20.4998 1.99023 19.6198 1.99023 16.1098V7.88977C1.99023 4.70977 2.73026 3.68977 5.52026 3.52977C5.80026 3.51977 6.11025 3.50977 6.44025 3.50977H17.5502C21.1002 3.50977 22.0002 4.38977 22.0002 7.89977V12.3098" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M6 16H10" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M16.4395 18L17.4294 18.99L19.5594 17.02" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

CardTick.displayName = "CardTick"
export default createPerkIcon(CardTick)