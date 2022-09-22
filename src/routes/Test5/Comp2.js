import { cssWrapper } from './style';

const Comp2 = ({latest}) => {
  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: {latest?.value}</div>
    </>
  )
}

export default Comp2;