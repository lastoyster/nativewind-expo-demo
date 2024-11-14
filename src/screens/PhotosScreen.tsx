
import React from 'react';
import styled from 'styled-components/native';

import { RootTabScreenProps } from '../types';
import PhotoList from '../components/PhotoList';
import usePhotosReduxSaga from '../hooks/usePhotosReduxSaga';

type PhotosScreenProps = RootTabScreenProps<'Photos'>;

const PhotosScreen: React.VFC<PhotosScreenProps> = () => {
  const { data, isLoading } = usePhotosReduxSaga(5);

  return (
    <Wrapper>
      <PhotoList data={data} isLoading={isLoading} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 0 10px;
`;

export default PhotosScreen;
