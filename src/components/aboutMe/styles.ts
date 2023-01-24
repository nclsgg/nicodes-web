import styled from "styled-components";
import { colors, device } from "@styles/variables";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.backgroundLight};
    height: 100%;
    width: 100%;
    padding: 4rem;
    justify-content: center;
    align-items: center;

    @media (${device.laptop}) {
        padding: 8rem;
    }

    @media (${device.laptopL}) {
        padding: 8rem 25rem;
        height: 80vh;
    }

    .about-me {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 8rem;

        @media (${device.laptop}) {
            flex-direction: row;
            gap: 5rem;
        }
        
    }

    .about-me__icon {
        width: 300px;
        height: 100%;

        @media (${device.laptop}) {
            width: 450px;
        }
    }

    .about-me__information {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }

    .about-me__information--item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: ${colors.darkGray};

        .about-me__information--item-title {
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            font-weight: 700;
        }

        .about-me__information--item-text {
            max-width: 31.25rem;
            font-size: clamp(0.5rem, 3vw, 1rem);

            @media (${device.laptopL}) {
                max-width: 600px;
            }
        }
    }
`;