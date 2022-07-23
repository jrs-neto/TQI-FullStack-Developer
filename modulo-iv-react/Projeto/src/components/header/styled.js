import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 30px;
        padding: 8px;
        font-weight: 500;
    }

    button {
        background-color: #225de8;
        padding: 6px 8px;
        margin: 0 16px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        transition: all .3s ease-in-out;

        &:hover {
            color: #ccc;
            box-shadow: 5px 3px 8px rgba(0, 0, 0, .5);
        }
    }
`;