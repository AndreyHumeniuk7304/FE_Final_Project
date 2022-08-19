import { useSelector } from "react-redux";
import Entry from "../../components/Entry/Entry";

const MyAccount = () => {
  const { isLogin } = useSelector((state) => state.userAccount);
  return <>{!isLogin && <Entry />}</>;
};
export default MyAccount;
