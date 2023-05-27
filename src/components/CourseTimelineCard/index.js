// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseItem} = props
  const {courseTitle, description, tagsList, duration} = courseItem
  console.log(props)
  return (
    <div className="bg2">
      <div className="min1">
        <h1>{courseTitle}</h1>
        <div className="min2">
          <AiFillClockCircle className="im" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tagsList">
        {tagsList.map(eachItem => (
          <li key={eachItem.id} className="item">
            <p>{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
