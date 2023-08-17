import { ORM } from '@shared/types/ORM';
import { orms } from './orms';

const useORM = orms[ORM.TYPEORM];

export default useORM;
