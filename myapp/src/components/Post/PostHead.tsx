import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import PostHeadInfo, { PostHeadInfoProps } from "components/Post/PostHeadInfo"

interface GatsbyImgProps {
  image: IGatsbyImageData
  alt: string
  className?: string
}

interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: IGatsbyImageData
}

function PostHead({ thumbnail, title, date, categories }: PostHeadProps) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: "absolute" }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`
