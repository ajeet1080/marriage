import React, { useEffect, useState } from "react";
import { getResponses, updateResponse, Response } from "../services/api";

const ResponseList: React.FC = () => {
  const [responses, setResponses] = useState<Response[]>([]);

  useEffect(() => {
    const fetchResponses = async () => {
      const res = await getResponses();
      setResponses(res);
    };
    fetchResponses();
  }, []);

  const handleUpdate = async (id: number) => {
    const response = responses.find((r) => r.id === id);
    if (response) {
      const now = new Date();
      const updatedAt = new Date(response.updatedAt);
      const diff = (now.getTime() - updatedAt.getTime()) / (1000 * 3600 * 24);
      if (diff <= 7) {
        // Allow editing if within 7 days
        response.comments += " (edited)";
        await updateResponse(id, response);
        setResponses([...responses]);
      } else {
        alert("You can no longer edit this response.");
      }
    }
  };

  return (
    <div>
      <h2>Responses</h2>
      <ul>
        {responses.map((response) => (
          <li key={response.id}>
            {response.name} -{" "}
            {response.attending ? "Attending" : "Not Attending"} -{" "}
            {response.comments}
            <button onClick={() => handleUpdate(response.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponseList;
