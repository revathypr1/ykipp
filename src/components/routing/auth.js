class Auth {
    constructor() {
        this.authenticated = false;
        this.setAuthStatus();
    }
    setAuthStatus() {
        let user_data_str = localStorage.getItem("user_data");
        let user_data = JSON.parse(user_data_str);
        if (user_data) {
            if (user_data.is_verified) {
                this.authenticated = true;
            }
        }
    }
    login(cb) {
        this.authenticated = true;
        cb();
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
