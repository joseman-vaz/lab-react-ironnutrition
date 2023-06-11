import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

// Iteration 4
export function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState(null);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
    const newFood = { name, calories, image, servings };

    props.addFood(newFood);
    setName('');
    setCalories(0);
    setImage('');
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServingsInput} />

      <Button type="primary">Create</Button>
    </form>
  );
}
