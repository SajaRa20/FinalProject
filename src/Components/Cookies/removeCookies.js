import Cookie from 'js-cookie'

const RemoveCookie = (cookienam)=> {
  return  Cookie.remove(cookienam);
};
export default RemoveCookie;