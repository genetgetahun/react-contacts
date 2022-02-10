import Card from 'react-bootstrap/Card'
const  ContactDetailsCard = ({ contact }) => {
    return (
        <Card style={{ width: '20rem',}} className="container">
            <div>
                <Card.Img variant="top"src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </div>
            <div>
                <Card.Text>{contact?.firstName} {contact?.lastName}</Card.Text>
                <dl>
                    <Card.Title>Phone Number</Card.Title>
                    <dd>{contact?.phoneNumber}</dd>

                    <Card.Title >Email</Card.Title>
                    <dd style={{textDecoration:"underline"}}>{contact?.email}</dd>

                    <Card.Title>Address</Card.Title>
                    <dd>{contact?.address}</dd>
                </dl>
            </div>
        </Card>
    )
}

export default ContactDetailsCard;