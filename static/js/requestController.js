// 发送get请求
const ajaxGet = (url, params) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText)
            }
            if (xhr.readyState == 4 && xhr.status != 200) {
                reject(xhr.responseText)
            }
        }
        xhr.open('GET', url + '?' + params, true)
        xhr.send(null)
    })
}

// 格式化请求参数
const formatter = (obj) => {
    let str = []
    for (let key in obj) {
        str.push(key + '=' + obj[key])
    }
    return str.join('&')
}

// 清空列表
const cleaner = (...inputs) => {
    inputs.forEach(e => {
        if (e.__proto__ == HTMLSelectElement.prototype)
            e.value = 0
        else
            e.value = ''
    })
}

export { ajaxGet, formatter, cleaner }