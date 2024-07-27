import React, { useState } from "react";
import { addResponse, Response } from "../services/api";

const ResponseForm: React.FC = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(false);
  const [comments, setComments] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: Response = {
      id: 0,
      name,
      attending,
      comments,
      updatedAt: new Date(),
    };
    await addResponse(response);
    setName("");
    setAttending(false);
    setComments("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Attending</label>
        <input
          type="checkbox"
          checked={attending}
          onChange={(e) => setAttending(e.target.checked)}
        />
      </div>
      <div>
        <label>Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResponseForm;
