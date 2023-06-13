import { Controller, Post, Body} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


//controllers handle request
@Controller('auth')
export class AuthController{
    //dependency injection
    //private = declaration shorthand
    constructor(private authService: AuthService){}

    //route ex: /auth/signup
    @Post('signup')
    signup( @Body() dto: AuthDto){
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(){
        return this.authService.signin();
    }
}