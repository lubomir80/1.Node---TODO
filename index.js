const fs = require("fs");
const path = require("path");
const argv = require('yargs').argv;

const contactsPath = path.resolve("./db/Contact.json");



function listContacts() {
   fs.readFile(contactsPath, "utf8", function (err, data) {
      const newData = JSON.parse(data);
      console.log(newData);
   })
}

function getContactById(contactId) {
   fs.readFile(contactsPath, "utf8", function (err, data) {
      let newData = JSON.parse(data).find(contact => contact.id === contactId)
      console.log(newData);
   })
}


function removeContact(contactId) {
   fs.readFile(contactsPath, "utf8", function (err, data) {
      const newData = JSON.parse(data).filter(contact => contact.id !== contactId)
      const sendData = JSON.stringify(newData)
      fs.writeFileSync("./db/NewContact.json", sendData)
   })
}



function addContact(name, email, phone) {
   fs.readFile(contactsPath, "utf8", function (err, data) {
      const newId = Date.now()
      const dataTransform = JSON.parse(data)
      const addNewContact = [...dataTransform, { id: newId, name, email, phone }]
      const sendData = JSON.stringify(addNewContact)
      fs.writeFileSync("./db/NewContact.json", sendData)
   })
}




function invokeAction({ action, id, name, email, phone }) {
   switch (action) {
      case 'list':
         listContacts()
         break;

      case 'get':
         getContactById(id)
         break;

      case 'add':
         const newId = Date.now()
         addContact({ id: newId, name, email, phone })
         break;

      case 'remove':
         removeContact(id)
         break;

      default:
         console.warn('\x1B[31m Unknown action type!');
   }
}

invokeAction(argv);