import styled from 'styled-components';


export const ProfileImgBox = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfileImg = styled.img`
  width:75%;
  height:75%;
`

const TooltipText = styled.span`
    visibility: hidden;
    position: absolute;
    z-index: 2;
    width: 100px;
    color: white;
    font-size: 12px;
    background-color: #192733;
    border-radius: 10px;
    padding: 10px 15px 10px 15px;
`

