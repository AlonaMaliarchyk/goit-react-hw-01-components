import PropTypes from 'prop-types';
import TransactionCss from './TransactionStyle.module.css';

function TransactionHistory({items}) {
    return (
        <table className={TransactionCss.transaction_history}>
            <thead>
                <tr className={TransactionCss.header}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
            </tbody>
    </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    ),
};

export default TransactionHistory;


