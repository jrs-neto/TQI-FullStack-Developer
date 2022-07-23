import React, { useState } from 'react'
import * as S from './styled'
import { useGithub } from '../../hooks/github-hooks';


export const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();
    
    const submitGetUser = () => {
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return(
        <S.Wrapper>
            <input
            type='text'
            placeholder='Type the Username to search for'
            onChange={(event) => setUsernameForSearch(event.target.value)}
            />

            <button
            type='submit'
            onClick={submitGetUser}
            >
                Search
            </button>
        </S.Wrapper>
    );
};