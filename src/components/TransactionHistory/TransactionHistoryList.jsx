import PropTypes from 'prop-types';

export const List = ({ data }) => {
  return (
    <>
      {data.map(data => (
        // <tbody>
        <tr key={data.id}>
          <td>{data.type}</td>
          <td>{data.amount}</td>
          <td>{data.currency}</td>
        </tr>
        // </tbody>
      ))}
    </>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
