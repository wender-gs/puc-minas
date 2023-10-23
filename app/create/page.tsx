"use client";

import user from "@/controller/userController";
import { useState } from "react";

export default function CreatePage() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [name, setName] = useState<string>("");
  const { addUser } = user;

  function handleCreate() {
    addUser({ email, name, password: pass });
  }

  return (
    <div className="flex justify-center mt-4">
      <form method="POST" className="flex flex-col w-80 border p-3">
        <input
          className="mb-3 border rounded-md"
          type="email"
          placeholder="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-3 border rounded-md"
          type="text"
          name="username"
          id="username"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="mb-3 border rounded-md"
          type="password"
          name="pass"
          id="pass"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          className="bg-green-500"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleCreate();
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
