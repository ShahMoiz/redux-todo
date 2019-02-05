import React, { Component } from 'react'

class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    onchange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    addPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(data => console.log(data))
    }
    render() {

        return (
            <div>
                <form onSubmit={this.addPost}>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" onChange={this.onchange} value={this.state.title} />
                    </div>
                    <div>
                        <label>Body:</label><br />
                        <textarea name="body" onChange={this.onchange} value={this.state.body} />
                    </div>
                    <button type="submit">Add Post</button>
                </form>
            </div>
        )
    }
}

export default AddPost;