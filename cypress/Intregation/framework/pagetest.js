import Login_po from "../../support/PageObjects/OrangeHRM/loginPage";
import Link_po from "../../support/PageObjects/OrangeHRM/link_po";
import Logout_po from "../../support/PageObjects/OrangeHRM/logout_po";

describe('', () => {

    const login_po = new Login_po();
    const link_po = new Link_po();
    const logout_po = new Logout_po();


    it('', () => {

        login_po.EnterURl();
        login_po.Login();
        link_po.linkclick('Admin');
        logout_po.logout();
        
    });
});