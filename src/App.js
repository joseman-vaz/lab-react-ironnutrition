import { useState } from 'react';
import './App.css';
import { Row, Col, Button } from 'antd';
import foods from './foods.json';
import { FoodBox } from './components/FoodBox';
import { SearchBar } from './components/SearchBar';
import { AddFoodForm } from './components/AddFoodForm';

function App() {
  const [filteredFoodsData, setFilteredFoodsData] = useState(foods);
  const [allFoodsData, setAllFoodsData] = useState(foods);
  const [foodsData, setFoodsData] = useState(() => [...foods]);
  const [show, setShow] = useState(true);
  const addFood = (newFood) => {
    const updatedFoods = [...foodsData, newFood];
    console.log(newFood);
    setFilteredFoodsData(updatedFoods);
  };

  const searchFood = (query) => {
    const updatedFoodList = allFoodsData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(updatedFoodList);
    setFilteredFoodsData(updatedFoodList);
  };
  const deleteFood = (foodName) => {
    const deletedFoods = [...filteredFoodsData];
    const updatedFoodList = deletedFoods.filter(
      (food) => food.name !== foodName
    );
    console.log(updatedFoodList);
    setFilteredFoodsData(updatedFoodList);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <Row justify="center">
        <Col span={12}>
          <SearchBar searchFood={searchFood} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <Button onClick={() => setShow(!show)}>
            {show ? 'Hide form' : 'Add new Food'}{' '}
          </Button>
          {show && <AddFoodForm addFood={addFood} />}
        </Col>
      </Row>
      <FoodBox foods={filteredFoodsData} deleteFood={deleteFood} />
    </div>
  );
}

export default App;
