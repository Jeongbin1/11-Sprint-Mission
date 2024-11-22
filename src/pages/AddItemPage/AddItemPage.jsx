import styled from 'styled-components';
import Header from '@components/Header';
import ItemContent from '@pages/AddItemPage/ItemContent';
import { useState } from 'react';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 94px auto 70px;
  padding: 0 15px;

  @media (min-width: 768px) {
    width: 696px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  height: 42px;
  justify-content: space-between;
`;

const FormTitle = styled.h3`
  display: flex;
  align-items: center;
  font-family: 'Pretendard';
  font-weight: ${({ theme }) => theme.text.text2xl.fontWeight.bold};
  line-height: ${({ theme }) => theme.text.text2xl.lineHeight};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const RegisterBtn = styled.button`
  padding: 12px 23px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue100 : theme.colors.gray400};
  border-radius: 8px;
  border: none;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};

  font-weight: ${({ theme }) => theme.text.textLg.fontWeight.semibold};
  font-size: ${({ theme }) => theme.text.textLg.fontSize};
  line-height: 19px;
  color: #ffffff;
`;

const AddItemPage = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleButtonActive = (isActive) => {
    setIsRegisterActive(isActive);
  };

  return (
    <>
      <Header isLogin />
      <FormContainer>
        <FormHeader>
          <FormTitle>상품 등록하기</FormTitle>
          <RegisterBtn isActive={isRegisterActive}>등록</RegisterBtn>
        </FormHeader>
        <ItemContent onRegisterActive={handleButtonActive} />
      </FormContainer>
    </>
  );
};

export default AddItemPage;
