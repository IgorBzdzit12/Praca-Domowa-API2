import { Login } from  './pages/Login';
import { HomePage } from '../HomePage';

const LoginPage = new Login();
const HomePage = new HomePage();

describe('Testing the login page', () => {

    it('JTest 1: should login and logout with user888@gmail.com'  , () => {
        LoginPage.visit();
        LoginPage.login('user888@gmail.com', '1234567890');
        HomePage.logout();
    });
});

describe('Testing the login page', () => {

    it('JTest 2: should login and logout with testowyqa@qa.team'  , () => {
        LoginPage.visit();
        LoginPage.login('testowyqa@qa.team', 'QA!automation-1');
        HomePage.logout();
    });
});