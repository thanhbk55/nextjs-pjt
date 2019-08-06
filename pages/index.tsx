import Layout from '../components/Layout'
import PostLink from '../components/PostLink'
const Page = () => (
  <>
    <h1>Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </>
)
export default Layout(Page)