import { useSelector } from "react-redux";
import Entry from "../../components/Entry/Entry";
import Cabinet from "../../components/Cabinet/Cabinet";

const MyAccount = () => {
  const { isLogin } = useSelector((state) => state.userAccount);
  return <>{isLogin ? <Entry /> : <Cabinet />}</>;
};
export default MyAccount;
