import { asyncComponent } from 'react-async-component'

export default asyncComponent({
	resolve: () => import ('./Profile'),
	ErrorComponent: ({ error }) => <div>{error.message} from Profile</div>
})