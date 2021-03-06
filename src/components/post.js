import React, {Component} from 'react'

class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }
    render(){

        return (
            <div>
                <h1>Hello Post</h1>
                {
                    this.state.posts.map(post => 
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                        )
                }
            </div>
        )
    }
}

export default Posts