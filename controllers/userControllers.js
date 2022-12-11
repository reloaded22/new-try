import User from "../models/User.js";



const hello = (req, res) => {
    console.log('Hello bitches');
    User.find((e, items) => {
        if (e) console.log(e.message)
        else res.json(items)
    })
    
};

export default hello;