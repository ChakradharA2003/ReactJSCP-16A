// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {
    id,
    name,
    comment,
    isLiked,
    onChangeLikeImage,
    onDeleteComment,
    backgroundColors,
  } = props
  const onClickedLikeImage = () => {
    onChangeLikeImage(id)
  }
  const onClickedDeleteImage = () => {
    onDeleteComment(id)
  }
  let countOfIndex = -1
  const colors = () => {
    const color = backgroundColors
    if (countOfIndex > 7) {
      countOfIndex = 0
    } else {
      countOfIndex += 1
    }
    return color[countOfIndex]
  }
  const color = colors()
  const letter = name.slice(0, 1)
  const time = formatDistanceToNow(new Date())
  const likePara = isLiked ? 'like-para' : 'not-liked-para'
  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="list-container">
      <div className="except-image-container">
        <p className={`logo-letter ${color}`}>{letter}</p>
        <div className="name-comment-container">
          <div className="name-time">
            <h1 className="name">{name}</h1>
            <p className="time">{time}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="images-container">
        <div className="like-container">
          <img src={likedImage} className="like-image" alt="like" />
          <button
            type="button"
            className="btn-style"
            onClick={onClickedLikeImage}
          >
            <p className={likePara}>Like</p>
          </button>
        </div>
        <button
          type="button"
          className="btn-style"
          onClick={onClickedDeleteImage}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
