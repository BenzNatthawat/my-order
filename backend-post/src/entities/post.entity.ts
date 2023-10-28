import { AllowNull, AutoIncrement, Column, DataType, PrimaryKey, Model, Table, ForeignKey } from "sequelize-typescript";
import { Poster } from "./poster.entity";

@Table({
  modelName: 'posts',
  freezeTableName: true,
  underscored: true,
  paranoid: true,
})

export class Post extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  id: number;

  //RELATION
  @ForeignKey(() => Poster)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  posterId: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  post: string;

  @AllowNull(false)
  @Column({ type: DataType.NUMBER })
  score: number;

  @AllowNull(false)
  @Column({ type: DataType.DATE })
  createdAt: Date;

  @AllowNull(false)
  @Column({ type: DataType.DATE })
  updatedAt: Date;

  @AllowNull(true)
  @Column({ type: DataType.DATE })
  deletedAt: Date;
}
