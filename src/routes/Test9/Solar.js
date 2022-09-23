import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = ({planets, setPlanets}) => {

  return (
    <div className={cssSpace}>
      {/* answer */}
      <div className={cssSun}>
        {planets.map((planet, index) => {
          return (
            <div key={index} className={cssPlanet({...planet})} />
          )
        })}
      </div>
    </div>
  )
};

export default Solar;
