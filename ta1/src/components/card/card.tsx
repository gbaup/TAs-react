import cardProps from "../../interfaces/cardProps.ts";
import './style.css';


function Card(props: cardProps) {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="text-4xl font-bold font-serif">{props.title}</h1>
            </div>
            <div className="card-content">
                <p>{props.description}</p>
                <p>Assigned to: {props.assignedTo}</p>
                <p>Start Date: {props.startDate}</p>
                <p>End Date: {props.endDate}</p>
            </div>

        </div>
    );
}

export default Card;