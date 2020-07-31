import React, { Component } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { IUser } from '../models/IUser';

interface Props {
  userId: number;
  user: IUser | null;
}

const mapState = (state: RootStateOrAny, ownProps: any) => {
  return { user: state.users.find((user: IUser) => user.id === ownProps.userId)}
};

const connector = connect(mapState);

class User extends Component<Props> {
  render() {
  const { user }: Props = this.props;

  if (!user) {
    return null
  }
  return <div className="header">{user.name}</div>
  }
}

export default connector(User);