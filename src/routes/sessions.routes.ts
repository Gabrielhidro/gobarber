import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request: any, response: any) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({ email, password });
    delete user.password;

    return response.json({ user, token });
  } catch (error: any) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionsRouter;
