// router user 
import express from 'express';
import userAcount from '../../module/Acount/app.count.js';


const router = express.Router();
// acount 
router.get('/acount', userAcount.acount);

// login 
router.get('/login', userAcount.login);
router.post('/login', userAcount.pLogin);  // hoàn thành 


// login với gg 
router.get('/loginGG', userAcount.loginGG);
router.post('/loginGG', userAcount.pLoginGG);


// login với fb
router.get('/loginFB', userAcount.loginFB);
router.post('/loginFB', userAcount.pLoginFB); 


// sign in 
router.get('/sign', userAcount.sign);
router.post('/sign', userAcount.signIn); // hoàn thành


// sign in với gg
router.get('/signGG', userAcount.signGG);
router.post('/signGG', userAcount.signInGG);


// sign in với fb
router.get('/signFB', userAcount.signFB);
router.post('/signFB', userAcount.signInFB);


// forget password
router.get('/forget', userAcount.forget);
router.post('/forget', userAcount.pForget)


// set avatar
router.get('/edetAvatar', userAcount.editAvatar);
router.post('/editAvatar', userAcount.avatarUpLoad);


// set thông tin cá nhân 
router.get('/userInformation', userAcount.userInformation);
router.post('/userInformation', userAcount.pUserInformation)

export default router;


// sử lý cookie and session