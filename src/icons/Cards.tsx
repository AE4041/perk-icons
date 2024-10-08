import React from "react";
import createPerkIcon from "@/utils/createPerkIcon";
import { IconWrapperProps } from "@/utils/createPerkIcon";

const Cards: React.FC<IconWrapperProps> = ({ color = 'currentColor', set = 'outline', strokeWidth }) => {
    const Bold = () => (
        <g>
            <path d="M15.22 6.55078H5.78C5.5 6.55078 5.24 6.56078 5 6.57078C2.63 6.71078 2 7.58078 2 10.2808V10.8608C2 11.4108 2.45 11.8608 3 11.8608H18C18.55 11.8608 19 11.4108 19 10.8608V10.2808C19 7.30078 18.24 6.55078 15.22 6.55078Z" fill={color} />
            <path d="M3 13.3594C2.45 13.3594 2 13.8094 2 14.3594V17.2694C2 20.2494 2.76 20.9994 5.78 20.9994H15.22C18.19 20.9994 18.97 20.2794 19 17.4294V14.3594C19 13.8094 18.55 13.3594 18 13.3594H3ZM6.96 18.5594H5.25C4.84 18.5594 4.5 18.2194 4.5 17.8094C4.5 17.3994 4.84 17.0594 5.25 17.0594H6.97C7.38 17.0594 7.72 17.3994 7.72 17.8094C7.72 18.2194 7.38 18.5594 6.96 18.5594ZM12.55 18.5594H9.11C8.7 18.5594 8.36 18.2194 8.36 17.8094C8.36 17.3994 8.7 17.0594 9.11 17.0594H12.55C12.96 17.0594 13.3 17.3994 13.3 17.8094C13.3 18.2194 12.97 18.5594 12.55 18.5594Z" fill={color} />
            <path d="M22.0016 13.3316V8.09156C22.0016 4.96156 20.2116 3.60156 17.5116 3.60156H8.58157C7.82157 3.60156 7.14157 3.71156 6.54157 3.94156C6.07157 4.11156 5.65157 4.36156 5.31157 4.69156C5.13157 4.86156 5.27157 5.14156 5.53157 5.14156H16.4016C18.6516 5.14156 20.4716 6.96156 20.4716 9.21156V16.3816C20.4716 16.6316 20.7416 16.7716 20.9216 16.5916C21.6116 15.8616 22.0016 14.7916 22.0016 13.3316Z" fill={color} />
        </g>
    )

    const Broken = () => (
        <g>
            <path d="M2 12.6101H19" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.74 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28V17.43C18.97 20.28 18.19 21 15.22 21" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.25 17.8101H6.96997" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.10938 17.8101H12.5494" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )

    const Bulk = () => (
        <g>
            <path opacity="0.4" d="M19 10.2798V17.4298C18.97 20.2798 18.19 20.9998 15.22 20.9998H5.78003C2.76003 20.9998 2 20.2498 2 17.2698V10.2798C2 7.5798 2.63 6.7098 5 6.5698C5.24 6.5598 5.50003 6.5498 5.78003 6.5498H15.22C18.24 6.5498 19 7.2998 19 10.2798Z" fill={color} />
            <path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" fill={color} />
            <path d="M6.96027 18.5601H5.24023C4.83023 18.5601 4.49023 18.2201 4.49023 17.8101C4.49023 17.4001 4.83023 17.0601 5.24023 17.0601H6.96027C7.37027 17.0601 7.71027 17.4001 7.71027 17.8101C7.71027 18.2201 7.38027 18.5601 6.96027 18.5601Z" fill={color} />
            <path d="M12.5494 18.5601H9.10938C8.69938 18.5601 8.35938 18.2201 8.35938 17.8101C8.35938 17.4001 8.69938 17.0601 9.10938 17.0601H12.5494C12.9594 17.0601 13.2994 17.4001 13.2994 17.8101C13.2994 18.2201 12.9694 18.5601 12.5494 18.5601Z" fill={color} />
            <path d="M19 11.8599H2V13.3599H19V11.8599Z" fill={color} />
        </g>
    )
    const Linear = () => (
        <g>
            <path d="M2 12.6101H19" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.25 17.8101H6.96997" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.10986 17.8101H12.5499" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    )
    const Outline = () => (
        <g>
            <path d="M19 13.3599H2C1.59 13.3599 1.25 13.0199 1.25 12.6099C1.25 12.1999 1.59 11.8599 2 11.8599H19C19.41 11.8599 19.75 12.1999 19.75 12.6099C19.75 13.0199 19.41 13.3599 19 13.3599Z" fill={color} />
            <path d="M15.22 21.7498H5.78003C2.35003 21.7498 1.25 20.6598 1.25 17.2698V10.2798C1.25 7.5898 1.86002 5.99981 4.96002 5.81981C5.22002 5.80981 5.49003 5.7998 5.78003 5.7998H15.22C18.65 5.7998 19.75 6.8898 19.75 10.2798V17.4298C19.71 20.6998 18.61 21.7498 15.22 21.7498ZM5.78003 7.2998C5.51003 7.2998 5.26003 7.30981 5.03003 7.31981C3.24003 7.42981 2.75 7.8098 2.75 10.2798V17.2698C2.75 19.8298 3.17003 20.2498 5.78003 20.2498H15.22C17.8 20.2498 18.22 19.8498 18.25 17.4198V10.2798C18.25 7.7198 17.83 7.2998 15.22 7.2998H5.78003Z" fill={color} />
            <path d="M19 18.18C18.81 18.18 18.62 18.11 18.49 17.98C18.34 17.84 18.25 17.64 18.25 17.43V10.28C18.25 7.72 17.83 7.3 15.22 7.3H5.78003C5.51003 7.3 5.26003 7.31 5.03003 7.32C4.83003 7.33 4.62998 7.25 4.47998 7.11C4.32998 6.97 4.25 6.77 4.25 6.56C4.29 3.3 5.39003 2.25 8.78003 2.25H18.22C21.65 2.25 22.75 3.34 22.75 6.73V13.72C22.75 16.41 22.14 18 19.04 18.18C19.03 18.18 19.01 18.18 19 18.18ZM5.78003 5.8H15.22C18.65 5.8 19.75 6.89 19.75 10.28V16.6C20.91 16.39 21.25 15.79 21.25 13.72V6.73C21.25 4.17 20.83 3.75 18.22 3.75H8.78003C6.50003 3.75 5.91003 4.06 5.78003 5.8Z" fill={color} />
            <path d="M6.96027 18.5601H5.24023C4.83023 18.5601 4.49023 18.2201 4.49023 17.8101C4.49023 17.4001 4.83023 17.0601 5.24023 17.0601H6.96027C7.37027 17.0601 7.71027 17.4001 7.71027 17.8101C7.71027 18.2201 7.38027 18.5601 6.96027 18.5601Z" fill={color} />
            <path d="M12.5494 18.5601H9.10938C8.69938 18.5601 8.35938 18.2201 8.35938 17.8101C8.35938 17.4001 8.69938 17.0601 9.10938 17.0601H12.5494C12.9594 17.0601 13.2994 17.4001 13.2994 17.8101C13.2994 18.2201 12.9694 18.5601 12.5494 18.5601Z" fill={color} />
        </g>
    )
    const TwoTone = () => (
        <g>
            <path d="M2 12.6099H19" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 10.2798V17.4298C18.97 20.2798 18.19 20.9998 15.22 20.9998H5.78003C2.76003 20.9998 2 20.2498 2 17.2698V10.2798C2 7.5798 2.63 6.70981 5 6.56981C5.24 6.55981 5.50003 6.5498 5.78003 6.5498H15.22C18.24 6.5498 19 7.2998 19 10.2798Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M5.25 17.8101H6.96997" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M9.10938 17.8101H12.5494" stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
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

Cards.displayName = "Cards"
export default createPerkIcon(Cards)