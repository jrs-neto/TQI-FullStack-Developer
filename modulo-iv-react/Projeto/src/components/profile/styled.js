import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 30px auto;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 250px;
    margin-left: 8px;

    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const SocialCountWrapper = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
`;

export const UserDataWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    
    h3 {
        margin-right: 8px;
    }

    a {
        color: blue;
        font-size: 18px;
        font-weight: bold;
    }
`;

export const ImgWrapper = styled.img`
    width: 200px;
    border-radius: 50%; 
    margin: 8px;
`;