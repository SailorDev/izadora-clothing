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
