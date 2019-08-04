import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import BlogDetailComponent from '../../components/BlogDetail/BlogDetailComponent'
const BlogDetail = props => {
  const router = useRouter()
  const { blogNo } = router.query
  return (
    <Layout>
      <BlogDetailComponent blogNo={blogNo} />
    </Layout>
  )
}
export default BlogDetail
