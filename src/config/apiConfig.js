const url = "https://dev-backend.shoptype.com";

const endPoints ={
    login: () => `${url}/login`,
    socialLogin: () => `${url}/social-login?rid=607274ee0cb35c0b894cb2bc`,
    logout: () => `${url}/logout`,
    signup: () => `${url}/register?rid=607274ee0cb35c0b894cb2bc`,
}

export default endPoints;