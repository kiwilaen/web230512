import { ajaxGet, cleaner, formatter } from "./requestController.js"

const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')
const studentSignIn = document.getElementById('studentSignIn')



studentSignIn.addEventListener('click', () => {
    const accountNum = document.getElementById('accountNum')
    const password = document.getElementById('password')
    window.location.href = '../static/news.html'
    ajaxGet("/test/student/studentLogin", formatter({
        accountNum: accountNum.value,
            password: password.value
        }))
        .then((res) => {
            console.log(res)
            res = JSON.parse(res)
            if (res.success) {
                window.location.href = '../news.html'
            } else {
                alert('账号或密码错误!请重新输入')
                cleaner(accountNum, password)
            }
        })
        .catch((err) => {
            console.log(err)
        })
})


var signInSuccess = function() {
    window.location.href = '../news.html'
}

var signInFail = function(n, p) {
    alert('账号或密码错误!请重新输入')
    n.value = ''
    p.value = ''
}