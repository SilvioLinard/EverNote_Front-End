import Api from "./api";

const UserService = {
  register: (params) => Api.post("/users/register", params),

  login: async (params) => {
    try {
      const response = await Api.post("/users/login", params);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },

  logOut: () => {
    localStorage.removeItem("user");   
    localStorage.removeItem("token");  
  },

  getUser: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  isLoggedIn: () => {
    return !!localStorage.getItem("token");
  }
};

export default UserService;
