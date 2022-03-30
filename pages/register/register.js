function register() {
  let name = document.getElementById('name').value
  let password = document.getElementById('password').value
  let obj = {
    name: name,
    password: password,
    like: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    shop: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
  if (name === '') {
    return alert('请输入账号')
  }
  if (password === '') {
    return alert('请输入密码')
  }
  else {
    alert('注册成功')
    localStorage.setItem("user", JSON.stringify(obj));
    window.location.href = './../../index.html'
  }
}