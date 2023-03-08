import React from "react";

const ContactList = (props) =>{
    console.log(props);

    const renderContactList = props.contacts.map((contacts) =>{
        return (
          <div className="item">
            <div className="content">
              <table>
                <th>{contacts.name}</th> <br />
                <ul>
                  <li>{contacts.email}</li>
                </ul>
              </table>
            </div>
          </div>
        ); 
    })

    return <div>
        {renderContactList}
        </div>;
}

export default ContactList;