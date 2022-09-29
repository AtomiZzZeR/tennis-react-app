import React from 'react';
import Styled from './AboutClub.styles';
import img from '../../../assets/images/about-club/img.jpg';
import { v4 as uuid } from 'uuid';
import iconSeven from '../../../assets/images/about-club/icon-seven.svg';
import iconFour from '../../../assets/images/about-club/icon-four.svg';
import iconThree from '../../../assets/images/about-club/icon-three.svg';

interface IBlock {
  id: string;
  icon: string;
  alt: string;
  title: string;
}

const AboutClub = () => {
  const content: IBlock[] = [
    { id: uuid(), icon: iconSeven, alt: 'icon seven', title: 'Летних грунтовых кортов' },
    { id: uuid(), icon: iconFour, alt: 'icon four', title: 'Зимних корта с покрытием «искусственная трава»' },
    { id: uuid(), icon: iconThree, alt: 'icon three', title: 'Зимних корта с покрытием «hard»' },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Title>О клубе</Styled.Title>

      <Styled.Box>
        <Styled.Img
          src={img}
          alt={'image tennis club'}
        />

        <Styled.BoxContent>
          <Styled.TitleContent>Петербургский теннисный клуб имени М.А. Пасечникова</Styled.TitleContent>
          <Styled.Content>
            Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur scelerisque. Posuere ipsum tellus
            dignissim etiam lorem ultrices risus viverra. Purus volutpat phasellus viverra vestibulum quis. Gravida
            pretium odio enim ut id tempus semper. Urna cum at in iaculis mauris at. Tellus, a euismod tincidunt eu orci
            faucibus. Mi faucibus pellentesque molestie nunc, et, tellus. Neque cras mattis dolor id. Maecenas vivamus
            tristique donec neque id convallis. Feugiat fusce at est at.
            <br />
            <br /> Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere sit. Gravida commodo egestas
            pharetra, mi interdum. Ullamcorper pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut lacus,
            sed neque id dictum. At enim quis eu, mattis aliquet varius in eu venenatis.
            <br />
            <br /> Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget urna magna interdum feugiat ut. In
            purus rhoncus egestas euismod morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis. Tempor
            sit nulla ac lorem placerat congue. Nulla purus vestibulum suscipit pellentesque risus non.
          </Styled.Content>
          <Styled.BoxBlocks>
            {content.map(({ id, icon, alt, title }) => (
              <Styled.Block key={id}>
                <Styled.Icon
                  src={icon}
                  alt={alt}
                />
                <Styled.TitleBlock>{title}</Styled.TitleBlock>
              </Styled.Block>
            ))}
          </Styled.BoxBlocks>
        </Styled.BoxContent>
      </Styled.Box>
    </Styled.Wrapper>
  );
};

export default AboutClub;
