import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div{
    width: 50%;
  }

  h1{
    color: #1E255E;
    font-size: 58px;
    font-weight: bold;

  }

  h6 {
    font-size: 18px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    padding-right: 150px;
    margin-top: 25px;


  }

`;

export const ColumImage = styled.div`
   text-align: right;
   position: relative;

   img {
    margin-left: 108px;
   }
 

`;