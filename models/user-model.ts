import {ToDoListModel} from "./to-do-list-model";
import moment from "moment";

interface UserModelProps {
    name: string;
    firstname: string;
    email: string;
    password: string;
    birthdate: Date;
    toDoList: ToDoListModel;
}

export class UserModel implements UserModelProps {
    birthdate: Date;
    email: string;
    firstname: string;
    name: string;
    password: string;
    toDoList: ToDoListModel;

    constructor(properties: UserModelProps) {
        this.birthdate = properties.birthdate;
        this.email = properties.email;
        this.firstname = properties.firstname;
        this.name = properties.name;
        this.password = properties.password;
        this.toDoList = properties.toDoList;
    }

    isValid(): boolean {
        if (!this.email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i))
            return false;

        if(this.name == null)
            return false;

        if(this.firstname == null)
            return false;

        if(this.password.length < 8 || this.password.length > 40)
            return false;

        console.log(moment().diff(this.birthdate, 'years'))
        return !(this.birthdate == null || moment().diff(this.birthdate, 'years') < 13);
    }
}