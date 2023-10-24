import React, { useState, useEffect } from "react";

const AutomobileForm = () => {
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  };
  const handleYearChange = (event) => {
    const value = event.target.value;
    setYear(value);
  };
  const handleVINChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };
  const handleModelChange = (event) => {
    const value = event.target.value;
    setModel(value);
  };

  const fetchModels = async () => {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.color = color;
    data.year = year;
    data.vin = vin;
    data.model_id = model;

    const url = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newAuto = await response.json();
    }
    setColor("");
    setYear("");
    setVin("");
    setModel("");
  };

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add an automobile to inventory</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleColorChange}
                  placeholder="Color"
                  required
                  type="text"
                  id="color"
                  name="color"
                  className="form-control"
                  value={color}
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleYearChange}
                  placeholder="Year"
                  required
                  type="text"
                  id="year"
                  name="year"
                  className="form-control"
                  value={year}
                />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleVINChange}
                  placeholder="VIN"
                  required
                  type="text"
                  id="vin"
                  name="vin"
                  className="form-control"
                  value={vin}
                />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleModelChange}
                  required
                  id="model"
                  name="model"
                  className="form-select"
                  value={model}
                >
                  <option value="manufacturer">Choose a model</option>
                  {models.map((model) => {
                    return (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomobileForm;
