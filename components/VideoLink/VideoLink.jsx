import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Link from '../Link'

const StyledImg = styled.img`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`

const StyledVideoLinkDiv = styled.div`
  position: relative;
`

const VideoLink = ({ className, title, description, poster, link }) => (
  <StyledVideoLinkDiv>
    <Link href={link}>
      <span>
        <StyledImg src={poster} />
        <Heading type="h2">{title}</Heading>
        <Paragraph>{description}</Paragraph>
      </span>
    </Link>
  </StyledVideoLinkDiv>
)

export default VideoLink