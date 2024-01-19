const { Schema, model } = require("mongoose");
const contactSchema = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        phone_no: { type: String, required: true },
        message: { type: String, required: true },
    }
);
// create a new collections(Model) 
const Contact = new model("Contact", contactSchema);

module.exports = Contact;  