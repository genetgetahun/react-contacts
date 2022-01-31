import { CardImage, Button } from "../Style";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    <div className="contactCard">
      <div className="infoContainer">
        <div>
          <CardImage
            src={profilePic}
            alt={`Profile of ${firstName} ${lastName}.`}
          />
        </div>
        <div className="info">
          <p className="infoDetail">
            {firstName} {lastName}
          </p>
          <p className="infoDetail">{phoneNumber}</p>
        </div>
      </div>
      <div>
        <Button type="button">{`\u2716`}</Button>
      </div>
    </div>
  );
};

export default ContactCard;
