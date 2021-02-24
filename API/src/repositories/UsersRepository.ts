import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
class UsersRepostory extends Repository<User> {}

export { UsersRepostory };