import { Model } from "sequelize";
import Sequelize from "sequelize";




export class Post extends Model {
    public id!: number;
    public title!: string;
    public content!: string;
    public user_id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static initModel(sequelize:Sequelize.Sequelize):typeof Post{
        Post.init({
            id:{
                type:Sequelize.DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            title:{
                type:Sequelize.DataTypes.STRING,
                allowNull:false
            },
            content:{
                type:Sequelize.DataTypes.TEXT,
                allowNull:false
            },
            user_id:{
                type:Sequelize.DataTypes.INTEGER,
                allowNull:false
            }
        },{
            sequelize,
            tableName:'posts',
            timestamps:true
        })
        return Post
    }
}