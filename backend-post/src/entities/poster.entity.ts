import { AllowNull, AutoIncrement, Column, DataType, PrimaryKey, Model, Table } from "sequelize-typescript";

@Table({
  modelName: 'posters',
  freezeTableName: true,
  underscored: true,
  paranoid: true,
})

export class Poster extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  id: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  title: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  image: string;

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
