import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Knowledge extends Model<Knowledge> {
    @Column
    _id: string
    @Column
    category: string
    @Column
    renderType: string
    @Column
    title: string
    @Column
    desc: string
    @Column
    options: string
    @Column
    explanation: string
    @Column
    level: string
    @Column
    tagId: string
}


