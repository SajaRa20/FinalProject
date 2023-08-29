import Cookie from 'js-cookie'

const GetCookie = (cookienam)=> {
  return  Cookie.get(cookienam);
};
export default GetCookie;