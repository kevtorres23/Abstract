import React from "react";
import tinycolor from "tinycolor2";

type tagsProps = {
    name: string,
    color: string,
    id: number,
}

function Tags(props: tagsProps) {

    // esta función convierte el valor hexadecimal de props.color a su valor RGB y reduce su transparencia hasta el 12%.
    function opacityReducer(color: string) {
        const receivedColor = tinycolor(color);
        receivedColor.setAlpha(0.12);
        return receivedColor.toRgbString();
    }

    const opaqueBg = opacityReducer(props.color);

    const tagStyles = {
        color: props.color,
        backgroundColor: opaqueBg,
        fontSize: "12px",
        fontWeight: "500",
        borderRadius: "6px",
        paddingBlock: "4px",
        paddingInline: "8px",
        alignSelf: "self-start",

    }

    return(
        <div style={tagStyles}>{props.name}</div>
    )
}

export default Tags;