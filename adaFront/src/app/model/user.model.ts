import { Profile } from "./profile";

export class User {

    constructor(
        public id: string,
        public email: string,
        public password: string,
        public perfils: Array<Profile>
    ) {
    }

    public static getInstance(): User {
        return new User(null, null, null, new Array<Profile>());
    }

}

