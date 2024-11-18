import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/style.css';
import imgLogo from '../images/logo.png';
import imgProfile from '../images/ic_profile_large.svg';

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 16px;
  border-bottom: 1px solid #dfdfdf;

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 200px;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

const NavMenu = styled.div`
  display: flex;
`;

// Link + style (확장)
const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 21px 15px;
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blue100 : theme.colors.gray600};
  text-decoration: none;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogoImage = styled.img`
  width: 153px;
  height: 51px;
`;

const LoginBtn = styled(Link)`
  padding: 11px 43px;
  min-width: 128px;
  background-color: var(--blue);
  border-radius: 8px;
  color: var(--gray100);
  text-decoration: none;
  font-size: 16px;
`;

const Header = ({ isLogin }) => {
  const location = useLocation();

  const isItemsPage = location.pathname === '/items';
  const isAddItemPage = location.pathname === '/additem';

  return (
    <Nav>
      <NavContent>
        <Logo to="/">
          <LogoImage src={imgLogo} alt="사이트 로고" />
        </Logo>
        {isLogin && (
          <NavMenu>
            <NavItem to="/items" isActive={isItemsPage}>
              자유게시판
            </NavItem>
            <NavItem to="/additem" isActive={isAddItemPage}>
              중고마켓
            </NavItem>
          </NavMenu>
        )}
      </NavContent>
      {isLogin ? (
        <img src={imgProfile} alt="프로필 사진" />
      ) : (
        <LoginBtn to="/login">로그인</LoginBtn>
      )}
    </Nav>
  );
};

export default Header;
