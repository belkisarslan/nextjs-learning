import React from 'react'
import Movies from "@/mocks/movies.json"
import { FeaturedMovie } from '@/components/featured-movie'

export default function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[1]}/>
    </div>
  )
}
