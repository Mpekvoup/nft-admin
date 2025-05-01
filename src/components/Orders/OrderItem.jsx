import { Link } from "react-router-dom";
import { DELETE_ORDER, DETAIL_ORDER } from "../../utils/consts";

function OrderItem ({order}) {
    function formatDate(isoString) {
        if (!isoString) return "Неизвестно";
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        return new Date(isoString).toLocaleString('kk-KZ', options);
    }

    return(
        <tr>
            <td>{order.id}</td>
            <td>{order.customer.name} {order.customer.phone}</td>
            <td>{formatDate(order.orderTimeStamp)}</td>
            <td colSpan="3" className="actions-category" style={{border: "none "}}>
                <Link to={DETAIL_ORDER.replace(':id', order.id)} className="btn bg-success">Смотреть</Link>
                <Link to={DELETE_ORDER.replace(':id', order.id)} className="btn bg-danger">Удалить</Link>
            </td>
        </tr>
    );
}

export default OrderItem;