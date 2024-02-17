import React from "react";
import Form from "react-bootstrap/Form";

import { useTasks } from "../../TaskProvider";

const FilterDD = () => {
  const { filterChange, filter } = useTasks();

  return (
    <div >
      <Form.Select
        value={filter}
        onChange={(e) => filterChange(e.target.value)}
        size="sm"
      >
        <option value={"All"}>All</option>
        <option value={"Completed"}>Completed</option>
        <option value={"Incomplete"}>Incomplete</option>
      </Form.Select>
    </div>
  );
};

export default FilterDD;
