import { colors, device } from "@styles/variables";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.backgroundDark};
    height: 100%;
    width: 100%;
    padding: 4rem;
    justify-content: center;
    align-items: center;

    @media (${device.laptop}) {
        padding: 8rem;
        height: 80vh;
    }

    @media (${device.laptopL}) {
        padding: 8rem 25rem;
    }

    .informations {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .informations__content {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        @media (${device.laptop}) {
            justify-content: space-between;
            align-items: flex-start;
        }

    }
    
    .title-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;

        @media (${device.laptop}) {
            align-items: flex-start;
            width: max-content;
        }
    }

    .informations__title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;

        .informations__title--name {
            color: white;
            font-size: clamp(0.3rem, 3vw, 2rem);
            font-weight: 300;
        }

        .informations__title--role-desktop {
            color: ${colors.yellow};
            font-size: clamp(2rem, 5vw, 4rem);
            font-weight: 700;
            display: none;

            @media (${device.laptop}) {
                display: flex;
            }
        }

        .informations__title--role-mobile {
            color: ${colors.yellow};
            font-size: clamp(1rem, 5vw, 3.5rem);
            font-weight: 700;
            display: flex;

            @media (${device.laptop}) {
                display: none;
            }
        }
    }

    .informations__title--icon-desktop{
        width: 450px;
        height: 100%;
        display: none;

        @media (${device.laptop}) {
            display: flex;
        }
    }

    .informations__title--icon-mobile{
        width: 300px;
        height: 100%;
        
        @media (${device.laptop}) {
            display: none;
        }
    }

    .informations__description {
        display: flex;
        gap: 2rem;

        .informations__description--text {
            color: ${colors.yellow};
            font-size: clamp(0.7rem, 1vw, 1rem);
            max-width: 18.75rem;
        }
    }
`