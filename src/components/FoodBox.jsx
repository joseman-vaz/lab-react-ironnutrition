import { Card, Button, List, Row, Col } from 'antd';
// import foods from '../foods.json';
// import { useState } from 'react';

// Iteration 2
export function FoodBox({ foods, deleteFood }) {
  // const [foodsData, setFoodsData] = useState(() => [...foods]);
  const handleDelete = (foodName) => {
    deleteFood(foodName);
  };
  return (
    <div className="food_container">
      <Row justify="center">
        <Col span={24}>
          {foods.length === 0 ? (
            <h1>Looks like there are no more items to delete</h1>
          ) : (
            <List
              grid={{
                gutter: 16,
                column: 3,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              dataSource={foods}
              renderItem={(food) => (
                <List.Item justify="center">
                  <Card
                    key={food.id}
                    title={food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                  >
                    <img src={food.image} height={60} alt={food.name} />
                    <p>Calories: {food.calories}</p>
                    <p>Servings: {food.servings}</p>
                    <p>
                      <b>
                        Total Calories: {food.calories * food.servings} kcal
                      </b>
                    </p>
                    <Button
                      type="primary"
                      onClick={() => handleDelete(food.name)}
                    >
                      Delete
                    </Button>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}
