// 根据实际需要修改
const getters = {
  sidebar: state => state.app.sidebar,
  name: state => state.user.name,
  // language: state => state.user.language,
  permission_routes: state => state.permission.routes,
  menu: state => state.user.menu,
  roles: state => state.user.roles,
  buttom_height: state => state.app.buttomHeight
}
export default getters
