import React from 'react';
// react-router-dom
import { useHistory } from 'react-router-dom';
// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// redux
import { useSelector } from 'react-redux';
// util
import { smallImage } from '../util';
// images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

function GameDetail({ pathId }) {
  const history = useHistory();
  // exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  // get star
  const getStars = (rating) => {
    const stars = [];
    const flooredRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= flooredRating) {
        stars.push(<img key={i} src={starFull} alt='full star' />);
      } else {
        stars.push(<img key={i} src={starEmpty} alt='empty star' />);
      }
    }
    return stars;
  };

  // get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
      case 'PlayStation 5':
        return playstation;
      case 'Xbox One':
      case 'Xbox Series S/X':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  // data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className='rating'>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars(game.rating)}
              </div>
              <Info>
                <h3>Platform</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.slug}
              />
            </Media>
            <Description>{game.description_raw}</Description>
            <div className='gallery'>
              {screen.results.map((screen, i) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt={`${game.slug} screenshot ${i + 1}`}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rebeccapurple;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.p)`
  margin: 5rem 0;
`;

export default GameDetail;
