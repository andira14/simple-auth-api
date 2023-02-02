require('dotenv').config();
const { Sequelize } = require("sequelize");

// SINGLETON
class DbUtil{
    static instance = null

    static getInstance(){
        if(this.instance === null){
            this.connect();
        }
        return this.instance;
    }

    static connect(){
        if(this.instance === null){
            this.instance = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
                host: process.env.DB_HOST,
                dialect: 'mysql',
                port: process.env.DB_PORT
            })
        }
        console.log('DB Connected');
    }

    static disconnect(){
        if(this.instance !== null){
            this.instance.disconnect();
            this.instance = null;
        }
        console.log('DB Disconnected');
    }
}

module.exports = DbUtil;