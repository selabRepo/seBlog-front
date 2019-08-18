import './_DropdownMenu.scss'
const DropdownMenu = () => {
  return (
    <div className="dropdownContent">
      <a className="dropdownDetail" href="#">
        홈
      </a>
      <a className="dropdownDetail">회사소개</a>
      <a className="dropdownDetail">제품소개</a>
      <a className="dropdownDetail">오시는길</a>
    </div>
  )
}

export default DropdownMenu
