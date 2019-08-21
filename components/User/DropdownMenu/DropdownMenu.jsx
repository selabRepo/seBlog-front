import './_DropdownMenu.scss'
const DropdownMenu = () => {
  return (
    <div className="dropdownContent">
      {/* <a className="dropdownDetail-home" href="#">
        홈
      </a> */}
      <a className="dropdownDetail">글 쓰기</a>
      <a className="dropdownDetail">정보 수정</a>
      <a className="dropdownDetail-logOut">로그 아웃</a>
    </div>
  )
}

export default DropdownMenu
