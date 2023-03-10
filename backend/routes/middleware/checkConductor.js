const con = require('../database');

const checkConductor = (req,res,next) =>{
    const check = `SELECT * FROM conductor WHERE c_id='${req.user.id}'`;

    try {
        con.query(check,(err,qres)=>{
            if(err){
                console.log(err.message);
            } else if(qres.length > 0){
                next();
            } else {
                res.json({ success:false, msg:"Authentication did not happen"});
            }
        })
    } catch(error) {
        res.json({ success:false, msg:"Authentication did not happen"});
    }
}

module.exports = checkConductor;