export const Button = ({ onClick, isLoading }) => {
  return (
    <button onClick={onClick} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
};
