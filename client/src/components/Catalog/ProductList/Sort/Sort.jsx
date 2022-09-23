import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Form from "../../../Forms/Form";
const sortDropList = [
  {
    inputName: "sort",
    formName: ["Low price", "High price"],
    formType: "droplist",
    label: "Sort",
  },
];

const Sort = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const { handleSubmit, control } = useForm({
    defaultValues: { sort: "" },
  });

  const setLink = (queryParam) => {
    const indexStartSort = location.search.indexOf("sort");
    const index = location.search.indexOf("&perPage");
    const str = location.search.slice(0, indexStartSort - 1);
    return (
      str.slice(0, index) + `&sort=${queryParam}` + "&perPage=10&startPage=1"
    );
  };

  const setValidation = (e) => {
    const value = e.target.value;
    value === "Low price" && navigate(setLink("+currentPrice"));
    value === "High price" && navigate(setLink("-currentPrice"));
  };

  return (
    <Form
      control={control}
      handleSubmit={handleSubmit}
      handleChange={setValidation}
      formArr={sortDropList}
      errors={{}}
    />
  );
};

export default Sort;
