import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import axios from "axios";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            etag: "",
            items: [],
            kind: ""
        };
    }
    render(props) {
        return (
            <div className="section" id="blog">
                <div className="container">
                    <div className="blog-wrapper">
                        <Fade >
                            <h3>Blogs</h3>
                        </Fade>
                        <div className="cards-wrapper">

                                {/* eslint-disable-next-line array-callback-return */}
                                { this.state.items.map(blog => (
                                    <Fade key={ "fade"+blog.id}>
                                    <Card
                                        key={ blog.id}
                                        heading={blog.title}
                                        paragraph={blog.content}
                                        projectLink={blog.url}
                                    />
                                    </Fade>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
    componentDidMount() {

// AIzaSyDMUmHFTiH2inoPDgxYYi2FQdERtdkQo3E
//        https://asishtom.blogspot.com/
//        https://www.googleapis.com/blogger/v3/blogs/byurl?url=https://asishtom.blogspot.com/
        return axios.get('http://localhost:8080/posts')
       .then((response) => response.data)
       .then((responseJson) => {
           this.setState({
               etag: responseJson["etag"],
               items: responseJson["items"],
               kind: responseJson["kind"],
           })
       })
       .catch((error) => {
         console.error(error);

       });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    // Do something if any updates
        console.log("updating", prevState, this.state)
    }
}

export default Blog
