import Test from "../models/Test.js";



const hello = (req, res) => {
    console.log('Hello bitches');
    Test.find((e, items) => {
        if (e) console.log(e.message)
        else res.json(items)
    })
    
};

export default hello;