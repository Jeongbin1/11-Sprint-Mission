import styled from 'styled-components';
import PlusIcon from '@images/ic_plus.svg';

const ImageWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

const UploadBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 41px 47px;
  gap: 12px;

  width: 168px;
  height: 168px;

  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  border: none;

  cursor: pointer;

  font-weight: ${({ theme }) => theme.text.textLg.fontWeight.regular};
  font-size: ${({ theme }) => theme.text.textLg.fontSize};
  line-height: ${({ theme }) => theme.text.textLg.lineHeight};
  color: ${({ theme }) => theme.colors.gray400};
`;

const ImagePreview = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const ItemImage = () => {
  return (
    <ImageWrapper>
      <UploadBtn>
        <img src={PlusIcon} alt="업로드 아이콘" />
        <span>이미지 등록</span>
      </UploadBtn>
    </ImageWrapper>
  );
};

export default ItemImage;
