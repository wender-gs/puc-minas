type User = {
  name: string;
  email: string;
  password: string;
};

export class UserController {
  async addUser(data: User) {
    try {
      await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getUserById(id: string) {
    await fetch(`/api/user?id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }
}

const user = new UserController();

export default user;
