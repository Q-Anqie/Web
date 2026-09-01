// 登录逻辑
import instance from '@/api/request'

async function login(username: string, password: string) {
  const response = await instance.post('/login/admin',{
    username: username,
    password: password
  }).catch(error=>{
    return error;
  });
  return response;
}

export default login;
