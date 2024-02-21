import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentCount: 0,
    nameInput: '',
    commentInput: '',
    commentsArray: [],
  }

   onChangeLikeImage = id => {
    this.setState(prevState => ({
      commentsArray: prevState.commentsArray.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsArray} = this.state
    const filteredComments = commentsArray.filter(each => each.id !== id)
    this.setState({
      commentsArray: filteredComments,
    })
    this.setState(prevState => ({
      commentCount: prevState.commentCount - 1,
    }))
  }

  onChangeName = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
    }
    console.log(newComment)
    this.setState(prevState => ({
      commentCount: prevState.commentCount + 1,
      commentsArray: [...prevState.commentsArray, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {nameInput, commentInput, commentsArray, commentCount} = this.state
    return (
      <div className="bg-container">
        <div className="comment-container">
          <form onSubmit={this.onAddComment}>
            <div className="inputs-container">
              <h1 className="heading">Comments</h1>
              <p className="para">Say something about 4.O Technologies</p>
              <input
                type="text"
                className="input-text"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={nameInput}
              />
              <textarea
                rows="10"
                cols="42"
                placeholder="Your Comment"
                className="input-comment"
                onChange={this.onChangeComment}
                value={commentInput}
              />

              <button type="submit" className="add-btn">
                Add Comment
              </button>
            </div>
          </form>
          <img
            src="
https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-image"
          />
        </div>
        <hr />
        <div className="count-container">
          <p className="comment-count">{commentCount}</p>
          <p className="comments-para">Comments</p>
        </div>
        <ul className="comments-list">
          {commentsArray.map(comment => (
            <CommentItem
              key={comment.id}
              id={comment.id}
              name={comment.name}
              comment={comment.comment}
              isLiked={comment.isLiked}
              onChangeLikeImage={this.onChangeLikeImage}
              onDeleteComment={this.onDeleteComment}
              backgroundColors={initialContainerBackgroundClassNames}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
