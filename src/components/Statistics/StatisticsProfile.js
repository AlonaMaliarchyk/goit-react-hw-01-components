import PropTypes from 'prop-types';

function UsersStatistics({title, stats}) {
    return (
        <div>
        <section>
            <h2>{title}</h2>

                <ul>
                    {stats.map(stat => (
                    <li key={stat.id} >
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
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
export default UsersStatistics;