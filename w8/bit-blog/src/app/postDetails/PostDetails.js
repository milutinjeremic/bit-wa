import React,{Component} from 'react';
import SinglePost from './SinglePost'
import { postService } from '../PostService';

class PostDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: undefined
        }
    }

    componentDidMount() {
        postService.fetchPost(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    post: response

                })
            }
    )}
    render() {
        return (
            <div>
                <SinglePost post={this.state.post}/>
                
            </div>
        )
    }


}


        export default PostDetails;


