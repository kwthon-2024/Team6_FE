import React, { useState } from 'react';
import axios from 'axios';

const AddRoadmap = () => {
  const [areaName, setAreaName] = useState('');
  const [todos, setTodos] = useState([]);

  // Todo 추가
  const addTodo = () => {
    setTodos([
      ...todos,
      { item: '', lectures: [] }, // 새로운 Todo 추가
    ]);
  };

  // Lecture 추가
  const addLecture = (todoIndex) => {
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].lectures.push({ lec_name: '' }); // lec_theme 제거
    setTodos(updatedTodos);
  };

  // Todo 수정
  const handleTodoChange = (index, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index].item = value;
    setTodos(updatedTodos);
  };

  // Lecture 수정
  const handleLectureChange = (todoIndex, lectureIndex, value) => {
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].lectures[lectureIndex].lec_name = value; // lec_theme 제거
    setTodos(updatedTodos);
  };

  // Form 제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      area_name: areaName,
      todos,
    };

    try {
      const response = await axios.post(
        'http://112.152.14.116:1116/add-roadmap',
        data
      );
      alert('Roadmap added successfully!');
      console.log(response.data);
    } catch (error) {
      alert('An error occurred while adding the roadmap.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Roadmap</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Area Name:
          <input
            type="text"
            value={areaName}
            onChange={(e) => setAreaName(e.target.value)}
            required
            className="outline"
          />
        </label>
        <br />
        <br />

        <h3>Todos</h3>
        <div>
          {todos.map((todo, todoIndex) => (
            <div key={todoIndex} className="todo">
              <label>
                Item:
                <input
                  type="text"
                  value={todo.item}
                  onChange={(e) => handleTodoChange(todoIndex, e.target.value)}
                  required
                  className="outline"
                />
              </label>
              <br />

              <h4>Lectures</h4>
              <div>
                {todo.lectures.map((lecture, lectureIndex) => (
                  <div key={lectureIndex} className="lecture">
                    <label>
                      Lecture Name:
                      <input
                        type="text"
                        value={lecture.lec_name}
                        onChange={(e) =>
                          handleLectureChange(
                            todoIndex,
                            lectureIndex,
                            e.target.value
                          )
                        }
                        required
                        className="outline"
                      />
                    </label>
                    <br />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => addLecture(todoIndex)}
                className="outline"
              >
                Add Lecture
              </button>
              <br />
              <br />
            </div>
          ))}
        </div>
        <button type="button" onClick={addTodo} className="outline">
          Add Todo
        </button>
        <br />
        <br />
        <button type="submit" className="outline">
          Add Roadmap
        </button>
      </form>
    </div>
  );
};

export default AddRoadmap;
