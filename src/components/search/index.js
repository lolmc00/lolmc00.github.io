import React, { useState, createRef } from "react"
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

import { Root, HitsWrapper, PoweredBy } from "./styles"
import Input from "./Input"
import * as hitComps from "./hitComps"

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

export default function Search({ indices, collapse, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
    >
      <Input onFocus={() => setFocus(true)} onBlur={() => {setFocus(false)}}  {...{ collapse, focus }} />
      <HitsWrapper show={query.length > 0 && focus} asGrid={hitsAsGrid}>
        {indices.map(({ name, title, hitComp }) => (
        <Index key={name} indexName={name}>
          <header style={{color: "black"}}>
            <h3 style={{color: "black"}}>{title}</h3>
            <Stats style={{color: "black"}}/>
          </header>
          <Results/>
          <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
        </Index>
        ))}
        <PoweredBy />
      </HitsWrapper>
    </InstantSearch>
  )
}