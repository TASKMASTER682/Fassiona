const express=require("express");
const router=express.Router();
const passport=require('passport')

//@route Get api/auth
//test route
//access public
router.get('/auth/google',(req,res)=>{
    passport.authenticate('google',{scope:['profile']})
});
router.get('/auth/google/dashboard',passport.authenticate('google',{failureRedirect:'/login'}),
            (req,res)=>res.redirect('/dashboard')
);

//second strategy
router.get('/auth/facebook',(req,res)=>{
    passport.authenticate('facebook',{scope:['profile']})
});
router.get('/auth/facebook/dashboard',passport.authenticate('facebook',{failureRedirect:'/login'}),
            (req,res)=>res.redirect('/dashboard')
);
//third strategy
router.get('/auth/linkedin',(req,res)=>{
    passport.authenticate('linkedin',{scope:['profile']})
});
router.get('/auth/linkedin/dashboard',passport.authenticate('facebook',{failureRedirect:'/login'}),
            (req,res)=>res.redirect('/dashboard')
);

//logout route
router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/')
})

module.exports=router;