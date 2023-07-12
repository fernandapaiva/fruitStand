import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  background-color: ${props => props.checked ? '#DA0D1E' : '#f0f4f7'};
  border-color: ${props => props.checked ? '#DA0D1E' : '#212324'};
`;