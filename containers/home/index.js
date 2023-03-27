import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import { FeaturedMovie } from '@/components/featured-movie'
import Categories from '@/components/categories'

export default function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[1]}/>
      <Categories categories={Genres.genres.slice(0,5)}/>
    </div>
  )
}
