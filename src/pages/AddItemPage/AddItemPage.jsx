import styled from 'styled-components';
import Header from '@components/Header';
import ItemContent from '@pages/AddItemPage/ItemContent';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 94px auto 0;
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
  background-color: ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  border: none;

  font-weight: ${({ theme }) => theme.text.textLg.fontWeight.semibold};
  font-size: ${({ theme }) => theme.text.textLg.fontSize};
  line-height: 19px;
  color: #ffffff;
`;

const AddItemPage = () => {
  return (
    <>
      <Header isLogin />
      <FormContainer>
        <FormHeader>
          <FormTitle>상품 등록하기</FormTitle>
          <RegisterBtn>등록</RegisterBtn>
        </FormHeader>
        <ItemContent />
      </FormContainer>
    </>
  );
};

export default AddItemPage;
