import styled from 'styled-components';
import ItemImage from '@pages/AddItemPage/ItemImage';
import { useEffect, useState } from 'react';
import TagList from '@pages/AddItemPage/TagList';

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FieldLabel = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.text.text2lg.fontWeight.bold};
  font-size: ${({ theme }) => theme.text.text2lg.fontSize};
  line-height: 21px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const FieldInput = styled.input`
  padding: 16px 24px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  border: none;

  font-weight: ${({ theme }) => theme.text.textLg.fontWeight.regular};
  font-size: ${({ theme }) => theme.text.textLg.fontSize};
  line-height: ${({ theme }) => theme.text.textLg.lineHeight};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const FieldTextarea = styled(FieldInput).attrs({ as: 'textarea' })`
  height: 282px;
  resize: none;
`;

const ItemContent = ({ onRegisterActive }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  let debounceTimeout;

  const handlePriceChange = (e) => {
    let value = e.target.value;

    // 숫자가 아닌 값은 포함하지 않도록
    if (/[^0-9,]/.test(value)) {
      return;
    }

    value = value.replaceAll(',', '');
    // 모든 값을 지웠을 때
    if (value === '') {
      setPrice('');
    } else {
      // 유효한 number일 때 천 단위 구분 기호 추가
      setPrice(Number(value).toLocaleString('ko-KR'));
    }
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      clearTimeout(debounceTimeout);
      // 한글 조합형 중복 문제로 디바운스 추가
      debounceTimeout = setTimeout(() => {
        setTags((prevTags) => [...prevTags, tagInput.trim()]);
        setTagInput('');
      }, 100);
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  useEffect(() => {
    const isFormValid =
      productName && productDescription && price && tags.length > 0;
    onRegisterActive(isFormValid);
  }, [productName, productDescription, price, tags, onRegisterActive]);

  return (
    <>
      <FieldWrapper>
        <FieldLabel htmlFor="productImage">상품 이미지</FieldLabel>
        <ItemImage />
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="productName">상품명</FieldLabel>
        <FieldInput
          type="text"
          id="productName"
          name="productName"
          placeholder="상품명을 입력해주세요"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="productDescription">상품 소개</FieldLabel>
        <FieldTextarea
          id="productDescription"
          name="productDescription"
          placeholder="상품 소개를 입력해주세요"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
        />
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="productPrice">판매 가격</FieldLabel>
        <FieldInput
          type="text"
          inputmode="numeric"
          id="productPrice"
          name="productPrice"
          value={price}
          onChange={handlePriceChange}
          placeholder="판매 가격을 입력해주세요"
          required
        />
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="productTags">태그</FieldLabel>
        <FieldInput
          type="text"
          id="productTags"
          name="productTags"
          placeholder="태그를 입력해주세요"
          value={tagInput}
          onChange={handleTagChange}
          onKeyDown={handleKeyDown}
          required
        />
        <TagList tags={tags} onRemove={handleTagRemove} />
      </FieldWrapper>
    </>
  );
};

export default ItemContent;
