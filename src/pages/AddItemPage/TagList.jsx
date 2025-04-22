import React from 'react';
import styled from 'styled-components';
import DeleteBtn from '@components/DeleteBtn';

const TagListContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const TagWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  align-items: center;
  padding: 6px 12px 6px 16px;
  gap: 8px;
  height: 36px;
  border-radius: 26px;
`;

const Tag = styled.p`
  font-weight: ${({ theme }) => theme.text.textLg.fontWeight.regular};
  font-size: ${({ theme }) => theme.text.textLg.fontSize};
  line-height: ${({ theme }) => theme.text.textLg.lineHeight};
  color: ${({ theme }) => theme.colors.gray800};
`;

const TagList = ({ tags, onRemove }) => {
  return (
    <TagListContainer>
      {tags.map((tag, index) => (
        <TagWrapper key={index}>
          <Tag>#{tag}</Tag>
          <DeleteBtn onClick={() => onRemove(tag)} altText="태그 삭제" />
        </TagWrapper>
      ))}
    </TagListContainer>
  );
};

export default TagList;
