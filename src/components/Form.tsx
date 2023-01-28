import { useState } from "react";
import { ChangeType } from "../types/element";

export function Form(): JSX.Element {
  const [ts, setTask] = useState({
    title: "",
    description: "",
  });
  const handleInputChange = ({ target: { name, value } }: ChangeType) => {
    setTask({ ...ts, [name]: value });
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
        />

        <label htmlFor="Description">Description</label>
        <textarea
          placeholder="Write Description"
          name="description"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          rows={3}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
