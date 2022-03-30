function login() {
  let name = document.getElementById('name').value
  let password = document.getElementById('password').value
  let obj = JSON.parse(localStorage.getItem("user"))
  console.log(obj)
  let newobj = {
    name: name,
    password: password,
    status: 1,
    like: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    shop: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  if (name === '') {
    return alert('请输入账号')
  }
  if (password === '') {
    return alert('请输入密码')
  }
  if (obj) {
    if (name !== obj.name) {
      return alert('账号不正确')
    }
    if (password !== obj.password) {
      return alert('密码不正确')
    }
    else {
      alert('登录成功')
      localStorage.setItem("user", JSON.stringify(newobj));
      window.location.href = './pages/home/home.html'
    }
  }
  else {
    return alert('账号或密码不正确')
  }

}
const Storage = {}

Storage.get = function (name) {
  return JSON.parse(localStorage.getItem(name))
}

Storage.set = function (name, val) {
  localStorage.setItem(name, JSON.stringify(val))
}

Storage.add = function (name, addVal) {
  let oldVal = Storage.get(name)
  let newVal = Object.assign(addVal, oldVal)
  Storage.set(name, newVal)
}

function isLogin() {
  var user = Storage.get("user")
  if (user.status) {
    window.location.href = './pages/home/home.html'
    console.log("您已登录");
  }else{
    console.log("您未登录");
  }
}
isLogin()