import { Request } from 'express';
import User2 from '../users/user.entity';
 
interface RequestWithUser extends Request {
  user: User2;
}
 
export default RequestWithUser;