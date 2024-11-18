import styled from 'styled-components';
import PlusIcon from '@images/ic_plus.svg';
import { useRef, useState } from 'react';
import DeleteBtn from 'components/DeleteBtn';

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

  @media (min-width: 1200px) {
    width: 282px;
    height: 282px;
  }
`;

const ImagePreviewWrapper = styled.div`
  position: relative;
`;

const ImagePreview = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 12px;
  object-fit: cover;

  @media (min-width: 1200px) {
    width: 282px;
    height: 282px;
  }
`;

const ImageDeleteBtn = styled(DeleteBtn)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const WarningMsg = styled.p`
  font-weight: ${({ theme }) => theme.text.textLg.fontWeight.regular};
  font-size: ${({ theme }) => theme.text.textLg.fontSize};
  line-height: ${({ theme }) => theme.text.textLg.lineHeight};
  color: ${({ theme }) => theme.colors.red};
`;

const ItemImage = () => {
  const [image, setImage] = useState(null);
  const [isWarningVisible, setIsWarningVisible] = useState(false);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (image) {
      setIsWarningVisible(true);
    } else {
      inputRef.current.click();
    }
  };

  const handleImageUpload = (e) => {
    if (image) {
      return;
    }

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteClick = () => {
    setImage(null);
    setIsWarningVisible(false);
  };

  return (
    <>
      <ImageWrapper>
        <UploadBtn onClick={handleButtonClick}>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <img src={PlusIcon} alt="업로드 아이콘" />
          <span>이미지 등록</span>
        </UploadBtn>
        {image && (
          <ImagePreviewWrapper>
            <ImagePreview src={image} alt="이미지 미리보기" />
            <ImageDeleteBtn onClick={handleDeleteClick} altText="삭제 버튼" />
          </ImagePreviewWrapper>
        )}
      </ImageWrapper>
      {isWarningVisible && (
        <WarningMsg>이미지 등록은 최대 1개까지 가능합니다.</WarningMsg>
      )}
    </>
  );
};

export default ItemImage;
