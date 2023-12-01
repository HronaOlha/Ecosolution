import {
  ElectricitySection,
  ElectricityTitle,
  ElectricityCounter,
  VerticalLine,
} from "./Electricity.styled";

const Electricity = () => {
  return (
    <ElectricitySection>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <VerticalLine />
      <ElectricityCounter>
        <p>1.134.147.814</p>
        <span>kWh</span>
      </ElectricityCounter>
    </ElectricitySection>
  );
};

export default Electricity;
