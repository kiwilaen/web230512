import { ajaxGet, cleaner, formatter } from "./requestController.js"

const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')
const studentSignIn = document.getElementById('studentSignIn')

//在页面加载的时候调用getCaptchaBase64接口
function getCaptchaBase64() {
    ajaxGet("/getCaptchaBase64", formatter()
        .then((res) => {
            if (res.url) {
                document.getElementById("imgCheck").setAttribute("src", res.url)
            }
        })
        .catch((err) => {
            console.log(err);
        })
    )
}


window.onload = function () {
    getCaptchaBase64();
}



studentSignIn.addEventListener('click', () => {
    const accountNum = document.getElementById('accountNum')
    const password = document.getElementById('password')
    window.location.href = './main/news.html'
    ajaxGet("/user/login", formatter({
        accountNum: accountNum.value,
        password: password.value,
    })
        .then((res) => {
            console.log(res)
            res = JSON.parse(res)
            if (res.success) {
            } else {
                alert('账号或密码错误!请重新输入')
                cleaner(accountNum, password)
            }
        })
        .catch((err) => {
            console.log(err)
        }))
    ajaxGet("/checkCaptcha", formatter({
        code: code.value
    }))
        .then((res) => {
            console.log(res)
            res = JSON.parse(res)
            if (res.success) {
                window.location.href = './main/news.html'
            } else {
                alert('验证码错误!请重新输入')
                cleaner(code)
            }
        })
        .catch((err) => {
            console.log(err)
        })


})


var signInSuccess = function () {
    window.location.href = './main/news.html'
}

var signInFail = function (n, p) {
    alert('账号或密码错误!请重新输入')
    n.value = ''
    p.value = ''
    cleaner(n, p);
}