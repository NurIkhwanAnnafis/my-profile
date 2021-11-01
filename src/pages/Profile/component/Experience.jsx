import { Fragment } from "react";
import { dataExperience } from "../settings/ref";

const Experience = (props) => {
  return (
    <Fragment>
      <h3>MY EXPERIENCE</h3>
      {dataExperience.map(val => (
        <Fragment>
          <h5><b>{val.company}</b></h5>
          {val.work.map(detailWork => (
            <Fragment>
              <h6>{`${detailWork.desciption}, ${detailWork.year}`}</h6>
              <ul style={{ paddingLeft: 20 }}>
                {detailWork.note.map(detailNote =>   
                  <li>
                    {detailNote}
                  </li>
                )}
              </ul>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Fragment>
  )
}

export default Experience;