import css from './Statistics.module.css';
import { Title } from '../Statistics/Title/Title.jsx';
import { Stats } from '../Statistics/Stats/Stats';

export const Statisics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <Title />
      <Stats data={data} />
    </section>
  );
};
