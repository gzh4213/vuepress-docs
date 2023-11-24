import linux from "./modules/linux"
import database from "./modules/database"
import nginx from './modules/nginx'

export default [
  ...linux,
  ...database,
  ...nginx
]