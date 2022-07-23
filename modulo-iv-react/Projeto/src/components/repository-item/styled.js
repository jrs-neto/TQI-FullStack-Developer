import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 16px; 16px;
    padding: 8px;
    width: 350px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleWrapper = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 8px auto;
`;

export const LinkWrapper = styled.a`
    font-size: 1rem;
    font-weight: bold;
    margin: 8px auto;
    color: blue;
`;