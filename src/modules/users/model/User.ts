/* eslint-disable prettier/prettier */
import { v4 as uuidV4 } from "uuid";

class User {
  constructor() {
    if (!this.id)
      this.id = uuidV4();

    if (!this.admin)
      this.admin = false;

    if (!this.created_at)
      this.created_at = new Date();

    if (!this.updated_at)
      this.updated_at = this.created_at;
  }

  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { User };
