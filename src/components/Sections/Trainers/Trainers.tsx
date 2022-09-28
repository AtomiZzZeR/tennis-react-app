import Styled from './Trainers.styles';
import { v4 as uuid } from 'uuid';
import { Trainer } from '../../Trainer';
import iconLeft from '../../../assets/images/trainers/icon-left.svg';
import iconRight from '../../../assets/images/trainers/icon-right.svg';
import img1 from '../../../assets/images/trainers/img-trainer1.jpg';
import img2 from '../../../assets/images/trainers/img-trainer2.jpg';
import img3 from '../../../assets/images/trainers/img-trainer3.jpg';
import img4 from '../../../assets/images/trainers/img-trainer4.jpg';
import img5 from '../../../assets/images/trainers/img-trainer5.jpg';
import img6 from '../../../assets/images/trainers/img-trainer6.jpg';

interface ITrainer {
  id: string;
  img: string;
  name: string;
  content: string;
}

const Trainers = () => {
  const data: ITrainer[] = [
    {
      id: uuid(),
      img: img1,
      name: 'Pulvinar aliquam',
      content: `Arcu elit massa amet turpis vel consequat pellentesque sit.`,
    },
    {
      id: uuid(),
      img: img2,
      name: 'Pretium odio',
      content: `Bibendum aliquam volutpat nisl a duis in nisi. 
				In sed commodo lorem morbi quis.`,
    },
    {
      id: uuid(),
      img: img3,
      name: 'Aliquet consectetur',
      content: `Id sapien sed nibh fermentum massa posuere ipsum. Diam in.`,
    },
    {
      id: uuid(),
      img: img4,
      name: 'Blandit augue',
      content: `Scelerisque accumsan pretium justo, vitae elit. 
				Dolor semper morbi sit auctor vel diam eros.`,
    },
    {
      id: uuid(),
      img: img5,
      name: 'Lorem lacus',
      content: `Adipiscing amet, viverra dignissim egestas. 
				Sed nibh egestas venenatis faucibus. `,
    },
    {
      id: uuid(),
      img: img6,
      name: 'Sed erat',
      content: `Quis ullamcorper pretium lacus risus tellus dolor etiam. `,
    },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.BoxMain>
            <Styled.Title>Тренерский состав</Styled.Title>

            <Styled.BoxButtons>
              <Styled.Button>
                <img
                  src={iconLeft}
                  alt={'icon arrow left'}
                />
              </Styled.Button>
              <Styled.Button>
                <img
                  src={iconRight}
                  alt={'icon arrow left'}
                />
              </Styled.Button>
            </Styled.BoxButtons>
          </Styled.BoxMain>

          <Styled.Box>
            {data.map(({ id, img, name, content }) => (
              <Trainer
                id={id}
                img={img}
                name={name}
                content={content}
                key={id}
              />
            ))}
          </Styled.Box>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Trainers;
