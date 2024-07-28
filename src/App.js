import "./App.css";
import { Button, Card } from "react-bootstrap";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";

function App() {
  let firstName = "Seif";
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle>
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>

          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      {firstName ? (
        <div>
          <h3>Hello {firstName}</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt=""
            width={150}
          />
        </div>
      ) : (
        <h3>Hello there</h3>
      )}
    </div>
  );
}

export default App;
