import './App.css'
import Card from "./components/card/card.tsx";

function App() {
    return (
        <>
            <Card
                title="Card Title"
                description="Card Description"
                assignedTo="John Doe"
                startDate="2021-01-01"
                endDate="2021-01-31"
            >
            </Card>
            <Card
                title="Card Title 2"
                description="Card Description 2"
                assignedTo="Gastón Bauer"
                startDate="2021-01-01"
                endDate="2021-01-31"
            >
            </Card>
            <Card
                title="Card Title 3"
                description="Card Description 3"
                assignedTo="Juan Perez"
                startDate="2021-01-01"
                endDate="2021-01-31"
            >
            </Card>

        </>
    )
}

export default App;
