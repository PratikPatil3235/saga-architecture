import { IsBoolean, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateTodoDto {
  @IsUUID()
  @IsString()
  id: string;

  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  status: boolean;
}
