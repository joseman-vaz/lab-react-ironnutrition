import { Divider, Input } from 'antd';
// Iteration 5
export function SearchBar(props) {
  const handleSearchInput = (e) => {
    console.log(e.target.value);
    props.searchFood(e.target.value);
  };
  return (
    <>
      <label>Search</label>
      <Input type="text" onChange={handleSearchInput} />
    </>
  );
}
