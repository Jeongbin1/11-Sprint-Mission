import styled from 'styled-components';
import XIcon from '@images/ic_X.svg';

const Button = styled.button`
  cursor: pointer;
  border: none;
`;

const DeleteBtn = ({ onClick, altText }) => {
  return (
    <Button type="button" onClick={onClick}>
      <img src={XIcon} alt={altText} />
    </Button>
  );
};

export default DeleteBtn;
