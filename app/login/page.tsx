"use client";

export default function LoginPage() {
  return (
    <div className="flex justify-center mt-4">
      <form method="POST" className="flex flex-col w-80 border p-3">
        <input
          className="mb-3 border rounded-md"
          type="email"
          placeholder="email"
          name="email"
          id="email"
        />
        <input
          className="mb-3 border rounded-md"
          type="password"
          name="pass"
          id="pass"
          placeholder="password"
        />

        <button className="bg-green-500" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
