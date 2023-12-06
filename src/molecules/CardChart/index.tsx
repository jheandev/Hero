import {  LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import * as S from './styles';
import { useCallback } from 'react';

const CardChart = () => {
    const amountBars = Array.from(Array(12).keys());
     
    const fillZero = useCallback((value: number) => {
         const number = (value + 1).toString();

        return number.padStart(2, "0");

    }, [])

    return (
    (<S.Container>
        <div>
            <LuArrowLeft />
            <strong>Stats</strong>
            <LuArrowRight />
        </div>

        <S.Chart>
            {amountBars.map((item) => (
                <>
            <div key={String(item)}>
                <div>
                     <span></span>
                </div>
                <small>{fillZero(item)}</small>    
            </div>
              
            
            
                </>
            ))}
        </S.Chart>
            
       


    </S.Container>)

    )
  

}

export default CardChart;