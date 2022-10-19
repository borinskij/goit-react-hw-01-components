import css from './Stats.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ data }) => {
  function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  return (
    <ul className={css.list}>
      {data.map(data => (
        <li
          className={css.item}
          key={data.id}
          style={{ backgroundColor: generateColor() }}
        >
          <span className="labelName">{data.label}</span>
          <span className="percentageName">{data.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

Stats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
