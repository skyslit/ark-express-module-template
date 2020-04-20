import { ArkExpressPackage } from '@skyslit/ark-express'
import { AuthExpressModule } from './modules/Auth/module';

const server = new ArkExpressPackage();

server
.useModule('Auth', new AuthExpressModule())
.useDatabase({
    name: 'default',
    connectionString: 'mongodb://localhost:27017/ark_test'
});


server.start();