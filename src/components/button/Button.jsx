import { ButtonStyle } from './Button.styled';

export const Button = ({ onClick, isLoading }) => {
  return (
    <ButtonStyle onClick={onClick} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Load More'}
    </ButtonStyle>
  );
};
