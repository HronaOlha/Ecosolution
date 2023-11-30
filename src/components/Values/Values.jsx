import PropTypes from "prop-types";
import sprite from "../../images/sprite.svg";

import {
  ValuesSection,
  ValuesTexts,
  ValuesGrid,
  WindFarmImg,
  WorkerTab,
} from "./Values.styled";

import windFarmTab from "../../images/wind-farms-tab.png";
import windFarmDesk from "../../images/wind-farms-desk.png";
import workerTab from "../../images/worker-by-solar-panels-tab.png";
import workerDesk from "../../images/worker-by-solar-panels-desk.png";

const Values = ({ deviceType }) => {
  return (
    <ValuesSection>
      <ValuesTexts>
        <h2>Main values of our company</h2>
        <p>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world`s energy needs.
        </p>
      </ValuesTexts>
      <ValuesGrid>
        <div>
          <h3>
            <svg>
              <use href={sprite + "#maximize-circle"} />
            </svg>
            Openness
          </h3>
          <p>to the world, people, new ideas and projects</p>
        </div>
        <div>
          <h3>
            <svg>
              <use href={sprite + "#global-edit"} />
            </svg>
            Responsibility
          </h3>
          <p>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </div>
        <div>
          <h3>
            <svg>
              <use href={sprite + "#cpu-charge"} />
            </svg>
            Innovation
          </h3>
          <p>
            we use the latest technology to implement non-standard solutions
          </p>
        </div>
        <div>
          <h3>
            <svg>
              <use href={sprite + "#ranking"} />
            </svg>
            Quality
          </h3>
          <p>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </div>
        {deviceType === "tablet" && (
          <>
            <WindFarmImg src={windFarmTab} alt="wind farms field" />
            <WorkerTab src={workerTab} alt="worker by solar panels" />
          </>
        )}
        {deviceType === "desktop" && (
          <>
            <WindFarmImg src={windFarmDesk} alt="wind farms field" />
            <WorkerTab src={workerDesk} alt="worker by solar panels" />
          </>
        )}
      </ValuesGrid>
    </ValuesSection>
  );
};

export default Values;

Values.propTypes = {
  deviceType: PropTypes.string,
};
