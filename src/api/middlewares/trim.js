
const trim = (req, res, next) => {

    try {
      const exceptions = ['password']; 

      Object.keys(req.body).forEach(key => {
          if(!exceptions.includes(key) && typeof req.body[key] === "string") {
            req.body[key] = req.body[key].trim();
          } 
      })
  
      return next(); 
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  module.exports = trim
  
  