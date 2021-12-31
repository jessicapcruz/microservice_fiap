import { Profile } from "./profile";

export interface User {
  seq: Number;
  id: string;
  name: string;
  username: string;
  email: string;
  gender: string;
  profiles: Profile[];
  active: boolean;
}
