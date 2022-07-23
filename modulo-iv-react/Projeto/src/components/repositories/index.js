import React, { useEffect, useState } from 'react';
import { useGithub } from '../../hooks/github-hooks';
import { RepositoryItem } from '../repository-item';
import * as S from './styled';

export const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForRepos, setHasUserForRepos] = useState(false);

  useEffect(() => {
    if(!!githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForRepos(!!githubState.repositories);
  }, [githubState.user.login]);
  

  return (
    <>
      { hasUserForRepos ? (
        <S.TabsWrapper
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
          <S.TabListWrapper>
            <S.TabWrapper>Repositories</S.TabWrapper>
            <S.TabWrapper>Starred</S.TabWrapper>
          </S.TabListWrapper>

          <S.TabPanelWrapper>
            <S.ListWrapper>
              { githubState.repositories.map((item) => (
                <RepositoryItem
                key={item.id}
                name={item.name}
                linkToRepo={item.html_url}
                fullName={item.full_name}
                />
              ))}
            </S.ListWrapper>
          </S.TabPanelWrapper>
          <S.TabPanelWrapper>
          <S.ListWrapper>
            { githubState.starred.map((item) => (
              <RepositoryItem
              key={item.id}
              name={item.name}
              linkToRepo={item.html_url}
              fullName={item.full_name}
              />
            ))}
          </S.ListWrapper>
          </S.TabPanelWrapper>
        </S.TabsWrapper>
      ) : (<></>)}
    </>
  )
};
