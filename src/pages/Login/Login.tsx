import { useDispatch } from "react-redux";
import { createUser } from "../../redux/state/user";
import { getMorty } from "../../services";

export function Login() {
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
    } catch (error) {}

    return (
      <div>
        <h2>Hola este es Login</h2>
        <button onClick={login}>LOGIN</button>
      </div>
    );
  };
}
//export default Login;
