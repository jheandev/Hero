

import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../templates/Frontend';
import CardActivity from '../molecules/CardActivity';

import HeroHeaderImage from '../assets/hero-header-image.png';


import * as S from './styles'




function Main() {
  return (
  <Frontend>
    <S.Container>
      <div>
           <h1>Design driven development of your web product</h1>
           <h6>
            We are a full service digital agency that builds immesive user
            experience.
           </h6>
            
            <ButtonContact />
      </div>


      <S.ColumImage>
          <CardActivity />


           <img src={HeroHeaderImage} alt="Mulher fazendo pesquisa"/>
      </S.ColumImage>

    </S.Container>
  </Frontend>
  );

}
export default Main;
