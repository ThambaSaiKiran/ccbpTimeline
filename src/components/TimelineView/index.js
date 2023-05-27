// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="bg">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        cardWidth={400}
        cardHeight={50}
      >
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'PROJECT') {
            return (
              <ProjectTimelineCard key={eachItem.id} projectItem={eachItem} />
            )
          }
          return <CourseTimelineCard key={eachItem.id} courseItem={eachItem} />
        })}
      </Chrono>
    </div>
  )
}

export default TimeLineView
