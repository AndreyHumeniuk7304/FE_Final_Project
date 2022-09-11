import Cabinet from "../../components/Cabinet/Cabinet";

/* code review: good, but could be better
    не має особливого сенсу в компоненті, який просто рендерить інший компонент
 */
const MyAccount = () => {
  return (
    <>
      <Cabinet />
    </>
  );
};
export default MyAccount;
