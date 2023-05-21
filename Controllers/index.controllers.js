const User = require("./Models/User");
const Party = require("./Models/Party");
const salt = bcrypt.genSaltSync(10);
const secret = "asdfe45we45w345wegw345werjktjwertkj";

//pages
const controller = {}
controller.index = (req,res)=>{
    res.render('index')
}
controller.compra = (req,res)=>{
    res.render('compra')
}

//functions
controller.register = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    try {
      const userDoc = await User.create({
        username,
        password: bcrypt.hashSync(password, salt),
      });
      res.json(userDoc);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  };

controller.login = async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
};
  
module.exports = controller