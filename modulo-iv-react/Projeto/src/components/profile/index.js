import React from 'react'
import { useGithub } from '../../hooks/github-hooks';
import * as S from './styled'

const Profile = () => {

    const { githubState } = useGithub();
    
  return (
    <S.Wrapper>
        <S.ImgWrapper
        src={ githubState.user.avatar}
        alt='GitHub avatar of user'
        />
        <S.UserInfoWrapper>
            <div>
                <h1>{ githubState.user.name }</h1>
                <S.UserDataWrapper>
                    <h3>Username: </h3>
                    <a
                    href={ githubState.user.html_url }
                    target='_blank'
                    rel='noreferrer'
                    >
                        { githubState.user.login }
                    </a>
                </S.UserDataWrapper>

                <S.UserDataWrapper>
                    <h3>Company: </h3>
                    <span>{ githubState.user.company }</span>
                </S.UserDataWrapper>

                <S.UserDataWrapper>
                    <h3>Location: </h3>
                    <span>{ githubState.user.location }</span>
                </S.UserDataWrapper>

                <S.UserDataWrapper>
                    <h3>Blog: </h3>
                    <a
                    href={ githubState.user.blog }
                    target='_blank'
                    rel='noreferrer'
                    >
                        { githubState.user.blog }
                    </a>
                </S.UserDataWrapper>
            </div>
            <S.SocialCountWrapper>
                <div>
                    <h4>Followers</h4>
                    <span>{ githubState.user.followers }</span>
                </div>
                <div>
                    <h4>Following</h4>
                    <span>{ githubState.user.following }</span>
                </div>
                <div>
                    <h4>Gists</h4>
                    <span>{ githubState.user.public_gists }</span>
                </div>
                <div>
                    <h4>Repositories</h4>
                    <span>{ githubState.user.public_repos }</span>
                </div>
            </S.SocialCountWrapper>
        </S.UserInfoWrapper>
    </S.Wrapper>
  )
};

export default Profile