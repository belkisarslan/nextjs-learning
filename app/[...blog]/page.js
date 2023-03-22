import React from 'react'
//dynamic routes
export default function Blog({params}) {
  return (
    <div> Blog: {params.blog}</div>
  )
}
