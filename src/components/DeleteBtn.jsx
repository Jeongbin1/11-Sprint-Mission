import styled from 'styled-components';
import XIcon from '@images/ic_X.svg';

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  z-index: 10;
`;

const DeleteBtn = ({ onClick, altText, className }) => {
  return (
    <Button className={className} type="button" onClick={onClick}>
      <img src={XIcon} alt={altText} />
    </Button>
  );
};

export default DeleteBtn;
