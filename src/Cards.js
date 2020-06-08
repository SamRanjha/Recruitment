import React,{Component} from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './Cards.css'




export default class Cards extends Component{


render(){
    return (
        // <div>
        // <p>"Sameer</p>  
        // <Card style={{ width: '16rem' }}>
        //     <Card.Img variant="top" src={this.props.img} />
        //     <Card.Body>
        //         <Card.Title>{this.props.name}</Card.Title>
        //     </Card.Body>
        //     <ListGroup className="list-group-flush">
        //         <ListGroupItem>Description: {this.props.description}</ListGroupItem>
        //         <ListGroupItem>Company: {this.props.company}</ListGroupItem>
        //         <ListGroupItem>Address: {this.props.address}</ListGroupItem>
        //     </ListGroup>
        //     <Card.Body>
        //         <p> <Button variant="primary">Show more</Button></p>
        //     </Card.Body>
        // </Card>
        
       // </div>

        <div className = "card text-center">
            <div className='overflow'>
            <img src = {this.props.img} alt = "Undefined" className='card-img-top'></img>
            </div>
            <div className = "card-body.text-dark">
            <h4 className = "card-title">{this.props.name}</h4>
            <p className = "card-text text-secondary">
            
            <ListGroup className="list-group-flush">
                <ListGroupItem>Description: {this.props.description}</ListGroupItem>
                <ListGroupItem>Company: {this.props.company}</ListGroupItem>
                <ListGroupItem>Address: {this.props.address}</ListGroupItem>
            </ListGroup>
            </p>
            <Button variant="primary">Show more</Button>
            </div>
        </div>

//         <Card  border="success" style={{ width: '18rem' }}>
//   <div class="fill"><Card.Img variant="top" src={this.props.img} /></div>
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Cras justo odio</ListGroupItem>
//     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//     <ListGroupItem>Vestibulum at eros</ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>

    )

  }

}
