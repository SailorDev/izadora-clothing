<Link to='/topics'>Topics</Link>
    <button onClick={() => props.history.push('/topics')}>Our Topics!
</button>

<Link to={`${props.match.url}/13`}>To Topic 13</Link>

<h1>Topic Detail page: {props.match.params.topicId}</h1>

<div>
    <Route exact path='/' component={Home} />
    <Route exact path='/topics' component={TopicsList} />
    <Route exact path='/topics/:topicId' component={TopicDetail} />
</div>
 //

[1] withRouter: higher order component => function which take a component as arg and turns it to modified component and returned it

=== export default withRouter(MenuItem);
{
apiKey: "AIzaSyAla4BJUBf-HEvEyrEyz4BoateoruSO3GA",
authDomain: "izadora-db.firebaseapp.com",
projectId: "izadora-db",
storageBucket: "izadora-db.appspot.com",
messagingSenderId: "644027811404",
appId: "1:644027811404:web:94bed4f0636cee7ae116e9",
measurementId: "G-9Q3Z9VH858"
};

/////////////////////////////////////////////////////////////

[2] Redux

> yarn add redux redux-logger react-redux
> import { Provider } from 'react-redux'; (in index.js)

        ReactDOM.render(
            <Provider>
                <BrowserRouter>
                <App />
                </BrowserRouter>
            </Provider>,
        document.getElementById('root'),
        );

-> create redux folder > root.reducer.js & user > user.reducer.js

-> this is action {
type: ,
payload:
}

    > in user.reducer.js

        const userReducer = (state = INITIAL_STATE, action) => {
            switch (action.type) {
                case 'SET_CURRENT_USER':
                return {
                    ...state,
                    currentUser: action.payload,
                };

                default:
                return state;
            }

        };


    > in root.reducer.js

        import { combineReducers } from 'redux';

        import userReducer from './user/user.reducer';

        export default combineReducers({
            user: userReducer,
        });

> > > > Create store.js

        import { createStore, applyMiddleware } from 'redux';
        import logger from 'redux-logger';

        import rootReducer from './root-reducer';

        const middlewares = [logger];

        const store = createStore(rootReducer, applyMiddleware(...middlewares));

        export default store;

> > > > Create user.actions.js

        // just functions return obj. => each obj is in correct format that action is expected to be

        export const setCurrentUser = (user) => ({
            type: 'SET_CURRENT_USER',
            payload: user,
        });

> > > > fINALLY IN index.js

        import { Provider } from 'react-redux';
        import store from './redux/store';

        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                <App />
                </BrowserRouter>
            </Provider>,
            document.getElementById('root'),
        );
