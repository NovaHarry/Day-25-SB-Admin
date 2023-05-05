import './Dashboard.css';
import { Button, Card } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';



function Dashboard() {
    const data = [
        {
            section: "EARNINGS (MONTHLY)",
            earnings: "$40,000",
            icon: "fa-solid fa-calendar"
        },
        {
            section: "EARNINGS (ANNUAL)",
            earnings: "$215,000",
            icon: "fa fa-usd"
        },
        {
            section: "Tasks",
            earnings: "$50%",
            icon: "fa-solid fa-clipboard-list"
        },
        {
            section: "PENDING REQUESTS",
            earnings: "18",
            icon: "fa-regular fa-comments"
        },
    ];


    return (

        <div className="container">
            <div className="main-dashboard">
                <div className="dashboard">
                    <h1>DASHBOARD</h1>
                </div>
                <div className='cards'>
                    {data.map((section, idx) => <Cards
                        section={section}
                        idx={idx}
                    />)}
                </div>
                
            </div>
            <div className="earnings-revenue color">
                Earnings-Revenue
            </div>
            <div className="projects-illustrations color">
                Projects-Illustrations
            </div>
        </div>
    );
}

export default Dashboard;

function Cards({ section, idx }) {
    return (
        <div className="sub-cards">
            <Card.Body className="cards-contents">
                <div>
                    <h6>{section.section}</h6>
                    <h6>{section.earnings}</h6>
                </div>
                <div className='icons'>
                    <i className={section.icon}></i>
                </div>
            </Card.Body>
        </div>
    )
}