import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    post: string;

    @IsNumber()
    @IsNotEmpty()
    score: number;
}
