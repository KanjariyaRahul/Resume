const ContactInfo = ({ address, phone, email }) => {
    return (
      <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between', width: '75%', margin: '100px', paddingTop: '10px' }}>
        <p>{address}</p>
        <p>|</p>
        <p>{phone}</p>
        <p>|</p>
        <p>{email}</p>
      </div>
    );
};
export default ContactInfo;