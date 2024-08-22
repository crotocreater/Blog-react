import db from "../../utils/db.js";
import bcript, { compare, hash } from 'bcrypt';
// thông tin người dùng
// cơ chế jwt
// cơ chế cookie and sesion
const acount = (req, res)=>{
    res.send('Dỗ Việt Hoàng');
}
// thông tin login 

/// nhả về thông tin tranng login với dữ liệu đưa ra dưới dạng json  trả về cho frontend
const login = (req, res)=>{

}

// lấy về dữ liệu và đưa vào database tiền hành thao tác với database
const pLogin = async (req, res)=>{
    const postData = {
        email : req.body.email,
        password : req.body.password,
    }
    console.log(postData);
    // check tài khoản và mật khẩu 
    const checkUser = await db.query("select * from users where semail = $1", [postData.email]);
    if(checkUser.rows.length > 0){
        bcript.compare(postData.password, checkUser.rows[0].spassword, async (err, compare) => {
            if(err){
                console.log(err.message);
                res.status(500).json({status : -1, err : 'err'});
            }else{
                if(compare){
                    // trả về dữ liệu cho front end
                    res.status(200).json ({status : 1, message : 'sussces', data : {
                        username : checkUser.rows[0].sname,
                        email : checkUser.rows[0].semail,
                        role : checkUser.rows[0].roles,
                        avatar : checkUser.rows[0].avatar,
                    }});
                }else{
                    res.status(200).json ({status : 0, message : 'password uncorect'});
                }
            }
        });
    }else {

        // trả về dữ liệu cho frontend
        res.status(404).json ({status : 0, message : 'acount not exits'});
    }
}
// thông tin đăng kí
// đưa ra thông tin dạng json gửi về cho fontend
const sign = async (req, res)=>{
   
}
// thao tác với db 
const signIn = async (req, res)=>{
    const postData = {
        email : req.body.email,
        username : req.body.username,
        password : req.body.password,
        avatar : "default", 
    }


    // check email đã tồn tại chưa 
    const checkEmail = await db.query("select * from users where semail = $1", [postData.email]);
    if(! checkEmail.rows.length > 0){
        // hash password 
        bcript.hash(postData.password, process.env.SALTROUDE || 10, async (err, hash)=>{
            const checkUser = {
                email : req.body.email,
                username : req.body.username,
                role : "user",
                avatar : "default", 
            }
            if(err){
                console.log(err.message);
                res.status(500).json ({status : -1, err : err.message});
            }else{
                await db.query (
                    'insert into users (semail, spassword, sname, avatar) values ($1, $2, $3, $4)',
                    [postData.email, hash, postData.username, postData.avatar]
                );
                res.status(200).json ({status : 1, message : 'sussces', data : {
                    username : checkUser.username,
                    email : checkUser.email,
                    role : checkUser.role,
                    avatar : checkUser.avatar,
                }});
            }
        })
        
    }else {
        res.status(400).json({status : 0, message : 'email have exits'});
    }
}
const loginGG = (req, res)=>{

}

const pLoginGG = (req, res)=>{

}
// thông tin đăng kí
const signGG = (req, res)=>{

}

const signInGG = (req, res)=>{

}
const loginFB = (req, res)=>{

}

const pLoginFB = (req, res)=>{

}
// thông tin đăng kí
const signFB = (req, res)=>{

}

const signInFB = (req, res)=>{

}
// thông tin quên mật khẩu 
const forget = (req, res)=>{
    
}

const pForget = (req, res)=>{

}
// thông tin đặt lại avatar
const editAvatar = (req, res)=>{

}

const avatarUpLoad = (req, res)=>{

}
// thông tin chỉnh sửa trang cá nhân 
const userInformation = (req, res)=>{

}


const pUserInformation = (req, res)=>{

}

export default {
    acount,
    login,
    pLogin,
    loginGG,
    pLoginGG,
    loginFB,
    pLoginFB,
    sign,
    signIn,
    signGG,
    signInGG,
    signFB,
    signInFB,
    forget,
    pForget,
    editAvatar,
    avatarUpLoad,
    userInformation,
    pUserInformation
}