import { getSortedPostsData } from '../../lib/dpo'
import { posts } from '../../cache/data'

export default (req, res) => {
  const searchData = process.env.NODE_ENV === 'production' ? posts : getSortedPostsData()
  const results = req.query.q ?
    searchData.filter(post => post.title.toLowerCase().includes(req.query.q.toLowerCase())) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const response = JSON.stringify({ results })
  console.log(response)
  res.end(response)
}