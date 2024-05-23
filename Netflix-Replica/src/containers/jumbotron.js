import {Jumbotron} from "../components";
// Jumbotron needs to be between {} since it containers several named values
// and we need acess to all of them
import jumboData from '../fixtures/jumbo.json';

export default function JumbotronContainer() {
  return (
    // Jumbotron.Container, .Title, etc all come from inside Jumbotron, thats why we defined them like we did
    //inside Jumbotron/index.js, so we could easily acess them like this
    <Jumbotron.Container>
      {jumboData.map((item) =>(
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title >{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle >{item.subTitle}</Jumbotron.SubTitle >
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src ={item.image} />
          </Jumbotron.Pane>  
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
