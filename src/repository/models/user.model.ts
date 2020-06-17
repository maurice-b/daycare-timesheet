import { UserModelInterface } from './../interfaces/user.model.interface.ts';
import { Model, DataTypes } from '../../deps.ts';

export class UserModel extends Model implements UserModelInterface {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      length: 50,
    },
  };

  public firstName: string = "";
  public lastName: string = "";
  public email: string = "";
}
