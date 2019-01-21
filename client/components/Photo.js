import React from "react";
import { Link } from "react-router";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              className="grid-photo"
              alt={post.caption}
              src={post.display_src}
            />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span className="likes-heart" key={post.likes}>
              {post.likes}
            </span>
          </CSSTransitionGroup>
          <figcaption>
            <p>{post.caption}</p>
            <div className="control-buttons">
              <button
                className="likes"
                onClick={this.props.increment.bind(null, i)}
              >
                &hearts; {post.likes}
              </button>
              <Link className="button" to={`/view/${post.code}`}>
                <span className="comment-count">
                  <span className="speech-bubble" />
                  {comments[post.code] ? comments[post.code].length : 0}
                </span>
              </Link>
            </div>
          </figcaption>
        </div>
      </figure>
    );
  }
});

export default Photo;
