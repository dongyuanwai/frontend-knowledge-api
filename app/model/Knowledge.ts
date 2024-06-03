import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Knowledge extends Model<Knowledge> {
    @Column
    _id: string
    @Column
    category: string
    @Column
    renderType: number
    @Column
    title: string
    @Column
    desc: string
    @Column
    options: string
    @Column
    explanation: string
    @Column
    level: number
    @Column
    tagId: number
}