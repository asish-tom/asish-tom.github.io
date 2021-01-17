import React from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import Card from './atoms/Card';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div className="blog-wrapper">
        <Fade>
          <h3>Blogs</h3>
          <hr />
        </Fade>
        <div className="cards-wrapper">
          {/* eslint-disable-next-line array-callback-return */}
          {this.state.items.map(blog => (
            <Fade key={`fade${blog.id}`}>
              <div className="post-container">
                <Card
                  key={blog.id}
                  heading={blog.title}
                  paragraph={blog.content}
                  projectLink={blog.url}
                />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    // AIzaSyDMUmHFTiH2inoPDgxYYi2FQdERtdkQo3E
    //        https://asishtom.blogspot.com/
    //        https://www.googleapis.com/blogger/v3/blogs/byurl?url=https://asishtom.blogspot.com/
    return axios
      .get('https://api.asishtom.dev/posts')
      .then(response => response.data)
      .then(responseJson => {
        this.setState({
          items: responseJson.items,
        });
      });
  }

  componentDidUpdate() {
    // Do something if any updates
  }
}

export default Blog;
