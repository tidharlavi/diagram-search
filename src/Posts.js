import React from 'react'
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export default function Posts({
  posts = []
}) {
  return (
    <>
      {
        posts.map(post => (
          <Link to={`/post/${post.id}`} className={linkStyle} key={post.id}>
            <div key={post.id} className={postContainer}>
              <h1 className={postTitleStyle}>{post.name}</h1>
              <div className={containerStyle}>
                <img alt="post" className={imageStyle} src={post.image} />
              </div>
            </div>
          </Link>
        ))
      }
    </>
  )
}

const postTitleStyle = css`
  margin: 15px 0px;
`

const linkStyle = css`
  text-decoration: none;
`

const postContainer = css`
  border-radius: 10px;
  padding: 1px 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  :hover {
    border-color: #0070f3;
  }
`
const containerStyle = css`
  width: 80%;
  margin-left: 10%;
`

const imageStyle = css`
  max-height: 300px;
  max-width: 100%; 
  border: 1px solid #55555538; 
`
