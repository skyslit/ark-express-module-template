import { ArkExpressModule } from '@skyslit/ark-express';
import UserSchema from './schema/User.schema';

export class AuthExpressModule extends ArkExpressModule {
    constructor() {
        super();
        
        this.registerModel('user', UserSchema);

        this.router.get('/', (req, res) => {
            this.getModel('user').find({}).exec((err, result) => {
                res.json(result);
            })
        });

        this.router.post('/', (req, res) => {
            const user = new (this.getModel('user'))({
                firstName: 'Dameem'
            });

            user.save((err, product) => {
                res.json(product);
            })
        })
    }
}