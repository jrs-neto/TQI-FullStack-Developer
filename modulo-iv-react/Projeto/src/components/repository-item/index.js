import React from 'react'
import * as S from './styled'

export const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
        <S.TitleWrapper>{name}</S.TitleWrapper>
        <S.LinkWrapper
        href={linkToRepo}
        target='_blank'
        rel='noreferrer'
        >
            {fullName}
        </S.LinkWrapper>
    </S.Wrapper>
  )
};
