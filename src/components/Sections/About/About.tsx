import React from 'react';
import Styled from './About.styles';
import img from '../../../assets/images/about/img.jpg';
import { v4 as uuid } from 'uuid';

interface IItem {
  id: string;
  content: string;
}

const About = () => {
  const content: IItem[] = [
    {
      id: uuid(),
      content: `Euismod diam, vel venenatis bibendum 
				sodales sem hendrerit vulputate sagittis.`,
    },
    {
      id: uuid(),
      content: `Nisl senectus sed malesuada donec. 
				Interdum malesuada bibendum imperdiet elementum auctor vitae in.`,
    },
    {
      id: uuid(),
      content: `Quam purus ornare dictum pharetra. 
				Sed viverra tellus sollicitudin urna, sagittis.`,
    },
    {
      id: uuid(),
      content: `Scelerisque urna senectus commodo, nam. 
				Donec nibh tempus imperdiet nisi, tincidunt mus egestas nisl nullam.`,
    },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.Img
            src={img}
            alt={'image tennis player'}
          />

          <Styled.BoxContent>
            <Styled.Title>Спортивный клуб</Styled.Title>
            <Styled.Description>
              Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. Ultricies erat pretium risus quam
              tincidunt non viverra porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet
              aliquet ultrices mauris pellentesque. Non ipsum commodo, sit mi sit netus aenean nisl. Donec sit
              pellentesque enim, vestibulum. <br />
              <br /> Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
            </Styled.Description>

            <Styled.TitleList>Ornare orci ut dictum nulla fames. </Styled.TitleList>
            <Styled.List>
              {content.map(({ id, content }) => (
                <Styled.Item key={id}>{content}</Styled.Item>
              ))}
            </Styled.List>
          </Styled.BoxContent>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default About;
