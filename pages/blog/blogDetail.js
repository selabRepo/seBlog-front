import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
const BlogDetail = props => {
  const router = useRouter()
  const { blogNo } = router.query
  return <Layout>{blogNo}detail!!!</Layout>
}
export default BlogDetail
