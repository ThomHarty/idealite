import React, {ReactElement, useState} from 'react';

import {
  IUploadPhotoTemplateProps,
  UploadPhotoTemplate,
} from '../../ui/templates';

export const UploadPhoto = ({navigation}: any): ReactElement => {
  const [avatar, setAvatar] = useState('');
  const props: IUploadPhotoTemplateProps = {
    onPressSkip: () => navigation.navigate('CreateBio'),
    onPressUpload: () => setAvatar('https://placeimg.com/640/480/people'),
    onPressNext: () => navigation.navigate('CreateBio'),
    avatar,
  };

  return <UploadPhotoTemplate {...props} />;
};
