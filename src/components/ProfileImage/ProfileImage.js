import React from 'react';
import { ProfileImg, ProfileImgBox, TooltipText } from './ProfileImageStyles';


const ProfileImage = () => (
  <ProfileImgBox>
    <ProfileImg src='/images/avatar-green.svg' alt='avatar' />
    {/* <span>Hello there &#128563;</span> */}
    
  </ProfileImgBox>
);

export default ProfileImage;