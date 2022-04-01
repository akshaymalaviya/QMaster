import React, { useState } from "react";

function Textarea() {
  const [Name, setName] = useState("");

  return (
    <div className="Textarea">
      {Name}
      <form id="form-name" method="POST">
        <textarea
          name="Name"
          id="name"
          data-tid="avy"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default Textarea;