import PropTypes from 'prop-types';
import StatisticsCss from './StatisticsStyle.module.css';

function UsersStatistics({ title, stats }) {
    return (
        <div>
        <section className={StatisticsCss.statistics}>
            <h2 className={StatisticsCss.title}>{title}</h2>

                <ul className={StatisticsCss.statList}>
                    {stats.map(stat => (
                    <li key={stat.id} style={{'backgroundColor': getRandomColor()}} className={StatisticsCss.item}>
                            <span  className={StatisticsCss.label}>{stat.label}</span>
                    <span className={StatisticsCss.percentage}>{stat.percentage}%</span>
                </li>
                    ))}
            </ul>
        </section>
    </div>
    )
    
};
UsersStatistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ),
};

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

export default UsersStatistics;