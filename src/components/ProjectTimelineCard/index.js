// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectItem} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectItem
  return (
    <div className="bg1">
      <img src={imageUrl} alt="project" className="pImg" />
      <div className="min1">
        <h1>{projectTitle}</h1>
        <div className="min2">
          <AiFillCalendar className="im" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
