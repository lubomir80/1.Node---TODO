# We receive and display the entire list of contacts in the form of a table (console.table)
node index.js --action="list"

# We get a contact by id and output the contact object or null to the console, if there is no contact with such an id.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

# We add a contact and display the object of the newly created contact in the console
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

# We remove the contact and output to the console the object of the deleted contact or null, if the contact with such an id does not exist.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
