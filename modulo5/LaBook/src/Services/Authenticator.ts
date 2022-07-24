import * as jwt from "jsonwebtoken";
import { authenticationData, authenticationEmail } from "../Types/authData";

export class Authenticator {
   generateToken = (
      payload: authenticationData
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: "24min"
         }
      )
   }

   getTokenData = (
      token: string
   ): authenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationData
   }
}

export class AuthenticatorEmail {
   generateTokenLogin = (
      payload: authenticationEmail
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: "5min"
         }
      )
   }

   getTokenData = (
      token: string
   ): authenticationEmail => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationEmail
   }
}