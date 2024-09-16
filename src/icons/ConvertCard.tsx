import React from "react";
import createPerkIcon from "@/utils/createPerkIcon";
import { IconWrapperProps } from "@/utils/createPerkIcon";

//@ts-ignore
const ConvertCard: React.FC<IconWrapperProps> = ({ color = 'currentColor', set = 'outline', strokeWidth }) => {
    const Bold = () => (
        <g></g>
    )

    const Broken = () => (
        <g></g>
    )

    const Bulk = () => (
        <g></g>
    )
    const Linear = () => (
        <g></g>
    )
    const Outline = () => (
        <g></g>
    )
    const TwoTone = () => (
        <g></g>
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

ConvertCard.displayName = "ConvertCard"
export default createPerkIcon(ConvertCard)