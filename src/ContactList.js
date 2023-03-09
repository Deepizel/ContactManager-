import React from "react";

const ContactList = (props) =>{
    console.log(props);

    const renderContactList = props.contacts.map((contacts) =>{
        return (
          <div className="item mx-3 mt-3 d-flex justify-content-between border">
            <div className="content">
              <ul className="list-inline d-flex">
                <img
                  src="./user.png"
                  className="mt-4 mx-3"
                  style={{ height: "30px" }}
                />
                <div>
                  <li className="list-inline-item mt-3" style={{fontWeight:"bolder"}}>{contacts.name}</li>
                  <li className="">{contacts.email}</li>{" "}
                </div>
              </ul>
            </div>
            <img
              src="./trash-bin.png"
              className="mt-4 mx-5"
              style={{ height: "30px" }}
            />
          </div>
        ); 
    })

    return <div>
        {renderContactList}
        </div>;
}

export default ContactList;