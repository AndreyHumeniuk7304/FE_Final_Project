<<<<<<< HEAD
import { useSelector } from "react-redux";
import Entry from "../../components/Entry/Entry";
import Cabinet from "../../components/Cabinet/Cabinet";

const MyAccount = () => {
  const { isLogin } = useSelector((state) => state.userAccount);
  return <>{isLogin ? <Entry /> : <Cabinet />}</>;
=======
const MyAccount = () => {
  return <></>;
>>>>>>> e899095859879f4ce31c807ce7c97de776a2513d
};
export default MyAccount;
