import './BlogDetailTitle.css'
const blogDetailImage = ({ image }) => {
  console.log(image)
  return (
    <div class="blogTitle" aria-label="블로그 title" style={{ backgroundImage: image }}>
      <h1>안녕하세요</h1>
    </div>
  )
}
export default blogDetailImage