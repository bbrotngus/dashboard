import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginChk, setLoginChk] = useState(false);

  // 뒤로가기
  const navigate = useNavigate();

  // 로그인
  const handleLogin = async(e) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    const response = await fetch(
   
    )



  }


  return(
    <div>
      <form className="">
        <lable>이메일</lable>
        <input type="text" value={email} onChange={(e) => setEmail.e.value}/>
        <label>비밀번호</label>
        <input type="password" value={password} onChange={(e) => setPassword.e.value}/>

        <button onClick={handleLogin}>로그인</button>
      </form>
    </div>
  )

}

export default Login;