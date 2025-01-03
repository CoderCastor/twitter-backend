import JWT from 'jsonwebtoken'
import { prismaClient } from '../clients/db'
import { User } from '@prisma/client';
import { JWTUser } from '../app/interfaces';

const JWT_SECRET = "$uper@1234."

class JWTService {
    public static generateTokenForUser(user:User){
          
        const payload: JWTUser = {
            id: user?.id,
            email: user?.email
        };
        const token = JWT.sign(payload,JWT_SECRET);
        return token;
    }

    public static decodeToken(token:string){
        return JWT.verify(token,JWT_SECRET) as JWTUser;
    }
}

export default JWTService; 