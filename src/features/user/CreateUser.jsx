import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm mg-4 text-stome-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="mb-8 input w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        className="h-10 w-72"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
