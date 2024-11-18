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
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  /* Cool Gray/800 */
  color: #1f2937;
`;

const RegisterBtn = styled.button`
  padding: 12px 23px;
  background: #9ca3af;
  border-radius: 8px;
  border: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
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
