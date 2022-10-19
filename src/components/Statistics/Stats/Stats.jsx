import data from 'assets/data.json';
import css from './Stats.module.css';
console.log('data :', data);

export const Stats = () => {
  return (
    <ul className={css.list}>
      {data.map(data => (
        <li className={css.item} key={data.id}>
          <span className="labelName">{data.label}</span>
          <span className="percentageName">{data.percentage}</span>
        </li>
      ))}
    </ul>
  );
};
//  { "id": "id-5", "label": ".pdf", "percentage": 10 }
