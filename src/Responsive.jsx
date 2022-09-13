import { css } from "styled-components";




export const minimobile = (props) => {
    return css`
                @media only screen and (max-width:460px){
                    ${props}
                }`;

}

export const mobile = (props) => {
    return css`
                @media only screen and (max-width:650px){
                    ${props}
                }`;

}

export const tablet = (props) => {
    return css`
            @media only screen and (max-width: 1008px){
                ${props}
            }`;
}

export const laptop = (props) => {
    return css`
            @media only screen and (max-width: 1350px){
                ${props}
            }`;
}