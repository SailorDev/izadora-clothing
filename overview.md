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
