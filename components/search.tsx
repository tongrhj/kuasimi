import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './search.module.css'

import utilStyles from '../styles/utils.module.css'

const capitalize = (s:string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function Search({
  allPostsData
}: {
  allPostsData: {
    category: string
    title: string
    id: string
  }[]
}) {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  const categories = Array.from(new Set(allPostsData.map(({ category }) => category)))

  return (
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={styles.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search businesses'
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
              <li>
                <Link key={id} href="/dpo/[id]" as={`/dpo/${id}`}>
                  <a className={styles.result}>{title}</a>
                </Link>
              </li>
          ))}
        </ul>
      ) }

      { !active && (<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h3>or browse</h3>
        {categories.map(category => (<><h2 className={utilStyles.headingLg}>{capitalize(category)}</h2>
          <ul className={utilStyles.list}>
            {allPostsData.filter((p) => p.category === category).map(({ id, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/dpo/${encodeURIComponent(id)}`}>
                  <a>{title}</a>
                </Link>
                <br />
              </li>
            ))}
        </ul></>))}
    </section>) }
    </div>
  )
}
