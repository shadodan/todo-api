import { Task } from '../../core/entities/task.entity';
import { AppError } from '../../../../core/domain/errors/app.error';
import { UserToken } from '../../../../auth/core/interfaces/user-token';

export function removeTaskValidator(
  { id: loggedUserId }: UserToken,
  { ownerId }: Task
): void {
  // Authentication validation
  if (loggedUserId !== ownerId) {
    throw new AppError("You cannot remove another user's task", 403);
  }
}
