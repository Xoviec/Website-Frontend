import React from 'react'
import styled from 'styled-components'
import VideoJS from '../VideoJS'
import config from '../../config.json'

const StyledPlayer = styled(VideoJS)`
  width: 100%;
  height:80vh;
  position: relative;
  top: 0;
  left: 0;
`

const StyledVideoDisplayDiv = styled.div`
  width: 100%;
  height:80vh;
  position: relative;
`

const VideoDisplay = ({ className, streamables, poster }) => {
  const newSources = streamables.map((streamable, key) => {
    return { src: `${process.env.S3_DOMAIN || config.env.S3_DOMAIN}/${streamable.s3Bucket}/${streamable.s3Object}`, type: 'application/x-mpegURL' }
  })
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [newSources]
  }
  return (
    <StyledVideoDisplayDiv>
      <StyledPlayer {...videoJsOptions} fluid={false} responsive={true} fill={true} autoplay={false}/>
    </StyledVideoDisplayDiv>
  )
}
export default VideoDisplay
