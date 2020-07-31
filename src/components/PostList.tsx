import React, { Component } from 'react';
import {connect, RootStateOrAny} from 'react-redux';
import { fetchPostsAndUsers} from '../actions';
import User from './User';
import { IPost } from '../models/IPost';

interface Props {
  posts: [IPost];
  fetchPostsAndUsers: () => void;
}

const mapState = (state: RootStateOrAny) => {
  return { posts: state.posts };
}

const connector = connect(mapState, { fetchPostsAndUsers } );

class PostList extends Component<Props> {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map( post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
              <User userId={post.userId}/>
          </div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

export default connector(PostList);