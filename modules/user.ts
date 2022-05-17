import { User } from "@prisma/client";

export class ExtendedUser {

    user: User;

    constructor(user: User) {
        this.user = user;
    }

    hasPermission(perm: UserPerms) {
        return true;
    }

}


export type UserPerms = 'readStuff' | 'updateStuff' | 'readArticle';
